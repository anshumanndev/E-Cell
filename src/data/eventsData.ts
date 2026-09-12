import { EventDetail, Speaker } from '../types';

export const featuredEvent: EventDetail = {
  id: "illuminate-2026",
  title: "IIT BOMBAY SPEAKERS ARE COMING",
  slug: "illuminate-2026-summit",
  tagline: "Empowering the Next Generation of Changemakers",
  description: "Join visionary startup founders, seasoned venture capitalists, and industry innovators direct from the IIT Bombay entrepreneurial ecosystem for an immersive day of high-impact keynotes, interactive pitch clinics, and hands-on workshops.",
  date: "2026-09-30",
  formattedDate: "September 30, 2026",
  time: "09:00 AM - 06:00 PM IST",
  venue: "Auditorium Complex, United Institute of Technology, Prayagraj",
  originalPrice: 799,
  specialPrice: 699,
  ambassadorDiscount: 100,
  ambassadorCode: "CA26ZTBUW",
  referralName: "Arpita Mishra",
  deadline: "30 September",
  status: "active",
  inclusions: [
    "Full-Day Access to all Keynotes & Panels",
    "Founder Insights & Venture Building Masterclass",
    "Networking Lunch & Refreshments Included",
    "Official Participation & Merit Certificate",
    "Comprehensive Welcome Goodies Kit",
    "Outstation Accommodation Assistance"
  ]
};

export const speakersData: Speaker[] = [
  {
    id: "spk-1",
    name: "IIT Bombay Keynote Speaker",
    designation: "Founder & CEO / Angel Investor",
    company: "IIT Bombay Incubated Venture",
    bio: "Pioneering deep-tech and consumer innovation with multiple successful exits. Featured on Forbes 30 Under 30 and active mentor across India's premier startup incubators.",
    category: "Keynote",
    isVerified: false,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    id: "spk-2",
    name: "Venture Partner & Strategist",
    designation: "Principal Investor",
    company: "Early Stage Venture Capital",
    bio: "Evaluating 500+ pre-seed to Series A startups annually. Specializes in unit economics, go-to-market acceleration, and scaling student-led enterprises.",
    category: "Investor",
    isVerified: false,
    linkedin: "https://linkedin.com"
  },
  {
    id: "spk-3",
    name: "Product & AI Architect",
    designation: "Head of AI Engineering",
    company: "Hyper-Growth Scaleup",
    bio: "Leading generative AI systems and agentic workflows. Passionate about empowering engineering undergraduates with product-first thinking.",
    category: "Tech",
    isVerified: false,
    linkedin: "https://linkedin.com"
  }
];
