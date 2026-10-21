import {
  LayoutDashboard, Smartphone, Bot, Gauge, Server, ShoppingBag,
  Layout, Sparkles, Cloud, Database, Store, Wrench,
  Trophy, Zap, Rocket, Timer, MapPin, Globe2, GraduationCap,
} from "lucide-react";
import type { Content } from "./types";

// Project names follow the resume. Projects not on the resume use descriptive aliases instead of client names.

const en: Content = {
  meta: {
    title: "Hamza Akram | Senior Full-Stack Engineer (React, Next.js, Node.js, AI)",
    description:
      "Hamza Akram is a senior full-stack engineer in Karachi with 6+ years and 30+ shipped projects across web, mobile and AI automation. React, Next.js, Node.js, NestJS, Django, AWS.",
  },
  profile: { name: "Hamza Akram", location: "Karachi, Pakistan" },
  nav: {
    about: "About",
    services: "Services",
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
    cta: "Let's talk",
    toggleMenu: "Toggle menu",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    otherLang: "العربية",
    otherLangAria: "التبديل إلى العربية",
  },
  hero: {
    badge: "Available for projects and full-time roles",
    titleStart: "I build web, mobile and AI products that",
    titleHighlight: "hold up in production.",
    intro:
      "I'm Hamza, a full-stack engineer with six years and 30+ shipped projects behind me. I've taken an API from two minutes to under a second, launched a hotel management system in six weeks, and built voice agents that book appointments for clinics. If you need someone to own a feature from the database to the screen, we should talk.",
    ctaWork: "See my work",
    ctaContact: "Get in touch",
    email: "Email",
  },
  resume: {
    cta: "Download resume",
    ctaShort: "Resume",
    eyebrow: "For recruiters & hiring managers",
    title: "The whole story, on three pages.",
    desc: "Experience, key projects, skills and certifications in one PDF that's easy to forward to your team.",
    meta: "PDF · 3 pages",
    orEmail: "or email me directly",
  },
  stats: [
    { value: "6+", label: "years building for the web" },
    { value: "30+", label: "projects shipped to production" },
    { value: "<1s", label: "API response, down from 2+ minutes" },
    { value: "6 wks", label: "to launch a hotel platform, web + mobile" },
  ],
  about: {
    eyebrow: "01 · About",
    title: "A bit about",
    highlight: "me",
    paragraphs: [
      "My first job, back in 2017, was building small websites and a survey tool. After that I spent two years making WordPress and e-commerce sites for businesses, including a multi-country site for a pharmaceutical company. In 2021 I joined Techwards, and the projects got a lot bigger: SaaS platforms, healthcare apps, booking systems, publishing tools, and more recently a lot of AI automation.",
      "The problems I enjoy most are the messy ones. Why does this endpoint take two minutes? Why does this page need fifteen seconds to load? I like tracking down the actual cause and fixing it properly. I work across the whole stack, so I can follow a problem wherever it goes instead of throwing it over the wall to someone else.",
      "These days I lead small teams and review a lot of code, but I still write plenty of it myself. I'm also working through a course on frontend system design right now. The tools change every year, and I'd rather keep up than catch up.",
    ],
    facts: [
      { icon: MapPin, label: "Based in", value: "Karachi, Pakistan · PKT (UTC+5)" },
      { icon: Globe2, label: "Clients in", value: "the US, UAE and Saudi Arabia" },
      { icon: GraduationCap, label: "Education", value: "BS, Computer Science, Mohammad Ali Jinnah University" },
      { icon: Trophy, label: "Recently", value: "Won the AI Hackathon 2025 as team lead" },
    ],
    speaksLabel: "Speaks",
    languages: ["English", "Urdu", "Arabic", "Chinese"],
  },
  services: {
    eyebrow: "02 · Services",
    title: "What I can",
    highlight: "help with",
    description:
      "Whether you're starting from a blank page or untangling something that already exists, this is where I'm most useful.",
    items: [
      { icon: LayoutDashboard, title: "Web apps & SaaS", desc: "React and Next.js front ends with Node, NestJS or Django behind them. Dashboards, client portals, booking systems, multi-tenant products." },
      { icon: Smartphone, title: "Mobile apps", desc: "React Native and Expo apps for iOS and Android that share logic and APIs with your web app instead of duplicating everything." },
      { icon: Bot, title: "AI automation & voice agents", desc: "Voice agents, LLM workflows and n8n pipelines that take repetitive work like booking, reminders and follow-ups off your team's plate." },
      { icon: Gauge, title: "Fixing slow or shaky apps", desc: "Endpoints that time out, pages that crawl, a codebase nobody wants to touch. I find the real cause, fix it, and show you the before and after." },
      { icon: Server, title: "APIs, databases & cloud", desc: "REST APIs, PostgreSQL schemas, Redis, background jobs, and AWS setups (ECS, CDK, RDS) that make deploys boring, which is the goal." },
      { icon: ShoppingBag, title: "CMS & e-commerce", desc: "WordPress, WooCommerce, Shopify and headless Sanity builds, including moving off old platforms without losing content." },
    ],
  },
  work: {
    eyebrow: "03 · Selected work",
    title: "Projects I'm",
    highlight: "proud of",
    description: "Client names are kept private, but the problems and the numbers are real.",
    caseStudies: [
      {
        title: "Horse Riding Management Platform",
        client: "UAE",
        role: "Backend & performance",
        summary:
          "The platform runs a riding club's day-to-day operations, but some API calls were taking more than two minutes to come back. My job was to find out why and fix it without breaking anything people relied on.",
        highlights: [
          "Rewrote the PostgreSQL queries behind the slowest endpoints and dropped joins that weren't earning their cost",
          "Added proper indexes, pagination, and a Redis cache for data that rarely changes",
          "Upgraded the backend from Node.js 20 to 24 LTS and tightened security along the way",
        ],
        metric: { value: "2 min → <1 s", label: "average API response time" },
        stack: ["React", "Express.js", "PostgreSQL", "Redis", "AWS"],
        tags: ["web", "performance"],
      },
      {
        title: "AI Voice Agents & Automation Platform",
        client: "Healthcare providers",
        role: "Full-stack & automation",
        summary:
          "Clinic front desks spend hours on the phone booking and moving appointments. We built voice agents that take those calls and write straight into the clinic's calendar.",
        highlights: [
          "Voice agents that book, confirm, remind and reschedule appointments over the phone",
          "n8n workflows wiring ElevenLabs into Google Calendar and Sheets, so nothing gets copied by hand",
          "A back-office portal where staff read transcripts, AI call summaries and scheduling stats",
        ],
        metric: { value: "Phone → Calendar", label: "booking, reminders & rescheduling automated" },
        stack: ["Next.js", "Node.js", "n8n", "ElevenLabs", "Google APIs", "Vercel"],
        tags: ["ai", "web"],
      },
      {
        title: "Hotel Management System",
        client: "Hospitality",
        role: "Tech lead",
        summary:
          "A complete hotel management platform, web dashboard and mobile app, with six weeks on the clock. I led a team of six and owned the backend.",
        highlights: [
          "Designed the NestJS services and REST APIs for bookings, room inventory and role-based access",
          "PostgreSQL for the core data, Redis for the parts that get hit hardest",
          "Set up the AWS infrastructure and worked daily with the web and mobile devs to land it on time",
        ],
        metric: { value: "6 weeks", label: "kickoff to web + mobile launch" },
        stack: ["NestJS", "PostgreSQL", "Redis", "React", "React Native", "AWS"],
        tags: ["web", "mobile"],
      },
      {
        title: "Enterprise Scientific Publishing Platform",
        client: "US",
        role: "Migration lead",
        summary:
          "An enterprise publisher needed to move years of journals and articles off its old system onto a headless CMS, without losing content or disrupting the editorial team.",
        highlights: [
          "Planned the Sanity.io content model and the strategy for migrating existing data",
          "Rebuilt the front end in Next.js on top of the new headless setup",
          "Kept every journal, article relationship and publishing step intact through the move",
        ],
        metric: { value: "Headless", label: "CMS migration with every journal preserved" },
        stack: ["Next.js", "Sanity.io", "Tailwind CSS", "shadcn/ui", "Vercel"],
        tags: ["cms", "web"],
      },
      {
        title: "Coaching Platform",
        client: "Saudi Arabia",
        role: "Full-stack",
        summary:
          "A marketplace where people book time with coaches. I built the calling features: jump on a call right now, or schedule one for later.",
        highlights: [
          "Instant and scheduled calls across the Django API, the Next.js web app and the Expo mobile app",
          "Worked inside a multi-tenant setup (django-tenants) with Celery running background and timed jobs",
          "Contributed to the AWS CDK infrastructure on ECS Fargate and RDS",
        ],
        metric: { value: "Web + iOS + Android", label: "one calling feature, three platforms" },
        stack: ["Django REST", "PostgreSQL", "Celery", "Next.js", "Expo", "AWS CDK"],
        tags: ["web", "mobile"],
      },
      {
        title: "Community Organization Website",
        client: "Non-profit",
        role: "Team lead",
        summary:
          "A community organization's website was taking around 15 seconds to load. I led the team that brought it down to about 2.",
        highlights: [
          "Added caching and lazy loading, and trimmed the image, JavaScript and CSS payloads",
          "Moved hosting to AWS for better reliability and room to grow",
          "Worked through Core Web Vitals page by page until the numbers held",
        ],
        metric: { value: "15 s → 2 s", label: "average page load time" },
        stack: ["WordPress", "PHP", "AWS"],
        tags: ["performance", "cms"],
      },
    ],
    viewAllTitle: "There's more where these came from",
    viewAllDesc: (total) =>
      `${total} projects in total, including mobile shopping apps, subscription billing, accessibility work, single sign-on and a Chrome extension.`,
    viewAllCta: "Explore all projects",
    archive: [
      { title: "Packaging manufacturer", what: "Marketing website, plus a mobile app for orders, client accounts, ledgers and quotations", stack: "Next.js · Expo · Firebase", tags: ["web", "mobile"] },
      { title: "Fitness apparel brand", what: "Shopping app whose screens are driven by JSON from the server, so layouts change without an app release", stack: "React Native", tags: ["mobile"] },
      { title: "VPN provider", what: "Added a business plan to the consumer checkout, with two Recurly billing accounts on one page. Picked up PHP to ship it", stack: "WordPress · PHP · Recurly", tags: ["cms", "web"] },
      { title: "AI chat assistant", what: "Response streaming, voice chat and performance work as part of a larger product team", stack: "Next.js · TanStack Query · Django · Docker", tags: ["ai", "web"] },
      { title: "Startup community platform", what: "Feature work across the web app and API alongside a large team", stack: "Next.js · Django · PostgreSQL", tags: ["web"] },
      { title: "University degree-planning tool", what: "Full accessibility pass: keyboard navigation, screen-reader support, semantic markup", stack: "Angular · Python", tags: ["web"] },
      { title: "Business security product", what: "Single sign-on so teams could log in with their existing company accounts", stack: "SSO · OAuth", tags: ["web"] },
      { title: "One-click checkout extension", what: "Chrome extension and web app that saved shoppers from re-entering payment details on every store", stack: "React · Chrome APIs · Node.js", tags: ["web"] },
      { title: "E-commerce marketplace", what: "Product management and catalogue features", stack: "React · RTK Query · MUI", tags: ["web"] },
      { title: "Consumer brand launch", what: "Animated landing page", stack: "Frontend · Motion", tags: ["web"] },
      { title: "Fitness coaching app", what: "Tools for trainers to plan exercises and track session time", stack: "React · RTK Query · MUI", tags: ["web"] },
      { title: "Telehealth platform", what: "Feature development as part of the product team", stack: "Healthcare · Web", tags: ["web"] },
      { title: "Pharmaceutical company", what: "Multi-country website with localized content for each market", stack: "WordPress", tags: ["cms"] },
    ],
  },
  projectsPage: {
    metaTitle: "Projects | Hamza Akram",
    back: "Back to home",
    eyebrow: "Portfolio",
    title: "Everything I've",
    highlight: "built",
    description:
      "Case studies first, then the full list. Client names stay private, but the work is real. Filter by the kind of project you care about.",
    filtersLabel: "Filter projects",
    all: "All",
    tags: {
      web: "Web & SaaS",
      mobile: "Mobile",
      ai: "AI & Automation",
      performance: "Performance",
      cms: "CMS & E-commerce",
    },
    featuredTitle: "Case studies",
    featuredDesc: "The deep dives: what the problem was, what I did, and what changed.",
    archiveTitle: "The full list",
    archiveDesc: "The rest of my work, beyond the case studies above.",
    empty: "Nothing under this filter yet.",
    count: (n) => `${n} ${n === 1 ? "project" : "projects"}`,
    ctaTitle: "Have something similar in mind?",
    ctaDesc:
      "Tell me what you're building. If it looks like something on this page, there's a good chance I've already dealt with the tricky parts.",
    ctaContact: "Start a conversation",
  },
  experience: {
    eyebrow: "04 · Experience",
    title: "Where I've",
    highlight: "worked",
    roles: [
      {
        title: "Senior Software Engineer",
        company: "Techwards · Karachi",
        period: "Mar 2023 – Present",
        points: [
          "Lead feature teams and own work from technical design through to production",
          "Build AI automation and voice-agent products with LLMs, ElevenLabs, n8n and Google APIs",
          "Ship web apps in React and Next.js, mobile apps in React Native and Expo, and APIs in Node.js, NestJS and Django",
          "The person who gets pulled in when something is slow: query tuning, caching, pagination, infrastructure fixes",
        ],
      },
      {
        title: "Software Engineer",
        company: "Techwards · Karachi",
        period: "Mar 2021 – Feb 2023",
        points: [
          "Worked on production apps in healthcare, e-commerce, education and SaaS",
          "Built reusable front-end features in React, Angular and Next.js",
          "Wrote backend features and third-party integrations in Python/Django, PHP and Node.js",
        ],
      },
      {
        title: "Web Developer",
        company: "Innoventure · Karachi",
        period: "Nov 2018 – Oct 2020",
        points: [
          "Built WordPress and e-commerce sites for retail and corporate clients",
          "Delivered a multi-country site for a pharmaceutical company with localized content",
          "Sat with clients to turn loose requirements into sites people could actually use",
        ],
      },
      {
        title: "Web Developer (Early Career)",
        company: "MATZ Solution · Karachi",
        period: "Jun 2017 – Sep 2017",
        points: [
          "First job. Built small business websites and a survey management system for creating surveys and collecting results",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "05 · Toolkit",
    title: "Skills &",
    highlight: "tech stack",
    description:
      "What I reach for day to day. I care more about picking the right tool for the job than collecting logos, but these are the ones I've shipped with.",
    groups: [
      { icon: Layout, label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "React Native", "Expo", "Redux / RTK", "Angular", "Svelte", "Astro", "Tailwind CSS", "shadcn/ui", "Material UI"] },
      { icon: Server, label: "Backend", items: ["Node.js", "NestJS", "Express.js", "Django", "Django REST", "Python", "PHP", "REST API design", "Celery", "Multi-tenancy"] },
      { icon: Sparkles, label: "AI & Automation", items: ["LLM workflows", "AI voice agents", "ElevenLabs", "n8n", "Pinecone", "Google APIs", "Cursor"] },
      { icon: Cloud, label: "Cloud & DevOps", items: ["AWS", "AWS CDK", "ECS Fargate", "RDS", "Vercel", "Docker", "CI/CD"] },
      { icon: Database, label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firestore", "Elasticsearch"] },
      { icon: Store, label: "CMS & Commerce", items: ["WordPress", "WooCommerce", "Shopify", "Magento", "Sanity.io", "Recurly"] },
      { icon: Wrench, label: "Practices", items: ["Performance tuning", "Accessibility (WCAG)", "SSO & auth", "Code reviews", "Team leadership"] },
    ],
  },
  process: {
    eyebrow: "06 · Process",
    title: "How working with me",
    highlight: "goes",
    description: "No surprises. You always know what's being built, why, and when it'll be ready.",
    stepLabel: "Step",
    steps: [
      { title: "Listen", desc: "A call to understand what you're building, who it's for, and what \"done\" looks like. I'll ask a lot of questions." },
      { title: "Plan", desc: "A short written plan: architecture, milestones, and what I'd cut if time gets tight. You see the trade-offs before any code exists." },
      { title: "Build", desc: "Working software early and often. You see real progress along the way, not one big reveal at the end." },
      { title: "Ship & stay", desc: "Deployment, monitoring, and fixing what real users find. I don't disappear after launch." },
    ],
  },
  highlights: {
    eyebrow: "07 · Highlights",
    title: "Wins, learning &",
    highlight: "credentials",
    achievements: [
      { icon: Trophy, title: "AI Hackathon 2025 winner", desc: "Led the winning team" },
      { icon: Zap, title: "2 min → under 1 s", desc: "API response time on a live platform" },
      { icon: Timer, title: "15 s → ~2 s", desc: "Page load time on a busy public site" },
      { icon: Rocket, title: "6-week launch", desc: "Full hotel platform across web and mobile" },
    ],
    certsTitle: "Certifications",
    certs: [
      { name: "Namaste Frontend System Design", issuer: "Namaste Dev", year: "In progress" },
      { name: "Namaste Node.js", issuer: "Namaste Dev", year: "2025" },
      { name: "Namaste React: From Zero to Hero", issuer: "Namaste Dev", year: "2024" },
      { name: "Clean Code", issuer: "Udemy", year: "2023" },
      { name: "React Native: The Practical Guide", issuer: "Udemy", year: "2023" },
    ],
    educationTitle: "Education",
    education: {
      degree: "BS, Computer Science",
      school: "Mohammad Ali Jinnah University (MAJU), Karachi",
      period: "2016 – 2020",
    },
  },
  contact: {
    eyebrow: "08 · Contact",
    titleStart: "Got a project, a slow app, or",
    titleHighlight: "a role to fill?",
    body: "Tell me what you're working on and where you're stuck. A few lines is plenty, and I'll get back to you with honest thoughts on whether I'm the right fit.",
    copy: "Copy email",
    copied: "Copied",
    copiedToast: "Email copied to clipboard",
    copyFailed: (email) => `Couldn't copy. The address is ${email}`,
    mailSubject: "Hello Hamza",
  },
  footer: {
    rights: (year, name) => `© ${year} ${name}. Designed and built by me.`,
    backToTop: "Back to top",
  },
};

export default en;
