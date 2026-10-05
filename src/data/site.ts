import type { ImageMetadata } from 'astro';
import avatarImg from '../assets/images/personal/photo.jpeg';
import blamrCover from '../assets/images/projects/images/blamr.webp';
import emsCover from '../assets/images/projects/images/ems.webp';
import portfolioCover from '../assets/images/projects/images/portfolio.webp';
import typstFlutterCover from '../assets/images/projects/images/typst-flutter.webp';
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
    subtitle: 'Systems & Mobile Engineer | Flutter, Rust & Go',
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
      role: 'Flutter Developer',
      duration: 'Nov 2024 - Present',
      location: 'Bengaluru, Karnataka',
      description:
        'Working as a full-time Flutter developer building and maintaining high-performance cross-platform mobile applications for Android and iOS using Flutter and Dart. Implementing clean architecture and provider-based state management with robust Firebase cloud integrations.',
      highlights: [
        'Designed scalable mobile architectures implementing Clean Architecture, provider state management, and reusable UI components',
        'Integrated RESTful APIs and Firebase services for real-time synchronization, authentication, push notifications, and cloud storage',
        'Optimized widget tree rebuilds and implemented lazy loading, eliminating frame drops for smooth 60fps UI interactions',
        'Conducted automated and manual quality testing using Flutter testing framework and Firebase Crashlytics to preempt UI inconsistencies and crashes',
        'Collaborated in an Agile workflow, participating in sprint planning, peer code reviews, and cross-functional feature delivery',
      ],
    },
    {
      company: 'WIMD Technologies Pvt Ltd, Bengaluru',
      role: 'Software Engineer Intern',
      duration: 'May 2024 - June 2024',
      location: 'Bengaluru, Karnataka',
      description:
        'Designed and developed backend services and database optimizations, gaining hands-on experience with production APIs, access control, and industry-standard testing workflows.',
      highlights: [
        'Designed and implemented secure RESTful APIs using Node.js with JWT authentication and role-based access control (RBAC)',
        'Optimized MongoDB database indexing and collection schemas, significantly improving query performance and retrieval speeds',
        'Automated comprehensive API testing using Postman across CRUD operations to validate data integrity and endpoint reliability',
        'Engaged in code reviews, debugging, and cross-tier system integration to enhance system stability',
      ],
    },
  ],
  education: [
    {
      school: 'Krupanidhi Degree College',
      degree: 'Bachelor of Computer Applications',
      duration: 'Aug 2021 - July 2024',
      location: 'Bengaluru, Karnataka',
    },
    {
      school: 'MIC Higher Secondary School',
      degree: 'Commerce',
      duration: 'June 2017 - March 2019',
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
      slug: 'typst-flutter',
      title: 'typst_flutter — Native Typst Compiler for Flutter',
      summary:
        'Embed the Typst typesetting compiler natively into Flutter apps via Rust FFI with zero WASM/WebView overhead, sub-100ms compilation, and drop-in widgets.',
      fullDescription:
        'typst_flutter is an open-source Flutter package that natively embeds the Typst document compiler into Flutter applications across Android, iOS, macOS, Windows, and Linux via a high-performance Rust FFI bridge. By avoiding heavy WebViews and WASM interpreters, it compiles complex Typst documents directly on-device in under 100 milliseconds.\n\nEngineered with an opaque handle memory architecture, compiled documents remain safely inside Rust memory to guarantee zero race conditions and zero memory leaks. It provides drop-in interactive widgets (TypstDocumentViewer), full Typst query() selector data extraction to structured JSON, bidirectional input passing via sys.inputs, and automated handling for the Typst universe package registry (@preview/*). Published on pub.dev and backed by comprehensive documentation.',
      coverImage: typstFlutterCover,
      techstack: ['Flutter', 'Dart', 'Rust', 'FFI', 'Typst', 'Cross-Platform'],
      features: [
        {
          heading: 'Native Rust Core & FFI Bridge',
          description:
            'Compiles Typst markup natively on-device with Rust FFI, achieving sub-100ms compilation without WebViews, WASM, or external cloud servers.',
        },
        {
          heading: 'Opaque Handle Memory Architecture',
          description:
            'Compiled document references remain encapsulated in native Rust memory, guaranteeing thread safety, high throughput, and zero memory leaks.',
        },
        {
          heading: 'Drop-In Document Viewer Widgets',
          description:
            'Interactive Flutter widgets (TypstDocumentViewer, TypstView) supporting multi-page rendering, pinch-to-zoom, pan, and reactive re-renders.',
        },
        {
          heading: 'Dynamic Data & Metadata Querying',
          description:
            'Extract structured JSON metadata and document hierarchies via Typst selectors with query(), and pass runtime variables using sys.inputs.',
        },
        {
          heading: 'Typst Package Registry Support',
          description:
            'Seamless integration with the Typst Universe (@preview/*) with automatic downloading, tarball decompression, and in-memory caching.',
        },
        {
          heading: 'Automated Multi-Platform Binary Distribution',
          description:
            'Turnkey cross-compilation pipeline providing prebuilt native binaries for Android, iOS, macOS, Windows, and Linux via automated setup scripts.',
        },
      ],
      screenshots: [],
      liveUrl: 'https://pub.dev/packages/typst_flutter',
      liveUrlLabel: 'View on Pub.dev',
      githubUrl: 'https://github.com/ajmalbuv/typst_flutter',
      featured: true,
    },
    {
      slug: 'blamr',
      title: 'blamr — Fast Concurrent Git Blame CLI & Attribution Engine',
      summary:
        'Ultra-fast, zero-dependency concurrent git-blame author attribution and line statistics CLI engine written in pure Go with SIMD binary sniffing.',
      fullDescription:
        'blamr is a high-performance command-line developer tool and Git subcommand written in pure Go (zero CGO) designed to analyze repository authorship and line attribution at lightning speeds. By orchestrating a parallel worker goroutine pool sized to host CPU cores, blamr dramatically accelerates git-blame analysis over large codebases.\n\nIt features an 8KB stack-allocated SIMD null-byte inspector for instantaneous binary and noise detection, UTF-16 BOM handling, Git LFS pointer recognition, and automated filtering of machine-generated lockfiles and minified bundles. With built-in whitespace churn resilience (-w flag pass-through), terminal TTY ghosting prevention, and structured JSON output for CI/CD pipelines, blamr delivers production-grade repository intelligence.',
      coverImage: blamrCover,
      techstack: [
        'Go',
        'Git',
        'CLI',
        'Concurrency',
        'Goroutines',
        'SIMD',
        'CI/CD',
      ],
      features: [
        {
          heading: 'Parallel Worker Goroutine Pool',
          description:
            'Dispatches git-blame streams across CPU-core-scaled worker goroutines for concurrent processing of entire codebases in seconds.',
        },
        {
          heading: 'SIMD Binary & Noise Sniffing',
          description:
            'Zero-allocation 8KB chunk inspector using SIMD null-byte detection (bytes.IndexByte) to skip binaries, UTF-16 BOMs, and Git LFS pointers.',
        },
        {
          heading: 'Automated Noise & Lockfile Exclusion',
          description:
            'Pre-filters vendor manifests, lockfiles (package-lock.json, bun.lock, go.sum), and minified assets to preserve authentic author stats.',
        },
        {
          heading: 'Whitespace Churn Resilience',
          description:
            'Passes -w flags to underlying blame runners, ensuring mass formatting, indentation changes, and linter churn do not distort credit.',
        },
        {
          heading: 'Dual Standalone & Git Subcommand Mode',
          description:
            'Invokable as both standalone blamr executable and seamless git blamr subcommand with identical argument parsing.',
        },
        {
          heading: 'Terminal TTY Polish & Automation JSON',
          description:
            'In-place ANSI line clearing with auto-detection for non-interactive CI environments, plus full -json export for bots and dashboards.',
        },
      ],
      screenshots: [],
      liveUrl: 'https://github.com/ajmalbuv/blamr/releases',
      liveUrlLabel: 'Download Binaries',
      githubUrl: 'https://github.com/ajmalbuv/blamr',
      featured: true,
    },
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
      items: [
        'Rust',
        'Go',
        'Dart',
        'Python',
        'TypeScript',
        'JavaScript',
        'Java',
        'SQL',
      ],
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
