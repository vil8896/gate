import { ConsultingService, CaseStudy } from '../types';

export const BUSINESS_SERVICES: ConsultingService[] = [
  {
    id: 'start-from-scratch',
    category: 'business',
    title: 'Starting a Business from Scratch',
    shortDesc: 'Turn your idea or skill into a real, registered, and profitable business with a clear step-by-step roadmap.',
    deliverables: [
      'Step-by-step business launch checklist',
      'Choosing what to sell & who your ideal buyer is',
      'Simple legal, license & registration guidance',
      'Finding and landing your first 10 paying customers'
    ],
    idealFor: 'Anyone with an idea, craft, or skill who wants to start their first business.',
    iconName: 'Compass',
    metrics: 'Helped 50+ individuals successfully launch'
  },
  {
    id: 'pricing-profit',
    category: 'business',
    title: 'Pricing & Making Real Profit',
    shortDesc: 'Stop undercharging or guessing. Know your exact numbers, price for profit, and keep healthy cash in the bank.',
    deliverables: [
      'Simple profit & pricing calculator spreadsheet',
      'Monthly budget & cash flow template (easy to read)',
      'Ways to trim unnecessary expenses without hurting quality',
      'Package pricing strategies that help customers say yes'
    ],
    idealFor: 'Small business owners working long hours but wondering where the profit went.',
    iconName: 'TrendingUp',
    metrics: 'Average 32% increase in owner take-home profit'
  },
  {
    id: 'getting-customers',
    category: 'business',
    title: 'Getting More Customers & Marketing',
    shortDesc: 'Simple, proven ways to get steady customers and sales without wasting money on complicated ad agencies.',
    deliverables: [
      'Google Maps & 5-star customer review strategy',
      'Easy social media posting routine (30 min a week)',
      'Word-of-mouth & customer referral program',
      'Special launch offers and promotions that convert'
    ],
    idealFor: 'Local businesses, creators, freelancers, and service providers needing more clients.',
    iconName: 'Users',
    metrics: '2.5x more inquiries in the first 60 days'
  },
  {
    id: 'daily-operations',
    category: 'business',
    title: 'Daily Operations & Saving Your Time',
    shortDesc: 'Organize your daily orders, stop doing everything yourself, and get back 10+ hours every week.',
    deliverables: [
      'Simple daily checklists for you or your helpers',
      'Easy order tracking & customer records (no lost notes)',
      'Guidance on hiring your first part-time helper or freelancer',
      'Organized schedule so you can actually take weekends off'
    ],
    idealFor: 'Busy business owners who feel overwhelmed and burnt out by daily tasks.',
    iconName: 'CheckCircle2',
    metrics: 'Save 10-15 hours of manual work every week'
  }
];

