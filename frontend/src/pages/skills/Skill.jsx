import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Database,
  Languages,
  SlidersHorizontal,
  ArrowUpDown,
  Zap,
  Search,
  Maximize2,
  Cloud,
  Wrench,
} from "lucide-react";
import {
  SiPython,
  SiGo,
  SiJavascript,
  SiTypescript,
  SiC,
  SiSwift,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFastapi,
  SiSpringboot,
  SiTensorflow,
  SiTailwindcss,
  SiAmazon,
  SiDocker,
  SiGithub,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiCss3,
} from "react-icons/si";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("languages");

  const skills = {
    languages: [
      "Python",
      "Go",
      "JavaScript",
      "TypeScript",
      "C",
      "Swift",
      "HTML",
      "CSS",
    ],
    frameworks: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Django",
      "FastAPI",
      "Spring Boot",
      "TensorFlow",
      "Tailwind CSS",
    ],
    cloudtools: ["AWS", "Docker", "Git/GitHub", "Redis"],
    databases: ["PostgreSQL", "MongoDB", "Supabase"],
  };

  const iconMap = {
    Python: SiPython,
    Go: SiGo,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    C: SiC,
    Swift: SiSwift,
    HTML: SiHtml5,
    CSS: SiCss3,
    React: SiReact,
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    Django: SiDjango,
    FastAPI: SiFastapi,
    "Spring Boot": SiSpringboot,
    TensorFlow: SiTensorflow,
    "Tailwind CSS": SiTailwindcss,
    AWS: SiAmazon,
    Docker: SiDocker,
    "Git/GitHub": SiGithub,
    Redis: SiRedis,
    PostgreSQL: SiPostgresql,
    MongoDB: SiMongodb,
    Supabase: SiSupabase,
  };

  const tabs = [
    { id: "languages", label: "Languages", icon: Languages },
    { id: "frameworks", label: "Frameworks", icon: Layers },
    { id: "cloudtools", label: "Cloud/Tools", icon: Cloud },
    { id: "databases", label: "Databases", icon: Database },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.05, delayChildren: 0.1 },
        },
      }}
    >
      {/* Header */}
      <motion.div
        className="mb-6 flex items-center justify-between"
        variants={fadeUp}
      >
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
          {[SlidersHorizontal, ArrowUpDown, Zap, Search, Maximize2].map(
            (Icon, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.1}>
                <Icon size={16} className="text-neutral-500" />
              </motion.div>
            )
          )}
          <motion.button
            className="flex items-center gap-1 px-3 py-2 bg-neutral-700 text-white rounded-lg text-sm font-medium hover:bg-neutral-600 transition-colors ml-2"
            variants={fadeUp}
            custom={0.6}
          >
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
          </motion.button>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        key={activeTab}
        className="grid grid-cols-5 gap-4 mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.07 },
          },
        }}
      >
        {skills[activeTab].map((skill, index) => {
          const IconComponent = iconMap[skill] || Wrench;
          return (
            <motion.div
              key={skill}
              className="bg-white border border-gray-200 flex items-center justify-center rounded-lg p-6 shadow-sm hover:bg-neutral-50 transition-all cursor-pointer group"
              variants={fadeUp}
              custom={index * 0.1}
              whileHover={{ scale: 1.05 }}
            >
              <IconComponent
                size={56}
                className="grayscale opacity-100 group-hover:opacity-100 transition-all text-neutral-600"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
