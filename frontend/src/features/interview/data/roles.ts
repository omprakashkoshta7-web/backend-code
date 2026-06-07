// Role → suggested subjects mapping for Interview Preparation
// Mirrors backend/src/data/roles.ts

export type RoleId =
  | 'software-developer' | 'frontend' | 'backend' | 'fullstack'
  | 'data-analyst' | 'data-scientist' | 'devops' | 'qa' | 'hr' | 'custom';

export interface Role {
  id: RoleId;
  name: string;
  description: string;
  icon: string;
  isCustom?: boolean;
  subjects: string[];
}

export const ROLES: Role[] = [
  {
    id: 'software-developer',
    name: 'Software Developer',
    description: 'General-purpose software engineering interviews',
    icon: 'Code2',
    subjects: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'System Design', 'DBMS', 'Operating Systems'],
  },
  {
    id: 'frontend',
    name: 'Frontend Developer',
    description: 'React, JS, CSS, browser fundamentals',
    icon: 'Layout',
    subjects: ['JavaScript', 'TypeScript', 'React', 'HTML & CSS', 'Browser Concepts', 'Data Structures & Algorithms'],
  },
  {
    id: 'backend',
    name: 'Backend Developer',
    description: 'Node.js, databases, API design, system design',
    icon: 'Server',
    subjects: ['Node.js', 'Express.js', 'SQL', 'MongoDB', 'System Design', 'API Design', 'Data Structures & Algorithms'],
  },
  {
    id: 'fullstack',
    name: 'Full Stack Developer',
    description: 'End-to-end web development',
    icon: 'Layers',
    subjects: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'System Design', 'Data Structures & Algorithms'],
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    description: 'SQL, Excel, Python, statistics, visualization',
    icon: 'BarChart3',
    subjects: ['SQL', 'Python', 'Excel', 'Statistics', 'Data Visualization'],
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    description: 'ML, deep learning, statistics, math',
    icon: 'Brain',
    subjects: ['Python', 'Machine Learning', 'Statistics', 'Deep Learning', 'SQL', 'Linear Algebra'],
  },
  {
    id: 'devops',
    name: 'DevOps Engineer',
    description: 'Linux, Docker, Kubernetes, CI/CD, cloud',
    icon: 'Cloud',
    subjects: ['Linux', 'Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Networking'],
  },
  {
    id: 'qa',
    name: 'QA / Test Engineer',
    description: 'Testing fundamentals, automation, Selenium',
    icon: 'Bug',
    subjects: ['Testing Fundamentals', 'Selenium', 'Test Cases', 'SQL', 'Automation'],
  },
  {
    id: 'hr',
    name: 'HR Interview',
    description: 'Behavioral, aptitude, communication',
    icon: 'Users',
    subjects: ['HR Questions', 'Communication', 'Aptitude'],
  },
  {
    id: 'custom',
    name: 'Custom Role',
    description: 'Type your own subjects and focus',
    icon: 'Sparkles',
    isCustom: true,
    subjects: [],
  },
];

export type ExperienceLevel = 'fresher' | 'junior' | 'mid' | 'senior';

export const EXPERIENCE_LEVELS: { id: ExperienceLevel; name: string; description: string; icon: string }[] = [
  { id: 'fresher', name: 'Fresher', description: '0–1 year experience', icon: 'GraduationCap' },
  { id: 'junior', name: 'Junior', description: '1–3 years experience', icon: 'Sprout' },
  { id: 'mid', name: 'Mid-Level', description: '3–5 years experience', icon: 'Target' },
  { id: 'senior', name: 'Senior', description: '5+ years experience', icon: 'Trophy' },
];

export type InterviewMode = 'study' | 'pdf' | 'mock' | 'quick';

export const INTERVIEW_MODES: { id: InterviewMode; name: string; description: string; icon: string }[] = [
  { id: 'study', name: 'Study', description: 'In-depth subject learning with questions & notes', icon: 'BookOpen' },
  { id: 'pdf', name: 'Download PDF', description: 'Generate a complete interview kit as PDF', icon: 'FileDown' },
  { id: 'mock', name: 'Mock Interview', description: 'Simulate real interview with AI feedback', icon: 'Mic' },
  { id: 'quick', name: 'Quick Revision', description: 'Flashcards & quick quiz for last-minute prep', icon: 'Zap' },
];

export function getRoleById(id: string): Role | undefined {
  return ROLES.find(r => r.id === id);
}

export const MOCK_ROUND_TYPES = [
  { id: 'technical', name: 'Technical Round', description: 'In-depth technical questions on a subject', icon: 'Cpu' },
  { id: 'coding', name: 'Coding Round', description: 'Algorithm & problem-solving', icon: 'Terminal' },
  { id: 'behavioral', name: 'Behavioral Round', description: 'STAR-method scenarios, soft skills', icon: 'MessageCircle' },
  { id: 'hr', name: 'HR Round', description: 'Motivation, salary, culture fit', icon: 'UserCheck' },
] as const;
