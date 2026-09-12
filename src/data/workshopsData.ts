import { Workshop } from '../types';

export const workshopsData: Workshop[] = [
  {
    id: "startup-101",
    title: "Startup 101",
    tagline: "From zero to structured problem-solution hypothesis.",
    duration: "90 Mins",
    level: "Beginner / Intermediate",
    instructorTag: "Venture Builders",
    iconName: "Compass",
    topics: [
      "Startup fundamentals & core taxonomy",
      "Problem identification & pain-point mapping",
      "Customer discovery & user interviews",
      "Sustainable business models & monetization",
      "Market validation & early signals"
    ]
  },
  {
    id: "pitch-perfect",
    title: "Pitch Perfect",
    tagline: "Master storytelling and investor-grade pitch delivery.",
    duration: "120 Mins",
    level: "All Levels",
    instructorTag: "Investor Panelists",
    iconName: "Presentation",
    topics: [
      "Storytelling frameworks for technical founders",
      "Problem framing & urgency creation",
      "Solution presentation & demo mechanics",
      "Market opportunity (TAM/SAM/SOM)",
      "Financial projections & pitch deck teardowns"
    ]
  },
  {
    id: "build-and-validate",
    title: "Build & Validate",
    tagline: "Rapid prototyping and iterative MVP development.",
    duration: "120 Mins",
    level: "Intermediate",
    instructorTag: "Product Engineers",
    iconName: "Layers",
    topics: [
      "No-code / low-code prototyping tools",
      "Minimum Viable Product (MVP) development",
      "Collecting actionable user feedback",
      "Data-driven iteration & pivot metrics",
      "Product thinking & design intuition"
    ]
  },
  {
    id: "brand-your-idea",
    title: "Brand Your Idea",
    tagline: "Positioning, visual identity, and early customer acquisition.",
    duration: "75 Mins",
    level: "All Levels",
    instructorTag: "Brand Designers",
    iconName: "Sparkles",
    topics: [
      "Brand identity & psychological positioning",
      "Category design & differentiation",
      "Growth marketing & viral loop architecture",
      "Omnichannel communication strategy",
      "Building a magnetic digital presence"
    ]
  },
  {
    id: "ai-entrepreneurship",
    title: "AI × Entrepreneurship",
    tagline: "Harness modern AI agents to build 10x faster.",
    duration: "105 Mins",
    level: "Intermediate / Advanced",
    instructorTag: "AI Founders",
    iconName: "Cpu",
    topics: [
      "AI-powered micro-SaaS opportunities",
      "Agentic workflows and workflow automation",
      "Generative AI integration for products",
      "Intelligent applications & customer agents",
      "Future AI business models & defensibility"
    ]
  }
];
