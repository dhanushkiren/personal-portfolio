import React from "react";

import {
  FaCode,
  FaSchool,
  FaAngular,
  FaTrophy,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

// Data for achivements

export const ACHIEVEMENTS_DATA = [
  {
    title: "Internship",
    location: "Scrapify EcoTech Pvt Ltd, Chennai",
    description:
      "Completed an internship at Scrapify EcoTech as a React Developer and built projects using Reactjs and Springboot. Duration : 15th Jun 2023 to 20 Nov 2024.",
    icon: React.createElement(FaCertificate),
    date: "15th Jun 2023-20th Nov 2024",
    certificateUrl: "/certificates/internship_2022_1.pdf",
    category: "Internship",
    result: "Completed",
  },
  {
    title: "Internship",
    location: "Scrapify EcoTech Pvt Ltd, Chennai",
    description:
      "Completed an internship at Scrapify EcoTech as a React Native Developer and built projects using React Native and Springboot. Duration : 15th Jan 2024 to 14 Jul 2024.",
    icon: React.createElement(FaCertificate),
    date: "15th Jan 2024 - 14 Jul 2024",
    certificateUrl: "/certificates/internship_2022_2.pdf",
    category: "Internship",
    result: "Completed",
  },
  {
    title: "Internship",
    location: "Scrapify EcoTech Pvt Ltd, Chennai",
    description:
      "Played a Team Manager role for the new interns in the Scrapify EcoTech company. Duration : 20th Jan 2024 to 05th Jul 2024",
    icon: React.createElement(FaCertificate),
    date: "20th Jan 2024 - 05th Jul 2024",
    certificateUrl: "/certificates/internship_2022_2.pdf",
    category: "Internship",
    result: "Completed",
  },
  {
    title: "Internship",
    location: "Skill Rank (Skill Software, Inc),Chennai",
    description:
      "Completed an internship at Skill Rank as a SOFTWARE ENGINEER INTERN from 20th Jun 2024 to 22nd Jul 2024.",
    icon: React.createElement(FaCertificate),
    date: "20th Jun 2024 - 22nd Jul 2023",
    certificateUrl: "/certificates/internship_2023.pdf",
    category: "Internship",
    result: "Completed",
  },
  {
    title: "Patent",
    location: "",
    description:
      "Applied for a patent with the title of innovation 'Disaster Ready Web Application'.",
    icon: React.createElement(FaCertificate),
    date: "2024",
    certificateUrl: "/certificates/patent_smart_voting_2024.pdf",
    category: "Patent",
    result: "Applied",
  },
  {
    title: "Ideathon",
    location: "GYAN MITRA 24, a National Level Techno Symposium",
    description:
      "Presented an Ideathon in GYAN MITRA 24, a National Level Techno Symposium during 16th and 17th February 2024.",
    icon: React.createElement(FaTrophy),
    date: "16th-17th Feb 2024",
    certificateUrl: "/certificates/ideathon_gyan_mitra_2024.pdf",
    category: "Paper/Project Presentation",
    result: "Participated",
  },
  {
    title: "VISAI 2024",
    location:
      "14th International Project Competition, Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Avadi, Chennai",
    description:
      "Participated under the theme Sustainable Cities and Communities in VISAI 2024 - 14th International Project Competition held on 23rd and 24th February 2024 organized by Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Avadi, Chennai in collaboration with INCCU.",
    icon: React.createElement(FaTrophy),
    date: "23rd-24th Feb 2024",
    certificateUrl: "/certificates/visai_2024.pdf",
    category: "Paper/Project Presentation",
    result: "Participated",
  },
  {
    title: "VISAI 2024",
    location:
      "14th International Project Competition, Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Avadi, Chennai",
    description:
      "Won 2nd prize under the theme Sustainable Cities and Communities in VISAI 2024 - 14th International Project Competition held on 23rd and 24th February 2024 organized by Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Avadi, Chennai in collaboration with INCCU.",
    icon: React.createElement(FaTrophy),
    date: "23rd-24th Feb 2024",
    certificateUrl: "/certificates/visai_2nd_place_2024.pdf",
    category: "Paper/Project Presentation",
    result: "won 2nd prize",
  },
  {
    title:
      "2nd International Conference on Future Technology Advancement [ICFTA 2024]",
    location: "",
    description:
      "Published a paper in the 2nd International Conference on Future Technology Advancement [ICFTA 2024].",
    icon: React.createElement(FaCertificate),
    date: "2024",
    certificateUrl: "/certificates/icfta_2024.pdf",
    category: "Others",
    result: "Published",
  },
  {
    title: "Patent",
    location: "",
    description:
      "Applied for a patent with the title of innovation 'AI-Based Tree Enumeration, Fire Prediction, and AI Chatbot for Forest Land'.",
    icon: React.createElement(FaCertificate),
    date: "2024",
    certificateUrl: "/certificates/patent_tree_enumeration_2024.pdf",
    category: "Patent",
    result: "Applied",
  },
  {
    title: "Best Performer award",
    location: "Best Performer Award, FXEC",
    description:
      "Received a Outstanding Performer Award of the Academic year 2022 - 2023.",
    icon: React.createElement(FaCertificate),
    date: "2023",
    certificateUrl: "/certificates/power_bi_2024.pdf",
    category: "Others",
    result: "Participated",
  },
  {
    title: "FXHACK23",
    location: "24 Hours Internal Hackathon, FXEC",
    description:
      "Participated in 24 Hours Tech Hackathon named 'FXHACK `23' organized by Industrial Applied Lab in FXEC college on 19th Oct 2023.",
    icon: React.createElement(FaCertificate),
    date: "19th Oct 2023",
    certificateUrl: "/certificates/international_conference_2023.pdf",
    category: "Hackathon",
    result: "Participated",
  },
{
    title: "Engineering Excellence Mega Project Expo 2023",
    location: "FXEC",
    description:
      "Won 1st prize in Engineering Excellence Mega Project Expo 2023 conducted by FXEC on 15th September 2023.",
    icon: React.createElement(FaTrophy),
    date: "15th Sep 2023",
    certificateUrl: "/certificates/engineering_excellence_2023.pdf",
    category: "Paper/Project Presentation",
    result: "Won 1st prize",
  },
 {
    title: "Student Trainer",
    location: "Foundation Skill Trainer, FXEC",
    description:
      "Participated as a Skill Trainer for the First Year Students for the Foundation Skill Training titled 'Workshop on Blender and PhotoShop.",
    icon: React.createElement(FaTrophy),
    date: "05th - 14th Sep 2023",
    certificateUrl: "/certificates/inter_college_ideathon_2023.pdf",
    category: "Others",
    result: "Participated",
  },
 {
    title: "Ignite Innovation 2.0",
    location: "online",
    description:
      "Participated in idea/project presentation during Ignite Innovation 2.0 and won the Best Presenter Award on 27th August 2023.",
    icon: React.createElement(FaTrophy),
    date: "27th Aug 2023",
    certificateUrl: "/certificates/ignite_innovation_2023.pdf",
    category: "Paper/Project Presentation",
    result: "won the Best Presenter Award",
  },
{
    title: "IEEE Xplore Webinar",
    location: "IEEE Xplore, FXEC",
    description:
      "Participated in a Webinar conducted by IEEE Xplore Organized by FXEC.",
    icon: React.createElement(FaCertificate),
    date: "03rd Aug 2023",
    certificateUrl: "/certificates/power_bi_2024.pdf",
    category: "Others",
    result: "Participated",
  },
{
    title: "Internship",
    location: "8 Queens Software Technologies, Chennai",
    description:
      "Completed an internship training as web developer at 8 Queens Software Technologies from 08th Jun 2023 to 08th Jul 2023.",
    icon: React.createElement(FaCertificate),
    date: "12th Jun 2023 - 7th Aug 2023",
    certificateUrl: "/certificates/internship_dsrt_2023.pdf",
    category: "Internship",
    result: "Completed",
  },
{
    title: "Srishti 2023",
    location: "Saintgits college of Engineering, Kottayam, Kerala",
    description:
      "Won 2nd Prize in SRISHTI 2023, 9th National Level Technical Project Exhibition in Saintgits College of Engineering under Computer Application.",
    icon: React.createElement(FaCertificate),
    date: "28th - 29th Mar 2023",
    certificateUrl: "/certificates/workshop_2022.pdf",
    category: "Paper/Project Presentation",
    result: "Won 2nd Prize",
  },
  {
    title: "Hands-on Workshop",
    location: "FXEC",
    description:
      "Participated in 4 Days Hands-on training on Web Essentials organized by FXEC from 21st to 24th Dec 2022.",
    icon: React.createElement(FaAward),
    date: "21st - 24th Dec 2022",
    certificateUrl: "/certificates/paper_presentation_synergy_2023.pdf",
    category: "Others",
    result: "Participated",
  },
 {
    title: "24 hours Tech Hackathon",
    location: "Tech Hackathon 2022, FXEC",
    description:
      "Participated in 24 Hours Tech Hackathon named 'AI Bot Development' in FXEC college on 11th Nov 2022.",
    icon: React.createElement(FaCertificate),
    date: "11th Nov 2022",
    certificateUrl: "/certificates/international_conference_2023.pdf",
    category: "Hackathon",
    result: "Participated",
  },
{
    title: "Engineering Excellence Mega Project Expo 2022",
    location: "FXEC",
    description:
      "Participated in the Engineering Excellence Mega Project Expo 2022 on 15th September 2022.",
    icon: React.createElement(FaTrophy),
    date: "15th Sep 2022",
    certificateUrl: "/certificates/engineering_excellence_2022.pdf",
    category: "Paper/Project Presentation",
    result: "Participated",
  },
 {
    title: "Annual Sport Meet",
    location: "FXEC",
    description: "Participated in the Annual Sport Meet on 10th June 2022.",
    icon: React.createElement(FaAward),
    date: "10th Jun 2022",
    certificateUrl: "/certificates/annual_sport_meet_2022.pdf",
    category: "Sports",
    result: "Participated",
  },
];