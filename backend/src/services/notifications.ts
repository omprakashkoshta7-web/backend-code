import { addNotification } from '../data/db';

const randomPick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const FUN_MESSAGES = {
  welcome: [
    { title: "🎉 Welcome to the CodeSprout fam!", message: "Your DSA journey starts NOW. First solve is the hardest — you've got this! 💪", icon: "🎉" },
    { title: "🚀 Liftoff!", message: "You just signed up. Time to turn that brain into a code-crunching machine!", icon: "🚀" },
    { title: "👋 Hey coder, welcome aboard!", message: "2019 questions are waiting. Pick one, crush it, repeat. Easy peasy 🍋", icon: "👋" },
    { title: "🌱 Sprout activated!", message: "Today's the day you become a problem-solver. Let's grow together!", icon: "🌱" },
  ],
  level_complete: [
    { title: "🎯 Level cleared!", message: "Boom! Another one bites the dust. Next level, same energy? 🔥", icon: "🎯" },
    { title: "⭐ Nailed it!", message: "That wasn't luck, that was skill. Onward! 🏆", icon: "⭐" },
    { title: "💥 Smashed it!", message: "The code gods smile upon you. Keep stacking wins!", icon: "💥" },
    { title: "🏅 Level up!", message: "You just made this level look easy. Impressive, coder!", icon: "🏅" },
  ],
  badge: [
    { title: "🏆 Badge unlocked!", message: "Look at you collecting badges like Pokémon. Gotta catch 'em all!", icon: "🏆" },
    { title: "✨ Achievement unlocked!", message: "That's a shiny new badge. Wear it with pride, champ!", icon: "✨" },
    { title: "🎖️ Milestone reached!", message: "You earned something special today. Show it off!", icon: "🎖️" },
  ],
  streak: [
    { title: "🔥 Streak alert!", message: "3 days in a row? The grind is REAL. Don't stop now!", icon: "🔥" },
    { title: "⚡ You're on fire!", message: "Streak game strong 💪. Skip today and you know what happens...", icon: "⚡" },
    { title: "🌟 Consistent king/queen!", message: "Solving daily? That's how legends are made. Keep going!", icon: "🌟" },
  ],
  nudge: [
    { title: "🤔 Missing you already!", message: "Your keyboard feels lonely. One question today, that's all we ask.", icon: "🤔" },
    { title: "⏰ Daily reminder!", message: "5 minutes of code > 0 minutes of code. Drop in for a quick win!", icon: "⏰" },
    { title: "💡 Pro tip incoming!", message: "Try a Hard problem today. You might surprise yourself!", icon: "💡" },
    { title: "🧠 Brain warmup?", message: "Solve 1 problem in the next 5 mins and earn today's streak ✅", icon: "🧠" },
  ],
  question_solved: [
    { title: "✅ Submission accepted!", message: "That 'Accepted' feels SO good, doesn't it? 😂", icon: "✅" },
    { title: "🎊 First blood!", message: "Your first solve on this topic. The door is now open!", icon: "🎊" },
    { title: "💪 Code warrior!", message: "Another one in the bag. Onto the next!", icon: "💪" },
  ],
  premium: [
    { title: "👑 Premium unlocked!", message: "All 2019 questions are yours. Unleash the beast mode 🦁", icon: "👑" },
    { title: "💎 Welcome to Premium!", message: "No more paywalls, no more limits. Pure coding bliss.", icon: "💎" },
  ],
  system: [
    { title: "📢 Heads up!", message: "New questions added! Fresh meat for your brain 🥩", icon: "📢" },
    { title: "🆕 New content!", message: "We just dropped fresh problems. Go check 'em out!", icon: "🆕" },
  ],
  community_joined: [
    { title: "🤝 Welcome to the crew!", message: "You just joined a community. Time to connect and learn together!", icon: "🤝" },
    { title: "🎉 New community unlocked!", message: "You're in! Introduce yourself and start engaging.", icon: "🎉" },
  ],
  community_left: [
    { title: "👋 Left community", message: "You've left a community. You can always rejoin later!", icon: "👋" },
  ],
  community_created: [
    { title: "🏠 Community created!", message: "Your community is live! Invite members and start building.", icon: "🏠" },
  ],
  post_created: [
    { title: "📝 Post published!", message: "Your answer is live. Others can now learn from you!", icon: "📝" },
    { title: "✍️ Great contribution!", message: "Sharing knowledge is the best way to learn. Nice post!", icon: "✍️" },
  ],
  reply_posted: [
    { title: "💬 Reply posted!", message: "Your thoughts are out there. Keep the conversation going!", icon: "💬" },
    { title: "🗣️ Nice response!", message: "You just added value to the discussion!", icon: "🗣️" },
  ],
  discussion_created: [
    { title: "💭 Discussion started!", message: "Your question is now open for the community to answer!", icon: "💭" },
    { title: "🗣️ New thread!", message: "Great thinking starting this discussion. Answers incoming!", icon: "🗣️" },
  ],
  bookmarked: [
    { title: "🔖 Bookmarked!", message: "Saved for later. Smart move — review is the key to mastery!", icon: "🔖" },
    { title: "📌 Saved!", message: "Added to your bookmarks. Don't forget to come back and solve it!", icon: "📌" },
  ],
  bookmark_removed: [
    { title: "📭 Bookmark removed", message: "Removed from your bookmarks. Hope you already nailed that one!", icon: "📭" },
  ],
  note_created: [
    { title: "📝 Note saved!", message: "Your notes are growing. Keep capturing those insights!", icon: "📝" },
    { title: "📒 Great note!", message: "Documenting what you learn makes it stick. Smart!", icon: "📒" },
  ],
  resource_shared: [
    { title: "🔗 Resource shared!", message: "Thanks for sharing! Your community appreciates it.", icon: "🔗" },
    { title: "📦 Great share!", message: "Helping others learn — that's what makes a great community member!", icon: "📦" },
  ],
  interview_shared: [
    { title: "💼 Experience shared!", message: "Your interview story will help others prepare. Thank you!", icon: "💼" },
    { title: "🎯 Great insight!", message: "Real interview experiences are gold. Thanks for sharing!", icon: "🎯" },
  ],
  challenge_created: [
    { title: "🏆 Challenge created!", message: "A new challenge is live! Let's see who steps up!", icon: "🏆" },
  ],
  roadmap_created: [
    { title: "🗺️ Roadmap created!", message: "Your learning path is set. Time to follow it step by step!", icon: "🗺️" },
  ],
  upvote: [
    { title: "👍 Upvoted!", message: "Your answer got upvoted! Keep writing helpful solutions.", icon: "👍" },
  ],
  chat_sent: [
    { title: "💭 Message sent!", message: "Your message is in the chat. Keep the conversation alive!", icon: "💭" },
  ],
};

