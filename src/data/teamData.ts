import { TeamMember } from '../types';

export const teamDepartments = [
  'ALL',
  'Leadership',
  'Events',
  'Marketing',
  'Technical',
  'Design',
  'Operations',
  'PR & Sponsorship'
] as const;

export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Faculty Mentorship Board",
    role: "Patrons & Faculty Advisors",
    department: "Leadership",
    isVerified: true,
    linkedin: "https://linkedin.com"
  },
  {
    id: "team-2",
    name: "President",
    role: "E-Cell UIT Overall Lead",
    department: "Leadership",
    isVerified: false,
    linkedin: "https://linkedin.com"
  },
  {
    id: "team-3",
    name: "Vice President",
    role: "Operations & Strategy",
    department: "Leadership",
    isVerified: false,
    linkedin: "https://linkedin.com"
  },
  {
    id: "team-4",
    name: "General Secretary",
    role: "Administration & Outreach",
    department: "Leadership",
    isVerified: false,
    linkedin: "https://linkedin.com"
  },
  {
    id: "team-5",
    name: "Head of Technical",
    role: "Web & Digital Platforms",
    department: "Technical",
    isVerified: false,
    linkedin: "https://linkedin.com"
  },
  {
    id: "team-6",
    name: "Head of Events & Logistics",
    role: "Event Execution & Stage Mgmt",
    department: "Events",
    isVerified: false,
    linkedin: "https://linkedin.com"
  },
  {
    id: "team-7",
    name: "Head of Design & Branding",
    role: "Visual Identity & Media",
    department: "Design",
    isVerified: false,
    linkedin: "https://linkedin.com"
  },
  {
    id: "team-8",
    name: "Head of PR & Sponsorship",
    role: "Corporate Alliances & CA Network",
    department: "PR & Sponsorship",
    isVerified: false,
    linkedin: "https://linkedin.com"
  },
  {
    id: "team-9",
    name: "Head of Marketing",
    role: "Content & Community Growth",
    department: "Marketing",
    isVerified: false,
    linkedin: "https://linkedin.com"
  },
  {
    id: "team-10",
    name: "Head of Operations",
    role: "Logistics & Hospitality",
    department: "Operations",
    isVerified: false,
    linkedin: "https://linkedin.com"
  }
];

export const recruitmentRoles = [
  { name: "Technical", desc: "Fullstack web, cloud infra, mobile apps, and developer relations." },
  { name: "Design", desc: "UI/UX, visual design, 3D art, motion graphics, and brand styling." },
  { name: "Marketing", desc: "Social media campaigns, copy, growth hacks, and digital marketing." },
  { name: "Events", desc: "Stage production, schedule coordination, sound/lighting, and hospitality." },
  { name: "Content", desc: "Editorial writing, founder interviews, articles, and newsletters." },
  { name: "PR & Outreach", desc: "Press outreach, campus alliances, community tie-ups, and guest relations." },
  { name: "Operations", desc: "Logistics, supply chain, registration counters, and crowd management." },
  { name: "Sponsorship", desc: "Corporate fundraising, pitch decks, vendor negotiations, and partner ROI." }
];
