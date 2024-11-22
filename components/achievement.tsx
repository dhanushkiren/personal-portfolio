"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useThemeContext } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";
import { ACHIEVEMENTS_DATA } from "@/constants/achievements";
import SectionHeading from "./section-heading"; 
import { useMediaQuery } from "react-responsive";

const Achievements = () => {
  const { ref } = useSectionInView("Achievements", 0.10);
  const { theme } = useThemeContext();
  const { activeSection } = useActiveSectionContext();

  const [isAchievementsSectionActive, setIsAchievementsSectionActive] =
    useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const itemsPerPage = isMobile ? 3 : 6;

  useEffect(() => {
    
    setIsAchievementsSectionActive(activeSection === "Achievements");
  }, [activeSection]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const handleViewCertificate = (certificateUrl: any) => {
    window.open(certificateUrl, "_blank");
  };

  const filteredAchievements =
    selectedCategory === "All"
      ? ACHIEVEMENTS_DATA
      : ACHIEVEMENTS_DATA.filter(
          (achievement) => achievement.category === selectedCategory
        );

  const totalPages = Math.ceil(filteredAchievements.length / itemsPerPage);

  const paginatedAchievements = filteredAchievements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section
      ref={ref}
      id="achievements"
      className="scroll-mt-28 mb-28 sm:mb-40 relative"
    >
      <SectionHeading>My Achievements</SectionHeading>

      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {[
          "All",
          "Paper/Project Presentation",
          "Patent",
          "Hackathon",
          "Internship",
          "Sports",
          "Others",
        ].map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.1 }}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1); // Reset to first page on category change
            }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto sm:mx-[5%] lg:mx-[10%]">
        {paginatedAchievements.length > 0 ? (
          paginatedAchievements.map((achievementData, i) => (
            <motion.div
              key={`achievementData-${i}`}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{
                scale: 1.09,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 },
              }}
              className={`p-6 rounded-lg border ${
                theme === "light"
                  ? "bg-gray-100 border-gray-200"
                  : "bg-gray-800 border-gray-700"
              } shadow-md`}
              style={{ minWidth: "280px", maxWidth: "350px" }} // Adjust the min and max width as per your design
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-2 rounded-full ${
                    theme === "light" ? "bg-white" : "bg-gray-700"
                  }`}
                >
                  {achievementData.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold capitalize">
                    {achievementData.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievementData.date}
                  </p>
                </div>
              </div>

              <p className="text-base text-gray-700 dark:text-gray-300">
                {achievementData.location}
              </p>

              <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                {achievementData.description}
              </p>
              {/* {achievementData.certificateUrl && (
                <button
                  className="mt-4 bg-gray-700 hover:bg-gray-900 w-full text-white py-2 px-4 rounded-md"
                  onClick={() =>
                    handleViewCertificate(achievementData.certificateUrl)
                  }
                >
                  View Certificate
                </button>
              )} */}
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-1 sm:col-span-2 lg:col-span-3 text-gray-700 dark:text-gray-300">
            No achievements found in this category.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className=" left-0 right-0 bg-white dark:bg-gray-900 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 flex items-center"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <FaArrowLeft className="mr-2" />
            </motion.button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                key={page}
                className={`px-4 py-2 rounded ${
                  currentPage === page
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 flex items-center"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <FaArrowRight className="ml-2" />
            </motion.button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;