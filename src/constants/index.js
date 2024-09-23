import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  mongoose,
  prisma,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  freelance,
  shopify,
  carrent,
  jobit,
  tripguide,
  github,
  linkedin,
  gmail,
  resume,
  certificate,
  twitter,
  threejs,
  python,
  java,
  aws,
  ZapierClone,
  VectorVerse,
  AirbnbClone,
  Pixelyze,
  Snapwave,
  Dashboard,
  Endurex,
  DalleClone,
  Convergence,
  Sociopedia,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "works",
    title: "Projects",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
  {
    id: "mylinks",
    title: "Contact ",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Next.js/Node.js Developer",
    icon: creator,
  },
  {
    title: "DevOps",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Mongoose",
  //   icon: mongoose,
  // },
  {
    name: "Prisma",
    icon: prisma,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Freelance Projects",
    company_name: "freelance",
    icon: freelance,
    iconBg: "#1b7a07",
    date: "",
    points: [
      "Developed web applications using Next.js, Node.js and other related technologies.",
      "Created a comprehensive dashboard for managing various functionalities and administrative tasks, thus improving user efficiency by 30%.",
      "Refactored codebase from React to Next.js, improving performance and streamlining the development process by 20%.",
      "Built a dynamic website for a gym, incorporating features like class scheduling, member profiles and others to enhance user engagement and streamline gym management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Zapier Clone",
    description:
      "Developed a microservices-based automation platform with a Next.js frontend and Node.js backend services. It uses Turborepo for monorepo management and Kafka for task processing, with custom webhooks for user-defined workflows and email automation.",
    demo_link:
      "https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Zapier+Clone+/Zapier+CLone+github+readme+files/Zapier+Clone+Demo.mp4",
    tags: [
      {
        name: "turborepo",
        color: "coral-pink-text-gradient",
      },
      {
        name: "microservices",
        color: "sky-blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "white-text-gradient",
      },
      {
        name: "typescript",
        color: "ocean-blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "yellow-text-gradient",
      },
      {
        name: "zod",
        color: "blue-text-gradient",
      },
      {
        name: "reactflow",
        color: "bright-pink-text-gradient",
      },
      {
        name: "kafka",
        color: "deep-red-text-gradient",
      },
    ],

    image: ZapierClone,
    source_code_link: "https://github.com/Akash-m-SE/zapier",
    project_link: "https://zapier-frontend-eight.vercel.app/",
  },
  {
    name: "Vector Verse",
    description:
      "VectorVerse is an AI-powered app using Next.js and TypeScript that enables users to chat with PDFs. It utilizes AWS S3 for storage, PostgreSQL with pgvector for embeddings, and BullMQ for processing. Powered by Langchain and Groq LLM, the app offers interactive PDF chats and project management. Docker and Docker Compose are used for easy setup.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "ocean-blue-text-gradient",
      },
      {
        name: "nextauth",
        color: "purple-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "yellow-text-gradient",
      },
      {
        name: "bullmq",
        color: "white-text-gradient",
      },
      {
        name: "vector-embeddings",
        color: "lime-green-text-gradient",
      },
      {
        name: "Redis",
        color: "red-text-gradient",
      },
      {
        name: "Langchain",
        color: "silver-text-gradient",
      },
      {
        name: "docker",
        color: "sky-blue-text-gradient",
      },
      {
        name: "LLM",
        color: "yellow-text-gradient",
      },
    ],

    image: VectorVerse,
    source_code_link: "https://github.com/Akash-m-SE/vector-verse",
    project_link: "https://vector-verse.vercel.app/",
  },
  {
    name: "Airbnb Clone",
    description:
      "The Airbnb clone is a property rental platform built with Next.js 13 and TypeScript. It features Zustand for state management, Prisma for the database, and NextAuth for authentication. Users can search, filter, list properties, and manage their trip history, favorites, and reservations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "ocean-blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "royal-blue-text-gradient",
      },
      {
        name: "nextauth",
        color: "purple-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "yellow-text-gradient",
      },

      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
      {
        name: "ci cd",
        color: "azure-blue-text-gradient",
      },
      {
        name: "docker",
        color: "sky-blue-text-gradient",
      },
    ],

    image: AirbnbClone,
    source_code_link: "https://github.com/Akash-m-SE/airbnb-clone",
    project_link: "https://cloudhavenstays-airbnb-clone.vercel.app/",
  },
  {
    name: "Pixelyze",
    description:
      "Pixelyze is an AI SaaS app built with Next.js 14 and TypeScript. It integrates Google/Github authentication via Clerk, Mongoose caching, and secure payments through Stripe. Cloudinary handles image storage, processing, and AI-driven editing. The app features a dashboard for managing creations and credits.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "ocean-blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "royal-blue-text-gradient",
      },
      {
        name: "clerk",
        color: "purplish-blue-text-gradient",
      },
      {
        name: "stripe",
        color: "violet-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "cloudinaryai",
        color: "sky-blue-text-gradient",
      },
    ],
    image: Pixelyze,
    source_code_link: "https://github.com/Akash-m-SE/Pixelyze",
    project_link: "https://pixelyze.vercel.app/",
  },
  {
    name: "Snapwave",
    description:
      "Snapwave is a responsive image-sharing platform built with React and powered by Sanity CMS. It features easy navigation, offline access through image downloads, and secure Google OAuth 2.0 for one-tap login, offering an intuitive and seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "royal-blue-text-gradient",
      },
      {
        name: "sanity",
        color: "red-text-gradient",
      },
    ],
    image: Snapwave,
    source_code_link: "https://github.com/Akash-m-SE/Snapwave",
    project_link: "https://snapwave-frontend.vercel.app/",
  },
  {
    name: "Dashboard",
    description:
      "A customizable dashboard app built with React and Vite, featuring an ecommerce overview, employee, order, and customer management. It includes Syncfusion components like a calendar, Kanban board, editor, color picker, and supports various charts such as line, bar, and pie.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "purple-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "royal-blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "light-yellow-text-gradient",
      },
    ],
    image: Dashboard,
    source_code_link: "https://github.com/Akash-m-SE/dashboard",
    project_link: "https://dashboard-akash.vercel.app/",
  },
  {
    name: "EndureX",
    description:
      "Endurex is a fitness app built with Vite and React, offering detailed exercise info, YouTube video suggestions, and recommendations for similar exercises by muscle groups and equipment, all powered by RapidAPI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "purple-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "rapidapi",
        color: "royal-blue-text-gradient",
      },
    ],
    image: Endurex,
    source_code_link: "https://github.com/Akash-m-SE/endurex",
    project_link: "https://endurex.vercel.app/",
  },
  {
    name: "DALL-E 2.0",
    description:
      "DALL-E 2.0 is a platform that leverages OpenAI's advanced AI image generation capabilities, allowing users to input prompts and receive unique AI-generated images. By integrating the OpenAI API, the project enables users to create visually striking and imaginative images, demonstrating effective API integration and responsive design.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "openai",
        color: "ivory-white-text-gradient",
      },
    ],
    image: DalleClone,
    source_code_link: "https://github.com/Akash-m-SE/dall-e",
    project_link: "https://dalle2point0.netlify.app/",
  },
  // {
  //   name: "Convergence",
  //   description:
  //     "Convergence is a web-based platform that empowers users to communicate, collaborate, and connect effortlessly. With features like instant messaging, customizable rooms, screen sharing, camera interactions, and audio/video chat, Convergence redefines virtual communication. Whether for work or leisure, Convergence is your hub for seamless and engaging online interactions.",

  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "yellow-text-gradient",
  //     },
  //     {
  //       name: "webrtc",
  //       color: "purple-text-gradient",
  //     },
  //     {
  //       name: "socketio",
  //       color: "royal-blue-text-gradient",
  //     },
  //   ],
  //   image: Convergence,
  //   source_code_link: "https://github.com/Akash-m-SE/Convergence",
  //   project_link: null,
  // },
  // {
  //   name: "Sociopedia",
  //   description:
  //     "Sociopedia is a vibrant and engaging social media platform designed to connect users through the power of visual content. Users can effortlessly share their favorite moments, experiences, and stories by uploading and showcasing their pictures. The platform encourages interaction and communication through likes, comments, and discussions on each other's images.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: Sociopedia,
  //   source_code_link: "https://github.com/Akash-m-SE/Sociopedia",
  //   project_link: "https://sociopediathesocialmedia.netlify.app/",
  // },
];

const contactlinks = [
  {
    title: "LinkedIn",
    icon: linkedin,
    redirectLink: `${import.meta.env.VITE_APP_LINKEDIN_URL}`,
  },
  {
    title: "Github",
    icon: github,
    redirectLink: `${import.meta.env.VITE_APP_GITHUB_URL}`,
  },
  {
    title: "Gmail",
    icon: gmail,
    redirectLink: `mailTo:${import.meta.env.VITE_APP_GMAIL_ID}`,
  },
  {
    title: "Twitter (X)",
    icon: twitter,
    redirectLink: `${import.meta.env.VITE_APP_TWITTER_URL}`,
  },
  {
    title: "Resume",
    icon: resume,
    redirectLink: `${import.meta.env.VITE_APP_RESUME_REDIRECT_LINK}`,
  },
  {
    title: "1-100 Full Stack Dev Certificate",
    icon: certificate,
    redirectLink: `${import.meta.env.VITE_APP_COHORT_2_CERTIFICATE}`,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contactlinks,
};
