import { JourneyStage } from '../types';

export const journeyStages: JourneyStage[] = [
  {
    step: "01",
    title: "OBSERVE",
    description: "Find a real problem lurking in everyday friction. Look for what is broken, slow, or overlooked.",
    action: "Scan daily friction points",
    tag: "Problem Discovery"
  },
  {
    step: "02",
    title: "QUESTION",
    description: "Why does the problem exist? Dissect root causes instead of superficial symptoms.",
    action: "Ask 5 Whys & analyze incentives",
    tag: "Root Cause Analysis"
  },
  {
    step: "03",
    title: "IDEATE",
    description: "Think beyond the obvious. Generate unconstrained creative solutions before filtering.",
    action: "Brainstorm 20+ alternate angles",
    tag: "Divergent Thinking"
  },
  {
    step: "04",
    title: "VALIDATE",
    description: "Talk to real users before writing a single line of production code. Validate willingness to pay.",
    action: "Conduct 30 customer interviews",
    tag: "Customer Discovery"
  },
  {
    step: "05",
    title: "BUILD",
    description: "Create the smallest useful version (MVP). Deliver core value in the shortest possible timeframe.",
    action: "Deploy functional prototype",
    tag: "MVP Development"
  },
  {
    step: "06",
    title: "TEST",
    description: "Find what works and measure actual user interaction data, retention, and drop-off points.",
    action: "Track quantitative metrics",
    tag: "User Testing"
  },
  {
    step: "07",
    title: "PITCH",
    description: "Tell your story with precision, conviction, and clarity to attract early believers and capital.",
    action: "Refine 3-minute deck & narrative",
    tag: "Storytelling & Capital"
  },
  {
    step: "08",
    title: "ITERATE",
    description: "Improve relentlessly based on continuous market signals. Trim bloat and sharpen value.",
    action: "Weekly release & feedback loops",
    tag: "Continuous Evolution"
  },
  {
    step: "09",
    title: "LAUNCH",
    description: "Take the leap. Bring your product to the world, acquire initial users, and scale impact.",
    action: "Scale distribution & growth",
    tag: "Market Rollout"
  }
];

export const whyIlluminateChapters = [
  {
    id: "learn",
    title: "LEARN",
    number: "01",
    subtitle: "Insights from the Frontlines",
    description: "Absorb battle-tested frameworks, market playbooks, and failure postmortems from founders who have built companies from ground zero.",
    icon: "BookOpen"
  },
  {
    id: "connect",
    title: "CONNECT",
    number: "02",
    subtitle: "Curated High-Value Network",
    description: "Surround yourself with fellow technical architects, product builders, visionary designers, and early angel investors across North India.",
    icon: "Network"
  },
  {
    id: "discover",
    title: "DISCOVER",
    number: "03",
    subtitle: "Emerging Tech & Market Waves",
    description: "Identify whitespace opportunities in AI agents, climate tech, fintech, SaaS, and hardware innovation primed for student-led disruption.",
    icon: "Compass"
  },
  {
    id: "build",
    title: "BUILD",
    number: "04",
    subtitle: "Hands-on MVP Sprints",
    description: "Transform raw ideas into working prototypes with live guidance, API credits, and structural feedback from seasoned engineering leads.",
    icon: "Cpu"
  },
  {
    id: "pitch",
    title: "PITCH",
    number: "05",
    subtitle: "Spotlight & Investor Feedback",
    description: "Step onto the ILLUMINATE stage to pitch your venture hypothesis before jury panels and receive candid, actionable critique.",
    icon: "Mic"
  },
  {
    id: "lead",
    title: "LEAD",
    number: "06",
    subtitle: "Lead the Innovation Era",
    description: "Cultivate the conviction, organizational agility, and communication prowess required to rally teams and build movements.",
    icon: "Flame"
  }
];

export const experienceChapters = [
  {
    id: "spark",
    number: "01",
    title: "THE SPARK",
    quote: "A single question ignites the impossible.",
    description: "The moment curiosity collides with ambition. You break away from the default path and recognize that systems are built by people no smarter than you."
  },
  {
    id: "idea",
    number: "02",
    title: "THE IDEA",
    quote: "Formulating clarity out of chaos.",
    description: "Translating abstract insights into concrete problem statements. Structuring the hypothesis that will become the cornerstone of your startup."
  },
  {
    id: "build",
    number: "03",
    title: "THE BUILD",
    quote: "Crafting something from nothing.",
    description: "Late nights, architecture sketches, and prototype sprints. Turning imagination into tangible, testable software and hardware artifacts."
  },
  {
    id: "pitch",
    number: "04",
    title: "THE PITCH",
    quote: "Convincing the world to believe.",
    description: "Distilling complex engineering into a compelling narrative. Articulating the vision that inspires mentors, partners, and investors."
  },
  {
    id: "connection",
    number: "05",
    title: "THE CONNECTION",
    quote: "You don't build alone.",
    description: "Uniting with co-founders, advisors, and mentors. Building bonds that persist far beyond the conference floor."
  },
  {
    id: "impact",
    number: "06",
    title: "THE IMPACT",
    quote: "Creating enduring value.",
    description: "Releasing products that solve genuine problems, generate sustainable revenue, and empower the next generation of changemakers."
  }
];
