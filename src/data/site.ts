import type { ImageMetadata } from 'astro';
import avatarImg from '../assets/images/personal/photo2.jpeg';
import emsCover from '../assets/images/projects/images/ems.webp';
import portfolioCover from '../assets/images/projects/images/portfolio.webp';
import type { SiteData } from '../types/index';

// Eagerly resolve screenshots in alphabetical order
const emsScreenshotMap = import.meta.glob<ImageMetadata>(
  '../assets/images/projects/screenshots/EduManage/*.webp',
  { eager: true, import: 'default' },
);

// Sort screenshot paths numerically (edumanage-1, edumanage-2, ... edumanage-21)
const emsScreenshots = Object.entries(emsScreenshotMap)
  .sort(([pathA], [pathB]) => {
    const numA = Number.parseInt(/\d+/.exec(pathA)?.[0] ?? '0', 10);
    const numB = Number.parseInt(/\d+/.exec(pathB)?.[0] ?? '0', 10);
    return numA - numB;
  })
  .map(([, img]) => img);

const portfolioScreenshotMap = import.meta.glob<ImageMetadata>(
  '../assets/images/projects/screenshots/portfolio/*.webp',
  { eager: true, import: 'default' },
);

const portfolioScreenshots = Object.entries(portfolioScreenshotMap)
  .sort(([pathA], [pathB]) => {
    const numA = Number.parseInt(/\d+/.exec(pathA)?.[0] ?? '0', 10);
    const numB = Number.parseInt(/\d+/.exec(pathB)?.[0] ?? '0', 10);
    return numA - numB;
  })
  .map(([, img]) => img);

