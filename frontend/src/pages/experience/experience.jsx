import { useState } from "react";
import { motion } from "framer-motion";
import {
  ContactRound,
  Briefcase,
  SlidersHorizontal,
  ArrowUpDown,
  Zap,
  Search,
  Maximize2,
} from "lucide-react";

import Moffitt from "../../assets/Moffitt.png";
import ERA from "../../assets/ERA.png";
import RTC from "../../assets/RTC.png";
import USF from "../../assets/USF.png";
import HealthHack from "../../assets/HeathHack.png";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("Experience");
  const [experiences] = useState({
    Experience: [
      {
        title: "Student Software Engineer",
        company: "Moffitt Cancer Center",
        duration: "Aug 2025 - Present · 3 mos",
        department: "Machine Learning Department | Volunteer",
        logo: Moffitt,
      },
      {
        title: "Frontend Developer",
        company: "NeuroFlo AI",
        duration: "Oct 2025 - Present · 1 mos",
        department: "ERA Lab | University of South Florida",
        logo: ERA,
      },
    ],
    Volunteering: [
      {
        title: "Active Member",
        company: "Rewriting the Code",
        duration: "May 2025 - Present · 6 mos",
        category: "Science and Technology",
        logo: RTC,
      },
      {
        title: "Undergraduate Volunteer",
        company: "USF Research & Innovation",
        duration: "Jan 2025 - Apr 2025 · 4 mos",
        category: "Education",
        logo: USF,
      },
      {
        title: "Social Media & Volunteer",
        company: "HealthHacks",
        duration: "Sep 2025 - Present · 2 mos",
        logo: HealthHack,
      },
    ],
  });

  const tabs = [
    { id: "Experience", label: "Main", icon: Briefcase },
    { id: "Volunteering", label: "Volunteering", icon: ContactRound },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  const barVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={false}
      animate="visible"
    >
      <div className="w-full">
        <motion.div
          className="mb-2"
          initial="hidden"
          animate="visible"
          variants={barVariants}
        >
          {/* Tabs and Actions */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-bold transition-all ${
                      activeTab === tab.id
                        ? "bg-neutral-200 text-neutral-700"
                        : "text-neutral-500 hover:bg-neutral-200"
                    }`}
                  >
                    <Icon size={16} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <SlidersHorizontal size={16} className="text-neutral-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowUpDown size={16} className="text-neutral-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Zap size={16} className="text-neutral-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Search size={16} className="text-neutral-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Maximize2 size={16} className="text-neutral-500" />
              </button>
              <button className="flex items-center gap-1 px-3 py-2 bg-neutral-700 text-white rounded-lg text-sm font-medium hover:bg-neutral-600 transition-colors ml-2">
                New
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="opacity-70"
                >
                  <path
                    d="M6 2V10M2 6H10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 gap-4 mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0 },
            },
          }}
        >
          {experiences[activeTab].map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:bg-neutral-50 transition-all cursor-pointer group"
            >
              <div className="flex gap-3">
                {/* Logo */}
                <div className="w-12 h-12 rounded flex items-center justify-center overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold mb-0.5">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-black-600 mb-1">
                    {exp.company}
                    {exp.type && (
                      <span className="text-black-500"> · {exp.type}</span>
                    )}
                  </p>
                  <p className="text-xs text-black-500">{exp.duration}</p>
                  {exp.department && (
                    <p className="text-xs text-neutral-600 mt-1">
                      {exp.department}
                    </p>
                  )}
                  {exp.category && (
                    <p className="text-xs text-neutral-600 mt-1">
                      {exp.category}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}