export const TECH_SERVICES: ConsultingService[] = [
  {
    id: 'website-setup',
    category: 'tech',
    title: 'Easy Website & Domain Setup',
    shortDesc: 'Get a clean, fast website on your custom domain (like mridalini.com), professional email, and Google presence.',
    deliverables: [
      'Clean, mobile-friendly website that looks great on phones',
      'Custom domain setup & professional email (you@yourname.com)',
      'Google Business profile so local customers find you',
      'Clear contact forms, phone links, and WhatsApp buttons'
    ],
    idealFor: 'Businesses that have no website or an old site that does not bring in calls.',
    iconName: 'Globe',
    metrics: 'Live and ready in days with zero coding needed from you'
  },
  {
    id: 'easy-payments',
    category: 'tech',
    title: 'Simple Online Payments & Invoicing',
    shortDesc: 'Make it super easy for clients to pay you with one click, and stop having to chase unpaid bills.',
    deliverables: [
      'Credit card, debit card & digital wallet checkout setup',
      'One-click digital invoices sent directly to customer phones',
      'Automatic friendly payment reminder emails',
      'Clear daily sales and payment tracking dashboard'
    ],
    idealFor: 'Freelancers, consultants, and shops tired of paper invoices and delayed checks.',
    iconName: 'CreditCard',
    metrics: 'Get paid 3x faster with instant payment links'
  },
  {
    id: 'small-biz-tools',
    category: 'tech',
    title: 'Simple Tools (Booking, CRM & WhatsApp)',
    shortDesc: 'Pick only the practical tools you need—calendar booking, customer contact lists, and auto-replies.',
    deliverables: [
      'Online appointment booking calendar (clients book themselves)',
      'WhatsApp for Business setup with automated greeting & hours',
      'Simple customer contact list (goodbye lost paper notes)',
      'Easy inventory or stock spreadsheet that anyone can use'
    ],
    idealFor: 'Service businesses losing clients to phone tag and missed messages.',
    iconName: 'Cpu',
    metrics: 'Zero missed appointments with auto reminders'
  },
  {
    id: 'ai-automation',
    category: 'tech',
    title: 'Practical AI & Time-Saving Shortcuts',
    shortDesc: 'Use friendly tools like ChatGPT to write social posts, answer customer questions, and draft emails in seconds.',
    deliverables: [
      'Custom ChatGPT prompts tailored specifically to your business',
      'Templates for writing product descriptions, quotes, and emails',
      'Automatic FAQ responses for common questions',
      'Friendly 1-on-1 screen walkthrough so you feel 100% confident'
    ],
    idealFor: 'Anyone wanting to use modern AI to save time without any technical headache.',
    iconName: 'Sparkles',
    metrics: 'Cuts writing and customer messaging time by 75%'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-bakery',
    clientType: 'Local Bakery & Custom Cakes',
    industry: 'Food & Local Retail',
    title: 'From Lost Phone Orders to a Seamless Online Menu & WhatsApp Alerts',
    challenge: 'A home-based custom cake baker was losing orders through messy Instagram DMs and paper notebooks, frequently double-booking dates and stressing over delayed payments.',
    solution: 'Mridalini set up a clean single-page mobile order website on their custom domain with an interactive date availability calendar, instant deposit collection via card, and automatic WhatsApp confirmations.',
    results: [
      { label: 'Weekly Hours Saved', value: '14 hrs' },
      { label: 'Order Volume Growth', value: '+65%' },
      { label: 'Missed / Lost Orders', value: 'Zero' },
      { label: 'Setup Time', value: '5 Days' }
    ],
    servicesProvided: ['Website Setup', 'Online Payments', 'WhatsApp Automation']
  },
  {
    id: 'case-freelancer',
    clientType: 'Solo Interior Designer',
    industry: 'Professional Services & Design',
    title: 'Replacing Low-Paying Hourly Gigs with 3 Clear High-Value Packages',
    challenge: 'An independent designer was overworked, charging an inconsistent hourly rate, and struggling to explain what was included to prospective homeowners.',
    solution: 'We restructured their offerings into 3 tiered fixed-price packages, created a clean visual portfolio website, and built a streamlined inquiry intake form that screens serious clients.',
    results: [
      { label: 'Average Project Price', value: '+85%' },
      { label: 'Booked Out in Advance', value: '3 Months' },
      { label: 'Client Inquiry Quality', value: '4x Higher' },
      { label: 'Website Launch Time', value: '1 Week' }
    ],
    servicesProvided: ['Pricing & Packages', 'Portfolio Website', 'Inquiry Filter Setup']
  },
  {
    id: 'case-home-services',
    clientType: 'Residential Painting & Home Repairs',
    industry: 'Home Services & Trades',
    title: 'Getting Found on Google & Doubling Local Estimate Bookings',
    challenge: 'A skilled two-person home repair crew relied only on sporadic word-of-mouth and had zero online presence, losing steady neighborhood jobs to competitors.',
    solution: 'Set up an optimized Google Business profile, launched a friendly one-page website with a fast quote request button, and set up automated SMS review requests for happy clients.',
    results: [
      { label: 'Google 5-Star Reviews', value: '48 Reviews' },
      { label: 'Monthly Inquiries', value: '+110%' },
      { label: 'Time to First Job Online', value: '48 Hours' },
      { label: 'Total Tech Headaches', value: 'Zero' }
    ],
    servicesProvided: ['Google Local Presence', 'One-Page Fast Site', 'SMS Review System']
  }
];