export function sendWelcomeNotification(userId: string, userName?: string) {
  const m = randomPick(FUN_MESSAGES.welcome);
  const personalized = m.message.replace('You', userName || 'You');
  return addNotification({ user_id: userId, type: 'welcome', title: m.title, message: personalized, icon: m.icon, link: '/games' });
}

export function sendLevelCompleteNotification(userId: string, levelName: string, stars: number, topic: string, nextLevelId?: number) {
  const m = randomPick(FUN_MESSAGES.level_complete);
  const starText = stars === 3 ? 'a perfect 3 stars' : stars === 2 ? '2 stars' : '1 star';
  const message = `You crushed ${levelName} on ${topic} with ${starText}! ${m.message}`;
  const link = nextLevelId ? `/games/${encodeURIComponent(topic)}/${nextLevelId}` : `/games/${encodeURIComponent(topic)}`;
  return addNotification({ user_id: userId, type: 'level_complete', title: m.title, message, icon: m.icon, link });
}

export function sendBadgeNotification(userId: string, badgeName: string, emoji: string) {
  const m = randomPick(FUN_MESSAGES.badge);
  return addNotification({ user_id: userId, type: 'badge', title: m.title, message: `You unlocked the ${badgeName} ${emoji}! ${m.message}`, icon: emoji, link: '/games' });
}

