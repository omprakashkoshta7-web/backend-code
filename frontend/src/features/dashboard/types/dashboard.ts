export interface DashboardBookmark {
  id: string;
  question_id?: string;
  title: string;
  slug: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic_name?: string;
  created_at?: string;
}

export interface DashboardRecent {
  id: string;
  title: string;
  slug: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic_name?: string;
  viewed_at: string;
}

export interface DashboardStats {
  user_id: string;
  user_name: string;
  solved: number;
  easy: number;
  medium: number;
  hard: number;
  total_submissions: number;
  streak: number;
  points: number;
}

export interface DashboardTopicProgress {
  topic_id: string;
  topic_name: string;
  total: number;
  solved: number;
  pct: number;
}

export interface DashboardSubscription {
  id: string;
  user_id: string;
  plan: 'free' | 'premium';
  status: 'active' | 'inactive' | 'cancelled';
  start_date: string;
  end_date?: string;
}

export interface DashboardData {
  stats: DashboardStats;
  bookmarks: DashboardBookmark[];
  recent_questions: DashboardRecent[];
  topic_progress: DashboardTopicProgress[];
  completed_topics: string[];
  subscription: DashboardSubscription | null;
}
