import { Router, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { authenticate, AuthRequest } from '../middleware/auth';
import {
  getCommunities, getCommunity, getCommunityByInvite, addCommunity, updateCommunity,
  getAnswers, addAnswer, upvoteAnswer, acceptAnswer,
  getChatMessages, addChatMessage,
  getDiscussions, getAllDiscussions, addDiscussion, addDiscussionReply,
  getStudyProgress, addStudyProgress,
  getPoints, addPoints, getLeaderboard,
  getChallenges, addChallenge, updateChallenge, getChallengeProgress, upsertChallengeProgress,
  getNotes, addNote, updateNote,
  getInterviews, addInterview,
  getResources, addResource,
  getContests, addContest, addContestSubmission, getContestSubmissions, getContestLeaderboard,
  getRoadmaps, addRoadmap, getRoadmapProgress, upsertRoadmapProgress,
} from '../data/db';
import type {
  Community, Answer, ChatMessage, Discussion, DiscussionReply,
  StudyProgress, PointsEntry, WeeklyChallenge, ChallengeProgress,
  CommunityNote, InterviewExperience, CommunityResource,
  Contest, ContestSubmission, Roadmap, RoadmapProgress,
} from '../types';

const router = Router();

// Helper: check membership
function requireMember(communityId: string, userId: string): Community | null {
  const c = getCommunity(communityId);
  if (!c || !c.members.some(m => m.user_id === userId)) return null;
  return c;
}

function isOwner(req: AuthRequest, community: Community): boolean {
  return community.created_by === req.user!.id;
}

// ====== COMMUNITIES ======
router.get('/communities', authenticate, (req: AuthRequest, res: Response) => {
  const all = getCommunities();
  res.json(all.filter(c => c.members.some(m => m.user_id === req.user!.id)));
});

router.post('/communities', authenticate, (req: AuthRequest, res: Response) => {
  const { name, description } = req.body;
  if (!name || !name.trim()) return res.status(400).json({ error: 'Community name required' });
  const inviteCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  const community: Community = {
    id: uuidv4(), name: name.trim(), description: description || '',
    created_by: req.user!.id, created_by_name: req.user!.name,
    invite_code: inviteCode,
    members: [{ user_id: req.user!.id, name: req.user!.name, joined_at: new Date().toISOString() }],
    created_at: new Date().toISOString(),
  };
  addCommunity(community);
  res.status(201).json(community);
});

router.post('/communities/join', authenticate, (req: AuthRequest, res: Response) => {
  const { invite_code } = req.body;
  if (!invite_code) return res.status(400).json({ error: 'Invite code required' });
  const community = getCommunityByInvite(invite_code.toUpperCase());
  if (!community) return res.status(404).json({ error: 'Invalid invite code' });
  if (!community.members.some(m => m.user_id === req.user!.id)) {
    community.members.push({ user_id: req.user!.id, name: req.user!.name, joined_at: new Date().toISOString() });
    updateCommunity(community.id, { members: community.members });
  }
  res.json(community);
});

router.get('/communities/invite/:code', (req: AuthRequest, res: Response) => {
  const community = getCommunityByInvite(req.params.code.toUpperCase());
  if (!community) return res.status(404).json({ error: 'Invalid invite code' });
  res.json({ id: community.id, name: community.name, description: community.description, created_by_name: community.created_by_name, invite_code: community.invite_code, member_count: community.members.length });
});

router.get('/communities/:id', authenticate, (req: AuthRequest, res: Response) => {
  const c = requireMember(req.params.id, req.user!.id);
  if (!c) return res.status(403).json({ error: 'Not found or not a member' });
  res.json(c);
});

router.delete('/communities/:id/members', authenticate, (req: AuthRequest, res: Response) => {
  const c = getCommunity(req.params.id);
  if (!c) return res.status(404).json({ error: 'Community not found' });
  c.members = c.members.filter(m => m.user_id !== req.user!.id);
  updateCommunity(c.id, { members: c.members });
  res.json({ success: true });
});

// ====== ANSWERS ======
router.get('/answers/:questionSlug', (req: AuthRequest, res: Response) => { res.json(getAnswers(req.params.questionSlug)); });

router.post('/answers', authenticate, (req: AuthRequest, res: Response) => {
  const { question_slug, code, language, explanation } = req.body;
  if (!question_slug || !code) return res.status(400).json({ error: 'Question slug and code required' });
  const answer: Answer = { id: uuidv4(), question_slug, user_id: req.user!.id, user_name: req.user!.name, code, language: language || 'javascript', explanation: explanation || '', created_at: new Date().toISOString(), upvotes: 0 };
  addAnswer(answer);
  addPoints({ id: uuidv4(), user_id: req.user!.id, user_name: req.user!.name, community_id: 'global', points: 10, reason: 'Answer posted', created_at: new Date().toISOString() });
  res.status(201).json(answer);
});

router.post('/answers/:id/upvote', authenticate, (req: AuthRequest, res: Response) => {
  const updated = upvoteAnswer(req.params.id);
  if (!updated) return res.status(404).json({ error: 'Answer not found' });
  addPoints({ id: uuidv4(), user_id: updated.user_id, user_name: updated.user_name, community_id: 'global', points: 5, reason: 'Answer upvoted', created_at: new Date().toISOString() });
  res.json(updated);
});

router.post('/answers/:id/accept', authenticate, (req: AuthRequest, res: Response) => {
  const updated = acceptAnswer(req.params.id);
  if (!updated) return res.status(404).json({ error: 'Answer not found' });
  addPoints({ id: uuidv4(), user_id: updated.user_id, user_name: updated.user_name, community_id: 'global', points: 15, reason: 'Answer accepted', created_at: new Date().toISOString() });
  res.json(updated);
});

// ====== CHAT ======
router.get('/chat/:communityId', authenticate, (req: AuthRequest, res: Response) => {
  if (!requireMember(req.params.communityId, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  res.json(getChatMessages(req.params.communityId));
});

router.post('/chat/:communityId', authenticate, (req: AuthRequest, res: Response) => {
  if (!requireMember(req.params.communityId, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  const { message } = req.body;
  if (!message || !message.trim()) return res.status(400).json({ error: 'Message required' });
  const msg: ChatMessage = { id: uuidv4(), community_id: req.params.communityId, user_id: req.user!.id, user_name: req.user!.name, message: message.trim(), created_at: new Date().toISOString() };
  addChatMessage(msg);
  res.status(201).json(msg);
});

// ====== DISCUSSIONS ======
router.get('/discussions/all', authenticate, (_req: AuthRequest, res: Response) => { res.json(getAllDiscussions()); });
router.get('/discussions/:questionSlug', (_req: AuthRequest, res: Response) => { res.json(getDiscussions(_req.params.questionSlug)); });

router.post('/discussions', authenticate, (req: AuthRequest, res: Response) => {
  const { question_slug, title, content } = req.body;
  if (!question_slug || !content) return res.status(400).json({ error: 'Question slug and content required' });
  const d: Discussion = { id: uuidv4(), question_slug, user_id: req.user!.id, user_name: req.user!.name, title: title || '', content, created_at: new Date().toISOString(), replies: [] };
  addDiscussion(d);
  addPoints({ id: uuidv4(), user_id: req.user!.id, user_name: req.user!.name, community_id: 'global', points: 8, reason: 'Started discussion', created_at: new Date().toISOString() });
  res.status(201).json(d);
});

router.post('/discussions/:id/reply', authenticate, (req: AuthRequest, res: Response) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ error: 'Content required' });
  const reply: DiscussionReply = { id: uuidv4(), user_id: req.user!.id, user_name: req.user!.name, content, created_at: new Date().toISOString() };
  const updated = addDiscussionReply(req.params.id, reply);
  if (!updated) return res.status(404).json({ error: 'Discussion not found' });
  addPoints({ id: uuidv4(), user_id: req.user!.id, user_name: req.user!.name, community_id: 'global', points: 3, reason: 'Discussion reply', created_at: new Date().toISOString() });
  res.status(201).json(updated);
});

// ====== STUDY PROGRESS ======
router.get('/progress/:communityId', authenticate, (req: AuthRequest, res: Response) => {
  if (!requireMember(req.params.communityId, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  res.json(getStudyProgress(req.params.communityId));
});

router.post('/progress', authenticate, (req: AuthRequest, res: Response) => {
  const { community_id, questions_solved, note } = req.body;
  if (!community_id) return res.status(400).json({ error: 'Community ID required' });
  if (!requireMember(community_id, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  const p: StudyProgress = { id: uuidv4(), user_id: req.user!.id, user_name: req.user!.name, community_id, date: new Date().toISOString().split('T')[0], questions_solved: questions_solved || 1, note: note || '' };
  addStudyProgress(p);
  addPoints({ id: uuidv4(), user_id: req.user!.id, user_name: req.user!.name, community_id, points: (questions_solved || 1) * 2, reason: 'Solved questions', created_at: new Date().toISOString() });
  res.status(201).json(p);
});

// ====== LEADERBOARD ======
router.get('/leaderboard/:communityId', authenticate, (req: AuthRequest, res: Response) => {
  if (!requireMember(req.params.communityId, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  res.json(getLeaderboard(req.params.communityId));
});

router.get('/leaderboard/global', (_req: AuthRequest, res: Response) => {
  res.json(getLeaderboard('global'));
});

// ====== POINTS (internal scoring) ======
router.post('/points', authenticate, (req: AuthRequest, res: Response) => {
  const { community_id, points, reason } = req.body;
  const p: PointsEntry = { id: uuidv4(), user_id: req.user!.id, user_name: req.user!.name, community_id: community_id || 'global', points: points || 1, reason: reason || 'Activity', created_at: new Date().toISOString() };
  addPoints(p);
  res.status(201).json(p);
});

// ====== WEEKLY CHALLENGES ======
router.get('/challenges/:communityId', authenticate, (req: AuthRequest, res: Response) => {
  if (!requireMember(req.params.communityId, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  res.json(getChallenges(req.params.communityId));
});

router.post('/challenges', authenticate, (req: AuthRequest, res: Response) => {
  const { community_id, title, description, days, start_date, end_date } = req.body;
  const c = getCommunity(community_id);
  if (!c || !isOwner(req, c)) return res.status(403).json({ error: 'Only owner can create challenges' });
  if (!requireMember(community_id, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  const challenge: WeeklyChallenge = { id: uuidv4(), community_id, created_by: req.user!.id, title, description: description || '', days: days || [], start_date, end_date, active: true };
  addChallenge(challenge);
  res.status(201).json(challenge);
});

router.post('/challenges/:id/progress', authenticate, (req: AuthRequest, res: Response) => {
  const { completed_days } = req.body;
  const progress: ChallengeProgress = { id: uuidv4(), challenge_id: req.params.id, user_id: req.user!.id, completed_days: completed_days || [] };
  upsertChallengeProgress(progress);
  res.status(201).json(progress);
});

router.get('/challenges/:id/progress', authenticate, (req: AuthRequest, res: Response) => {
  res.json(getChallengeProgress(req.params.id));
});

router.put('/challenges/:id', authenticate, (req: AuthRequest, res: Response) => {
  const updated = updateChallenge(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: 'Challenge not found' });
  res.json(updated);
});

// ====== NOTES ======
router.get('/notes/:communityId', authenticate, (req: AuthRequest, res: Response) => {
  if (!requireMember(req.params.communityId, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  res.json(getNotes(req.params.communityId));
});

router.post('/notes', authenticate, (req: AuthRequest, res: Response) => {
  const { community_id, title, content } = req.body;
  if (!community_id || !title) return res.status(400).json({ error: 'Community ID and title required' });
  if (!requireMember(community_id, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  const now = new Date().toISOString();
  const note: CommunityNote = { id: uuidv4(), community_id, user_id: req.user!.id, user_name: req.user!.name, title, content: content || '', created_at: now, updated_at: now };
  addNote(note);
  res.status(201).json(note);
});

router.put('/notes/:id', authenticate, (req: AuthRequest, res: Response) => {
  const updated = updateNote(req.params.id, { title: req.body.title, content: req.body.content });
  if (!updated) return res.status(404).json({ error: 'Note not found' });
  res.json(updated);
});

// ====== INTERVIEW EXPERIENCES ======
router.get('/interviews/:communityId', authenticate, (req: AuthRequest, res: Response) => {
  if (!requireMember(req.params.communityId, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  res.json(getInterviews(req.params.communityId));
});

router.post('/interviews', authenticate, (req: AuthRequest, res: Response) => {
  const { community_id, company, role, rounds, questions_asked, experience, result } = req.body;
  if (!community_id || !company) return res.status(400).json({ error: 'Community ID and company required' });
  if (!requireMember(community_id, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  const interview: InterviewExperience = { id: uuidv4(), community_id, user_id: req.user!.id, user_name: req.user!.name, company, role: role || '', rounds: rounds || 1, questions_asked: questions_asked || [], experience: experience || '', result: result || '', created_at: new Date().toISOString() };
  addInterview(interview);
  addPoints({ id: uuidv4(), user_id: req.user!.id, user_name: req.user!.name, community_id, points: 20, reason: 'Shared interview experience', created_at: new Date().toISOString() });
  res.status(201).json(interview);
});

// ====== RESOURCES ======
router.get('/resources/:communityId', authenticate, (req: AuthRequest, res: Response) => {
  if (!requireMember(req.params.communityId, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  res.json(getResources(req.params.communityId));
});

router.post('/resources', authenticate, (req: AuthRequest, res: Response) => {
  const { community_id, title, type, url, description } = req.body;
  if (!community_id || !title || !url) return res.status(400).json({ error: 'Community ID, title, and URL required' });
  if (!requireMember(community_id, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  const r: CommunityResource = { id: uuidv4(), community_id, user_id: req.user!.id, user_name: req.user!.name, title, type: type || 'other', url, description: description || '', created_at: new Date().toISOString() };
  addResource(r);
  addPoints({ id: uuidv4(), user_id: req.user!.id, user_name: req.user!.name, community_id, points: 7, reason: 'Shared resource', created_at: new Date().toISOString() });
  res.status(201).json(r);
});

// ====== CONTESTS ======
router.get('/contests/:communityId', authenticate, (req: AuthRequest, res: Response) => {
  if (!requireMember(req.params.communityId, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  res.json(getContests(req.params.communityId));
});

router.post('/contests', authenticate, (req: AuthRequest, res: Response) => {
  const { community_id, title, description, questions, duration_minutes, start_time } = req.body;
  const c = getCommunity(community_id);
  if (!c || !isOwner(req, c)) return res.status(403).json({ error: 'Only owner can create contests' });
  if (!requireMember(community_id, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  const start = start_time || new Date().toISOString();
  const end = new Date(new Date(start).getTime() + (duration_minutes || 90) * 60000).toISOString();
  const contest: Contest = { id: uuidv4(), community_id, created_by: req.user!.id, title, description: description || '', questions: questions || [], duration_minutes: duration_minutes || 90, start_time: start, end_time: end, active: true };
  addContest(contest);
  res.status(201).json(contest);
});

router.post('/contests/:id/submit', authenticate, (req: AuthRequest, res: Response) => {
  const { question_slug, passed } = req.body;
  const s: ContestSubmission = { id: uuidv4(), contest_id: req.params.id, user_id: req.user!.id, user_name: req.user!.name, question_slug, passed: passed || false, submitted_at: new Date().toISOString() };
  addContestSubmission(s);
  res.status(201).json(s);
});

router.get('/contests/:id/leaderboard', authenticate, (req: AuthRequest, res: Response) => {
  res.json(getContestLeaderboard(req.params.id));
});

// ====== ROADMAPS ======
router.get('/roadmaps/:communityId', authenticate, (req: AuthRequest, res: Response) => {
  if (!requireMember(req.params.communityId, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  res.json(getRoadmaps(req.params.communityId));
});

router.post('/roadmaps', authenticate, (req: AuthRequest, res: Response) => {
  const { community_id, title, description, steps } = req.body;
  const c = getCommunity(community_id);
  if (!c || !isOwner(req, c)) return res.status(403).json({ error: 'Only owner can create roadmaps' });
  if (!requireMember(community_id, req.user!.id)) return res.status(403).json({ error: 'Not a member' });
  const roadmap: Roadmap = { id: uuidv4(), community_id, created_by: req.user!.id, title, description: description || '', steps: steps || [], created_at: new Date().toISOString() };
  addRoadmap(roadmap);
  res.status(201).json(roadmap);
});

router.post('/roadmaps/:id/progress', authenticate, (req: AuthRequest, res: Response) => {
  const { completed_steps } = req.body;
  const progress: RoadmapProgress = { id: uuidv4(), roadmap_id: req.params.id, user_id: req.user!.id, completed_steps: completed_steps || [] };
  upsertRoadmapProgress(progress);
  addPoints({ id: uuidv4(), user_id: req.user!.id, user_name: req.user!.name, community_id: 'global', points: 2, reason: 'Roadmap progress', created_at: new Date().toISOString() });
  res.status(201).json(progress);
});

router.get('/roadmaps/:id/progress', authenticate, (req: AuthRequest, res: Response) => {
  res.json(getRoadmapProgress(req.params.id));
});

export default router;