export const METHODOLOGY_STEPS = [
  {
    phase: '01',
    name: 'Friendly 30-Min Discovery Chat',
    duration: 'Step 1',
    tagline: 'We listen to your idea, your goals, and what is giving you headaches',
    description: 'No pressure, no technical jargon. We talk through what you want to achieve, who your customers are, and where you feel stuck or overwhelmed.',
    keyOutputs: ['Clear understanding of your goals', 'Identification of quick wins', 'Plain English recommendations', 'Zero confusing acronyms']
  },
  {
    phase: '02',
    name: 'Simple 1-Page Action Roadmap',
    duration: 'Step 2',
    tagline: 'A straightforward plan of action—no 100-page boring slide decks',
    description: 'We give you a clean, prioritized checklist showing what to do first. Exactly what tools to use, what to charge, and how to get your first or next customers.',
    keyOutputs: ['Prioritized step-by-step checklist', 'Transparent pricing suggestions', 'Recommended simple tools list', 'Clear timeline and milestones']
  },
  {
    phase: '03',
    name: 'Hands-On Setup Together',
    duration: 'Step 3',
    tagline: 'We build and configure the tools with you, not just give advice',
    description: 'We help you launch your website on mridalini.com or your domain, connect your payment methods, configure WhatsApp or email, and test everything together.',
    keyOutputs: ['Live working website & domain', 'Connected card/digital payments', 'Organized customer spreadsheets/tools', 'Tested and verified workflows']
  },
  {
    phase: '04',
    name: 'Launch & Friendly Support',
    duration: 'Step 4',
    tagline: 'You are never left alone to figure it out after launch',
    description: 'We stay right beside you as you welcome your first customers. You get friendly check-ins, quick answers to any questions, and ongoing guidance as you grow.',
    keyOutputs: ['Confidence running your business', 'Quick answers whenever you get stuck', 'Periodic check-ins on your numbers', 'Ongoing peace of mind']
  }
];

export const FAQ_ITEMS = [
  {
    question: 'I have zero technical background. Will this be too complicated for me?',
    answer: 'Not at all! That is the entire reason Mridalini exists. We specialize in working with normal individuals, artisans, trade workers, creators, and small business owners who do not want to become coders or tech geeks. We handle the technical setup for you and teach you only what you need to know in friendly, plain English.'
  },
  {
    question: 'I only have a business idea in my head. Is it too early to reach out?',
    answer: 'It is the perfect time! Getting guidance before spending money on the wrong tools, inventory, or legal steps will save you thousands of dollars and months of frustration. We will help you validate the idea, choose what to charge, and build a simple launch plan.'
  },
  {
    question: 'Can you help me get my website live on my own custom domain?',
    answer: 'Yes! In fact, this very website is set up to launch smoothly with your custom domain (mridalini.com) and permanent high-speed cloud hosting. We make sure you have complete ownership of your domain, website files, and online accounts with zero monthly website builder lock-in.'
  },
  {
    question: 'How are you different from big expensive corporate consulting firms?',
    answer: 'Big corporate consulting firms charge $50,000 for 100-page slide decks full of buzzwords that a small business owner cannot actually use. We work on practical, hands-on tasks: setting your prices so you make real profit, getting you a working website, connecting your payment buttons, and setting up tools that save you 10+ hours a week.'
  },
  {
    question: 'What does an engagement cost, and do you work with small budgets?',
    answer: 'Yes! We believe great business and tech guidance should be accessible to everyday entrepreneurs. We offer flexible options ranging from a single friendly 60-minute strategy session to complete done-with-you launch packages. You will always know the exact cost upfront with zero hidden fees.'
  }
];
