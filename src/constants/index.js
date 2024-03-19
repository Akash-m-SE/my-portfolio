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
  shopify,
  carrent,
  jobit,
  tripguide,
  github,
  linkedin,
  gmail,
  resume_logo,
  threejs,
  python,
  java,
  Sociopedia,
  Snapwave,
  Convergence,
  dalleclone,
  airbnbclone,
  pixelyze,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  // {
  //   id: "works",
  //   title: "Projects",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "React\u002FNext.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [];

const testimonials = [];

const projects = [
  {
    name: "Airbnb Clone",
    description:
      "The Airbnb clone, developed using Next.js 13, incorporates technologies like Next.js app router, TypeScript for type-checking, Zustand for modal state management, and Prisma for database handling. Seamless authentication via NextAuth enables users to register/login via email/password or one-tap Google/GitHub login. Advanced search and filtering features enhance user experience by allowing property searches based on location, date range, and room count. Users can list properties with detailed information, gaining visibility into trip history, favorites, listings, and reservations.",

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
        name: "zustand",
        color: "yellow-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
    ],

    image: airbnbclone,
    source_code_link: "https://github.com/Akash-m-SE/airbnb-clone",
    project_link: "https://cloudhavenstays-airbnb-clone.vercel.app/",
  },
  {
    name: "Pixelyze",
    description:
      "Pixelyze is an AI SaaS application developed with Next.js 14 and TypeScript, featuring authentication via Google/Github using Clerk. It optimizes MongoDB performance with Mongoose connection caching and ensures secure payments with Stripe integration. Cloudinary is utilized for efficient image storage and processing. The user-centric dashboard facilitates seamless management of creations and credits, fostering increased user engagement.",

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
    image: pixelyze,
    source_code_link: "https://github.com/Akash-m-SE/Pixelyze",
    project_link: "https://pixelyze.vercel.app/",
  },
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
  //   ],
  //   image: Sociopedia,
  //   source_code_link: "https://github.com/Akash-m-SE/Sociopedia",
  //   project_link: "https://sociopediathesocialmedia.netlify.app/",
  // },
  {
    name: "Snapwave",
    description:
      "Snapwave is a responsive image-sharing platform developed using React for the frontend, seamlessly integrated with Sanity CMS for robust backend support. The user interface prioritizes easy navigation, enabling offline image access through downloadable images. Implementation of Google OAuth 2.0 ensures a seamless and secure one-tap login experience, contributing to an elevated user retention rate. The project highlights proficiency in frontend development and a commitment to enhancing user experience through thoughtful design and functionality.",

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
    name: "Convergence",
    description:
      "Convergence is a web-based platform that empowers users to communicate, collaborate, and connect effortlessly. With features like instant messaging, customizable rooms, screen sharing, camera interactions, and audio/video chat, Convergence redefines virtual communication. Whether for work or leisure, Convergence is your hub for seamless and engaging online interactions.",

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
        name: "webrtc",
        color: "purple-text-gradient",
      },
      {
        name: "socketio",
        color: "royal-blue-text-gradient",
      },
    ],
    image: Convergence,
    source_code_link: "https://github.com/Akash-m-SE/Convergence",
    project_link: null,
  },
  {
    name: "DALL-E 2.0",
    description:
      "DALL-E 2.0 is an image generator platform, leveraging the power of OpenAI's advanced AI image generation capabilities. Inspired by the groundbreaking DALL-E model, my project offers a creative platform for generating visually stunning and imaginative images. By integrating the OpenAI API, users can provide prompts and receive unique AI-generated images that match their descriptions. This project demonstrates my skills in API integration, and responsive design and highlights my ability to bring cutting-edge technologies to life, showcasing my passion for innovation and problem-solving in the field of web development.",

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
        name: "openai",
        color: "ivory-white-text-gradient",
      },
    ],
    image: dalleclone,
    source_code_link: "https://github.com/Akash-m-SE/dall-e",
    project_link: "https://dalle2point0.netlify.app/",
  },
];

const contactlinks = [
  {
    title: "LinkedIn",
    icon: linkedin,
    redirectLink: "https://www.linkedin.com/in/akash-maity2399/",
  },
  {
    title: "Github",
    icon: github,
    redirectLink: "https://github.com/Akash-m-SE",
  },
  {
    title: "Gmail",
    icon: gmail,
    redirectLink: "mailTo:akashm9923@gmail.com",
  },
  {
    title: "Resume",
    icon: resume_logo,
    redirectLink:
      "https://drive.google.com/file/d/1-7yuKQ6wqmULqmJR5OMkvybpCAYIuQiK/view?usp=sharing",
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
