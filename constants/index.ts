import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import plantImg from "@/public/AI-plant.png";
import mentorImg from "@/public/mentor-mentee.png";
import mernImg from "@/public/Mern-Stack.png";
import pdfImg from "@/public/Pdf-Generator.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/dhanushdk1/",
  github: "https://github.com/dhanushkiren",
  resume: "/dk-resume.pdf",
  email: "dhanushrameshkvpt03@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Pursuing Bachelor's Degree",
    description:
      "Currently Pursuing B.Tech computer Science and Business System, gaining a solid foundation in various subjects and essential skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Current",
  },
  {
    title: "React.js Intern",
    description:
      "Currently working as an intern in Scrapify Ecotech Pvt Ltd. Acquired expertise in React components, state management with Redux, and interacting with RESTful APIs.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "React Native Intern",
    description:
      "Worked as a React Native developer to built mobile Application, I have collaborated with team to make it responsive and dynamic mobile applications.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "Software Engineer Intern",
    description:
      "Worked as a Software Engineering to build an web application for client, Acquired knowledge in Nextjs, javascript and responsive.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Mentor-Mentee Management",
    description:
      "A web app that is built using ReactJs and NodeJS, it has the dummy UI with realtime fuctionality of managing staff and students.",
    tags: ["React", "MongoDB", "JavaScript", "Custom CSS", "NodeJS"],
    imageUrl: mentorImg,
    projectUrl: "https://github.com/dhanushkiren/mentor-mentee",
  },
  {
    title: "plant Disease Detection App",
    description:
      "A flutter based mobile Application used to detect the plant diseases using AI for image processing.",
    tags: ["Flutter", "Python", "Fast-API", "APP", "AI / ML"],
    imageUrl: plantImg,
    projectUrl:
      "https://github.com/dhanushkiren/AI-plant-disease-detection-app",
  },
  {
    title: "Blog Post",
    description:
      "A Web Based application for the Blog post, gaining a solid foundation in MERN Stack.",
    tags: ["React", "NodeJs", "MongoDB", "ExpressJS", "Tailwind"],
    imageUrl: mernImg,
    projectUrl: "https://github.com/dhanushkiren/MERN-Stack",
  },
  {
    title: "Pdf Generator",
    description:
      "A Simple web application which is used generate pdf based on the user's text input, Acquired knowledge in Python and React.",
    tags: ["React", "Python", "Pipenv", "Custom CSS", "Py-Flask"],
    imageUrl: pdfImg,
    projectUrl: "https://github.com/dhanushkiren/pdf-generator-SR",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "GitHub",
  "Node.js",
  "Tailwind",
  "React Native",
  "Redux",
  "Redux-Saga",
  "MongoDB",
  "PostgreSQL",
  "Express.js",
  "Python",
  "Flask",
  "Fast-API",
  "Docker",
] as const;

// Owner name
export const OWNER_NAME = "Dhanush kiren";
