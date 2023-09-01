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
  redux,
  tailwind,
  nodejs,
  mongodb,
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
  dalleclone,
  Convergence,
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
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
  {
    name: "Three JS",
    icon: threejs,
  },
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
    name: "Sociopedia",
    description:
      "Sociopedia is a vibrant and engaging social media platform designed to connect users through the power of visual content. Users can effortlessly share their favorite moments, experiences, and stories by uploading and showcasing their pictures. The platform encourages interaction and communication through likes, comments, and discussions on each other's images.",

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
    ],
    image: Sociopedia,
    source_code_link: "https://github.com/Akash-m-SE/Sociopedia",
    project_link: "https://sociopediathesocialmedia.netlify.app/",
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
      "https://drive.google.com/file/d/1g3bbkTLbCtyDNcn33dPuPCKQns7S1XXU/view?usp=sharing",
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
