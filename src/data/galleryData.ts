import { GalleryItem } from '../types';

export const galleryCategories = [
  'ALL',
  'EVENTS',
  
  'TEAM',
  'SPEAKERS',
  'COMPETITIONS',
  'CAMPUS'
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Opening Keynote Session",
    subtitle: "Auditorium Packed with 800+ Aspiring Founders",
    category: "EVENTS",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape"
  },
  {
    id: "gal-2",
    title: "Hands-on Product Prototyping",
    subtitle: "Teams Rapidly Validating MVP Hypotheses",
    category: "EVENTS",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape"
  },
  {
    id: "gal-3",
    title: "High-Stakes Pitch Clinic",
    subtitle: "Student Startups Presenting to Investor Jury",
    category: "COMPETITIONS",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape"
  },
  {
    id: "gal-4",
    title: "Interactive Fireside Chat",
    subtitle: "Unfiltered Journey: From Zero to Series A",
    category: "SPEAKERS",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape"
  },
  {
    id: "gal-5",
    title: "E-Cell UIT Core Organizers",
    subtitle: "The Team Powering the Regional Movement",
    category: "TEAM",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape"
  },
  {
    id: "gal-6",
    title: "UIT Prayagraj Innovation Hub",
    subtitle: "State-of-the-Art Academic Infrastructure",
    category: "CAMPUS",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape"
  }
];

export const impactStatistics = [
  { label: "Students Engaged", value: 3500, suffix: "+", description: "Empowered through sessions, hackathons & summits" },
  { label: "Events & Sessions", value: 45, suffix: "+", description: "Conducted across technical and business tracks" },
  { label: "Startup Ideas Incubated", value: 120, suffix: "+", description: "Mentored from ideation to prototype stage" },
  { label: "Speakers & Mentors", value: 50, suffix: "+", description: "Founders, venture capitalists & industry experts" }
];
