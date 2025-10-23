import { useState } from "react";
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
      "HTML/CSS",
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
    // Languages
    Python: SiPython,
    Go: SiGo,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    C: SiC,
    Swift: SiSwift,
    "HTML/CSS": SiHtml5,

    // Frameworks
    React: SiReact,
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    Django: SiDjango,
    FastAPI: SiFastapi,
    "Spring Boot": SiSpringboot,
    TensorFlow: SiTensorflow,
    "Tailwind CSS": SiTailwindcss,

    // Cloud / Tools
    AWS: SiAmazon,
    Docker: SiDocker,
    "Git/GitHub": SiGithub,
    Redis: SiRedis,

    // Databases
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

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
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
          <SlidersHorizontal size={16} className="text-neutral-500" />
          <ArrowUpDown size={16} className="text-neutral-500" />
          <Zap size={16} className="text-neutral-500" />
          <Search size={16} className="text-neutral-500" />
          <Maximize2 size={16} className="text-neutral-500" />
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

      {/* Skills Grid */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {skills[activeTab].map((skill) => {
          const IconComponent = iconMap[skill] || Wrench;
          return (
            <div
              key={skill}
              className="bg-white border border-gray-200 flex items-center justify-center rounded-lg p-6 shadow-sm hover:bg-neutral-50 transition-all cursor-pointer group"
            >
              <IconComponent
                size={56}
                className="grayscale opacity-100 group-hover:opacity-100 transition-all text-neutral-700"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
