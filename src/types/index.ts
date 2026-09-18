export interface EventDetail {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  date: string;
  formattedDate: string;
  time: string;
  venue: string;
  originalPrice: number;
  specialPrice: number;
  ambassadorDiscount: number;
  ambassadorCode: string;
  referralName: string;
  deadline: string;
  status: 'active' | 'upcoming' | 'closed';
  inclusions: string[];
}

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  company: string;
  bio: string;
  image?: string;
  category: 'Keynote' | 'Founder' | 'Tech' | 'Investor';
  isVerified: boolean;
  linkedin?: string;
  twitter?: string;
}

export interface EventSession {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  level: string;
  topics: string[];
  instructorTag: string;
  iconName: string;
}

export interface JourneyStage {
  step: string;
  title: string;
  description: string;
  action: string;
  tag: string;
}

export interface GoodieItem {
  id: string;
  name: string;
  quantity: string;
  description: string;
  icon: string;
  badge: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Leadership' | 'Events' | 'Marketing' | 'Technical' | 'Design' | 'Operations' | 'PR & Sponsorship';
  isVerified: boolean;
  linkedin?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ALL' | 'EVENTS' | 'TEAM' | 'SPEAKERS' | 'COMPETITIONS' | 'CAMPUS';
  subtitle: string;
  image: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Registration' | 'Event Day' | 'Inclusions';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  collegeOrCompany: string;
  quote: string;
  batch: string;
}

export interface RegistrationSubmission {
  id: string;
  registrationId: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
  course: string;
  year: string;
  city: string;
  interests: string[];
  projectTitle?: string;
  teamSize?: string;
  ambassadorCodeUsed?: string;
  amountPaid: number;
  paymentStatus: 'Confirmed' | 'Pending';
  registeredAt: string;
}

export interface ImpactStat {
  label: string;
  value: number;
  suffix: string;
  description: string;
}