export function sendStreakNotification(userId: string, days: number) {
  const m = randomPick(FUN_MESSAGES.streak);
  return addNotification({ user_id: userId, type: 'streak', title: m.title, message: `${days}-day streak! ${m.message}`, icon: '🔥', link: '/games' });
}

export function sendNudgeNotification(userId: string) {
  const m = randomPick(FUN_MESSAGES.nudge);
  return addNotification({ user_id: userId, type: 'nudge', title: m.title, message: m.message, icon: m.icon, link: '/games' });
}

export function sendSolveNotification(userId: string, questionTitle: string) {
  const m = randomPick(FUN_MESSAGES.question_solved);
  return addNotification({ user_id: userId, type: 'question_solved', title: m.title, message: `You solved "${questionTitle}"! ${m.message}`, icon: '✅' });
}

export function sendPremiumNotification(userId: string) {
  const m = randomPick(FUN_MESSAGES.premium);
  return addNotification({ user_id: userId, type: 'premium', title: m.title, message: m.message, icon: '👑' });
}

export function sendSystemNotification(userId: string, title: string, message: string, icon = '📢', link?: string) {
  return addNotification({ user_id: userId, type: 'system', title, message, icon, link });
}

export function sendCommunityJoinedNotification(userId: string, communityName: string) {
  const m = randomPick(FUN_MESSAGES.community_joined);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: `You joined "${communityName}". ${m.message}`, icon: '🤝', link: '/communities' });
}

export function sendCommunityLeftNotification(userId: string, communityName: string) {
  const m = randomPick(FUN_MESSAGES.community_left);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: `You left "${communityName}". ${m.message}`, icon: '👋', link: '/communities' });
}

export function sendCommunityCreatedNotification(userId: string, communityName: string) {
  const m = randomPick(FUN_MESSAGES.community_created);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: `"${communityName}" is now live! ${m.message}`, icon: '🏠', link: '/communities' });
}

export function sendPostCreatedNotification(userId: string) {
  const m = randomPick(FUN_MESSAGES.post_created);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: m.message, icon: '📝' });
}

export function sendReplyPostedNotification(userId: string) {
  const m = randomPick(FUN_MESSAGES.reply_posted);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: m.message, icon: '💬' });
}

export function sendDiscussionCreatedNotification(userId: string, title: string) {
  const m = randomPick(FUN_MESSAGES.discussion_created);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: `"${title}" — ${m.message}`, icon: '💭' });
}

export function sendBookmarkedNotification(userId: string, questionTitle: string) {
  const m = randomPick(FUN_MESSAGES.bookmarked);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: `"${questionTitle}" — ${m.message}`, icon: '🔖' });
}

export function sendBookmarkRemovedNotification(userId: string) {
  const m = randomPick(FUN_MESSAGES.bookmark_removed);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: m.message, icon: '📭' });
}

export function sendNoteCreatedNotification(userId: string) {
  const m = randomPick(FUN_MESSAGES.note_created);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: m.message, icon: '📝' });
}

export function sendResourceSharedNotification(userId: string) {
  const m = randomPick(FUN_MESSAGES.resource_shared);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: m.message, icon: '🔗' });
}

export function sendInterviewSharedNotification(userId: string) {
  const m = randomPick(FUN_MESSAGES.interview_shared);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: m.message, icon: '💼' });
}

export function sendChallengeCreatedNotification(userId: string, challengeName: string) {
  const m = randomPick(FUN_MESSAGES.challenge_created);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: `"${challengeName}" — ${m.message}`, icon: '🏆' });
}

export function sendRoadmapCreatedNotification(userId: string) {
  const m = randomPick(FUN_MESSAGES.roadmap_created);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: m.message, icon: '🗺️' });
}

export function sendUpvoteNotification(userId: string) {
  const m = randomPick(FUN_MESSAGES.upvote);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: m.message, icon: '👍' });
}

export function sendChatSentNotification(userId: string) {
  const m = randomPick(FUN_MESSAGES.chat_sent);
  return addNotification({ user_id: userId, type: 'system', title: m.title, message: m.message, icon: '💭' });
}
