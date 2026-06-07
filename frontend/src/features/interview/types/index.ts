import type { ExperienceLevel, InterviewMode, RoleId } from '../data/roles';

export interface InterviewPreference {
  id: string;
  user_id: string;
  role: RoleId | string;
  custom_role?: string;
  experience: ExperienceLevel;
  subjects: string[];
  mode: InterviewMode;
  daily_goal: number;
  created_at: string;
  updated_at: string;
}

export type QuestionDifficulty = 'basic' | 'intermediate' | 'advanced';

export interface GeneratedQuestion {
  id: string;
  user_id: string;
  subject: string;
  role: string;
  difficulty: QuestionDifficulty;
  question: string;
  answer: string;
  tags: string[];
  source: 'ai';
  created_at: string;
}

export type MockRoundType = 'technical' | 'coding' | 'behavioral' | 'hr';

export interface MockAnswer {
  question_id: string;
  question: string;
  expected_answer: string;
  user_answer: string;
  audio_data_url?: string;
  feedback: string;
  technical_accuracy: number;
  score: number;
  answered_at: string;
}

export interface MockQuestion {
  id: string;
  question: string;
  expected_answer: string;
}

export interface MockSession {
  id: string;
  user_id: string;
  role: string;
  experience: ExperienceLevel;
  round_type: MockRoundType;
  subject: string;
  questions: MockQuestion[];
  answers: MockAnswer[];
  overall_score: number;
  started_at: string;
  ended_at?: string;
  status: 'in_progress' | 'completed' | 'abandoned';
}

export interface InterviewKit {
  id: string;
  user_id: string;
  role: string;
  custom_role?: string;
  experience: ExperienceLevel;
  subjects: string[];
  file_url: string;
  total_questions: number;
  page_count: number;
  created_at: string;
  role_name?: string;
}

export interface AnswerFeedbackResponse {
  feedback: string;
  technical_accuracy: number;
  score: number;
  overall_score: number;
  answered: number;
  total: number;
}