export const siteData = {
  personal: {
    name: 'Ajmal Basheer',
    handle: 'ajmalbuv',
    avatar: avatarImg,
    title: 'Software Engineer & Systems Builder',
    subtitle: 'Flutter Developer / Full Stack Developer',
    bio: 'Software engineer focused on scalable systems, high-performance Flutter applications, and modern cross-platform engineering with clean architecture.',
    resumeUrl:
      'https://media.githubusercontent.com/media/ajmalbuv/resume/refs/heads/master/resume-no-image.pdf',
    contact: {
      email: 'ajmalbuv@gmail.com',
      phone: '+91 9496444520',
      location: 'Bengaluru, Karnataka',
      socials: [
        {
          name: 'GitHub',
          url: 'https://github.com/ajmalbuv',
          icon: 'mdi:github',
          ariaLabel: 'GitHub Profile',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/ajmalbuv/',
          icon: 'mdi:linkedin',
          ariaLabel: 'LinkedIn Profile',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/_.aju',
          icon: 'mdi:instagram',
          ariaLabel: 'Instagram Profile',
        },
        {
          name: 'Email',
          url: 'mailto:ajmalbuv@gmail.com',
          icon: 'mdi:email',
          ariaLabel: 'Send Email',
        },
      ],
    },
  },
  experiences: [
    {
      company: 'ETAYA INNOVATIONS Pvt Ltd, Bengaluru',
      role: 'Flutter Developer Intern',
      duration: 'Nov 2023 - Present',
      location: 'Bengaluru, Karnataka',
      description:
        'Developing and maintaining cross-platform mobile applications for Android and iOS using Flutter and Dart. Implementing clean architecture with provider-based state management to enhance performance and maintainability. Integrated Firebase for real-time synchronization, authentication, and push notifications.',
      highlights: [
        'Reduced widget rebuilds and implemented lazy loading for smoother 60fps UI interactions',
        'Automated and manual testing with Flutter testing framework and Firebase Crashlytics',
      ],
    },
    {
      company: 'WIMD Technologies Pvt Ltd, Bengaluru',
      role: 'Software Engineer Intern',
      duration: 'May 2024 - June 2024',
      location: 'Bengaluru, Karnataka',
      description:
        'Designed and implemented secure RESTful APIs using Node.js with JWT authentication and role-based access control. Assisted in database optimization by indexing MongoDB collections, improving query performance.',
      highlights: [
        'Automated API testing with Postman across CRUD operations',
        'Participated in code reviews, debugging, and system integration',
      ],
    },
  ],
  education: [
    {
      school: 'Krupanidhi Degree College',
      degree: "Bachelor's in Computer Application",
      duration: 'Oct 2021 - Sept 2024',
      location: 'Bengaluru, Karnataka',
    },
    {
      school: 'MIC Higher Secondary School',
      degree: 'Senior Secondary School (Computer Science)',
      duration: '2017 - 2019',
      location: 'Malappuram, Kerala',
    },
    {
      school: 'International Indian School Dammam',
      degree: 'Secondary School',
      duration: '2017',
      location: 'Dammam, KSA',
    },
  ],
  projects: [
    {
      slug: 'edumanage',
      title: 'EduManage — College Management System',
      summary:
        'A comprehensive web-based academic administration platform built with Django and PostgreSQL, streamlining student enrollment, attendance tracking, and grading.',
      fullDescription:
        'EduManage is a scalable and secure college management system designed to optimize academic administration. Built with Django and PostgreSQL, it offers features such as student enrollment, course and timetable management, attendance tracking, and performance assessment. The system supports multi-user access, allowing administrators, faculty, and students to interact seamlessly. Deployed on an Ubuntu VPS using Gunicorn and Certbot for SSL security, with serverless API integrations for maximum speed and database query optimization.',
      coverImage: emsCover,
      techstack: [
        'Python',
        'Django',
        'PostgreSQL',
        'Docker',
        'JavaScript',
        'Bootstrap',
        'Gunicorn',
        'Nginx',
        'Vercel',
      ],
      features: [
        {
          heading: 'User Roles & Authentication',
          description:
            'Secure multi-role authentication for administrators, faculty, and students with strict permission boundaries.',
        },
        {
          heading: 'Student & Course Management',
          description:
            'Enrollment workflows, batch assignment, and course allocation through a responsive dashboard.',
        },
        {
          heading: 'Attendance Tracking',
          description:
            'Real-time attendance recording with automated monthly and semester statistical reporting.',
        },
        {
          heading: 'Performance Evaluation',
          description:
            'Integrated gradebook and assessment module generating academic progress reports.',
        },
        {
          heading: 'Timetable Scheduling',
          description:
            'Conflict-free automated scheduling for faculty and classrooms.',
        },
      ],
      screenshots: emsScreenshots,
      liveUrl: undefined,
      githubUrl: 'https://github.com/ajmalbuv',
      featured: true,
    },
    {
      slug: 'portfolio',
      title: 'Personal Portfolio & Design System',
      summary:
        'High-performance personal website engineered with Astro 7, Tailwind CSS 4, and TypeScript, featuring zero-overhead architecture and strict CSP headers.',
      fullDescription:
        'My personal portfolio built to demonstrate clean code architecture, absolute KISS principle, and maximum accessibility. Engineered using Astro 7 for zero unnecessary client-side JavaScript, styled with Tailwind CSS 4 and Geist variable fonts, and hardened with automated SHA-256 Content Security Policy generation at build time.',
      coverImage: portfolioCover,
      techstack: [
        'Astro 7',
        'TypeScript',
        'Tailwind CSS 4',
        'tsParticles',
        'Geist Variable',
        'Cloudflare Pages',
      ],
      features: [
        {
          heading: 'Zero Client JS Default',
          description:
            'Islands architecture ensuring only the Hero particle canvas executes client JS, while all other sections remain static HTML.',
        },
        {
          heading: 'Strict Content Security Policy',
          description:
            'Automated post-build AST hash generator eliminating unsafe-inline from both styles and scripts.',
        },
        {
          heading: 'Modern CSS Animation Timeline',
          description:
            'Scroll-driven animations with automatic prefers-reduced-motion fallback.',
        },
      ],
      screenshots: portfolioScreenshots,
      liveUrl: 'https://ajmalbuv.pages.dev',
      githubUrl: 'https://github.com/ajmalbuv/ajmalbuv.github.io',
      featured: true,
    },
  ],
  skills: [
    {
      category: 'Languages',
      items: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'Java', 'SQL'],
    },
    {
      category: 'Frontend & Mobile',
      items: [
        'Flutter',
        'Astro',
        'Angular',
        'Vue.js',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
      ],
    },
    {
      category: 'Backend & APIs',
      items: [
        'Django',
        'FastAPI',
        'Node.js',
        'Express.js',
        'RESTful APIs',
        'JWT',
      ],
    },
    {
      category: 'Databases & Storage',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase Firestore'],
    },
    {
      category: 'DevOps, Cloud & Tooling',
      items: [
        'Docker',
        'Kubernetes',
        'Git & GitHub',
        'AWS',
        'Cloudflare Pages',
        'Vercel',
        'Nginx',
        'Linux VPS',
      ],
    },
  ],
} satisfies SiteData;
