export type SubjectCategory = {
  name: string;
  icon: string;
  description: string;
  tutors: number;
};

export type Tutor = {
  id: string;
  name: string;
  role: string;
  subjects: string[];
  rating: number;
  reviews: number;
  hourlyRate: number;
  availability: string[];
  experience: string;
  bio: string;
  certifications: string[];
  specialties: string[];
};

export const tutors: Tutor[] = [
  {
    id: 'mila-chen',
    name: 'Mila Chen',
    role: 'Math & Science Tutor',
    subjects: ['Algebra', 'Geometry', 'Physics'],
    rating: 4.9,
    reviews: 284,
    hourlyRate: 38,
    availability: ['Mon', 'Tue', 'Thu', 'Fri'],
    experience: '7 years experience',
    bio: 'Helps students build confidence in STEM topics through structured problem-solving and conceptual reinforcement.',
    certifications: ['Certified Math Coach', 'STEM Education Specialist'],
    specialties: ['Exam prep', 'Homework support', 'Concept clarity'],
  },
  {
    id: 'nathan-lee',
    name: 'Nathan Lee',
    role: 'English & Writing Coach',
    subjects: ['Essay writing', 'Reading', 'SAT prep'],
    rating: 4.8,
    reviews: 211,
    hourlyRate: 32,
    availability: ['Wed', 'Thu', 'Sat'],
    experience: '6 years experience',
    bio: 'Focuses on writing fluency, reading comprehension, and confident verbal communication for academic success.',
    certifications: ['TESOL Certified', 'AP English Mentor'],
    specialties: ['Essay coaching', 'Reading fluency', 'Confidence building'],
  },
  {
    id: 'sophia-patel',
    name: 'Sophia Patel',
    role: 'Computer Science Mentor',
    subjects: ['Python', 'JavaScript', 'Algorithms'],
    rating: 5.0,
    reviews: 318,
    hourlyRate: 45,
    availability: ['Mon', 'Tue', 'Wed', 'Sun'],
    experience: '8 years experience',
    bio: 'Teaches coding fundamentals and interview readiness with practical projects and guided problem solving.',
    certifications: ['CS Instructor', 'Google Cloud Mentor'],
    specialties: ['Web development', 'Data structures', 'Interview prep'],
  },
  {
    id: 'oliver-johnson',
    name: 'Oliver Johnson',
    role: 'Economics & Business Mentor',
    subjects: ['Economics', 'Business', 'Statistics'],
    rating: 4.7,
    reviews: 168,
    hourlyRate: 35,
    availability: ['Mon', 'Wed', 'Fri', 'Sat'],
    experience: '5 years experience',
    bio: 'Connects economic theory to practical decision-making and helps students excel in classroom and exam settings.',
    certifications: ['MBA Mentor', 'Economics Trainer'],
    specialties: ['Exam prep', 'Case studies', 'Analytical thinking'],
  },
];

export const subjectCategories: SubjectCategory[] = [
  {
    name: 'Mathematics',
    icon: '∑',
    description: 'Master algebra, calculus, and problem-solving skills with step-by-step guidance.',
    tutors: 140,
  },
  {
    name: 'Science',
    icon: '⚗',
    description: 'Build confidence in biology, chemistry, and physics with concept-based support.',
    tutors: 120,
  },
  {
    name: 'Writing',
    icon: '✎',
    description: 'Get coaching for essays, reading comprehension, and communication clarity.',
    tutors: 96,
  },
  {
    name: 'Coding',
    icon: '</>',
    description: 'Learn programming and interview-ready technical skills from expert developers.',
    tutors: 82,
  },
];

export const studentOverview = {
  upcomingLessons: 4,
  completionRate: 92,
  savedResources: 18,
  nextMilestone: 'Unit 5 Algebra Quiz',
};

export const progressData = [
  { label: 'Math', score: 92, change: '+12%' },
  { label: 'Science', score: 88, change: '+8%' },
  { label: 'Writing', score: 94, change: '+15%' },
  { label: 'Coding', score: 90, change: '+10%' },
];

export const lessonHistory = [
  { id: 'L-104', title: 'Algebra Fundamentals', date: 'May 12', status: 'Completed', tutor: 'Mila Chen' },
  { id: 'L-105', title: 'Essay Structure Review', date: 'May 14', status: 'Completed', tutor: 'Nathan Lee' },
  { id: 'L-106', title: 'Python Functions Lab', date: 'May 18', status: 'Scheduled', tutor: 'Sophia Patel' },
  { id: 'L-107', title: 'Physics Motion Practice', date: 'May 22', status: 'Scheduled', tutor: 'Mila Chen' },
];

export const earningsData = [
  { month: 'Jan', value: 1800 },
  { month: 'Feb', value: 2200 },
  { month: 'Mar', value: 2680 },
  { month: 'Apr', value: 3000 },
  { month: 'May', value: 4200 },
];

export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);

export function getTutorById(id: string) {
  return tutors.find((tutor) => tutor.id === id) ?? tutors[0];
}
