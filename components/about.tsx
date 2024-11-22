// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        Currenly I pursue my passion in technology by studying a{" "}
        <b className="font-medium">Computer Science and Business Systems</b> I
        have experience as a{" "}
        <b className="font-medium">Full-Stack Developer Intern</b>, on various
        projects for responsive and scalable applications.
        <i className="italic">My favorite part of development</i> is solving
        real-world challenges and continuously improving user experiences. My
        tech stack includes knowledge in{" "}
        <b className="font-medium">ReactJS, Redux-Saga, Node.js, and MongoDB</b>
        , and I have experience with tools such as{" "}
        <b className="font-medium">Tailwind CSS, Git, and Postman</b>. I have
        experience with{" "}
        <b className="font-medium">React Native and Spring Boot</b> projects on
        mobile development. I am constantly learning new technologies.
        Currently, and I am actively looking for an opportunity as a
        <b className="font-medium"> Full-Stack Developer</b> or even a
        <b className="font-medium"> Software Developer</b>.
      </p>

      <p>
        <i className="italic">When I'm not coding</i>, I enjoy playing video
        games, watching movies, and reading tech articles. I also enjoy{" "}
        <b className="font-medium">learning new things</b>. I am currently
        learning about <b className="font-medium">Docker and CRM softwares</b>.
        I'm also learning how to build AI Models.
      </p>
    </motion.section>
  );
};


export default About;
