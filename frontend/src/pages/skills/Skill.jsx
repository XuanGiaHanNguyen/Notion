import { useState } from "react";
import {
  Plus,
  Layers,
  Database,
  Languages,
  SlidersHorizontal,
  ArrowUpDown,
  Zap,
  Search,
  Maximize2,
  Code2,
  FileCode,
  Palette,
  Wrench,
  Cloud,
  Braces,
  Terminal,
  Box,
  GitBranch,
  Server,
  Cpu,
  Lock,
  Bolt,
} from "lucide-react";

import PythonOriginal from "devicons-react/icons/PythonOriginal";
import GoOriginal from "devicons-react/icons/GoOriginal";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import COriginal from 'devicons-react/icons/COriginal';
import SwiftOriginal from "devicons-react/icons/SwiftOriginal";
import Html5Original from "devicons-react/icons/Html5Original";
import Css3Original from "devicons-react/icons/Css3Original";
import JavaOriginal from "devicons-react/icons/JavaOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import NextjsOriginal from "devicons-react/icons/NextjsOriginal";
import NodejsOriginal from "devicons-react/icons/NodejsOriginal";
import ExpressOriginal from "devicons-react/icons/ExpressOriginal";
import DjangoPlain from "devicons-react/icons/DjangoPlain";
import FastapiOriginal from "devicons-react/icons/FastapiOriginal";
import SpringOriginal from "devicons-react/icons/SpringOriginal";
import TensorflowOriginal from "devicons-react/icons/TensorflowOriginal";
import TailwindcssOriginal from "devicons-react/icons/TailwindcssOriginal";
import AmazonwebservicesOriginalWordmark from 'devicons-react/icons/AmazonwebservicesOriginalWordmark';

import DockerOriginal from "devicons-react/icons/DockerOriginal";
import GitOriginal from "devicons-react/icons/GitOriginal";
import GithubOriginal from "devicons-react/icons/GithubOriginal";
import RedisOriginal from "devicons-react/icons/RedisOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import MongodbOriginal from "devicons-react/icons/MongodbOriginal";
import SupabaseOriginal from "devicons-react/icons/SupabaseOriginal";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("languages");
  const [skills, setSkills] = useState({
    languages: [
      "Python",
      "Go",
      "JavaScript",
      "TypeScript",
      "C",
      "Swift",
      "HTML/CSS",
      "Java",
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
    cloudtools: [
      "AWS",
      "Docker",
      "Git/GitHub",
      "GitHub Actions",
      "Redis",
    ],
    databases: ["PostgreSQL", "MongoDB", "Supabase"],
  });

  // Icon mapping for skills
  const getSkillIcon = (skill) => {
    const iconMap = {
      // Languages
      Python: PythonOriginal,
      Go: GoOriginal,
      JavaScript: JavascriptOriginal,
      TypeScript: TypescriptOriginal,
      C: COriginal,
      Swift: SwiftOriginal,
      "HTML/CSS": Html5Original,
      Java: JavaOriginal,

      // Frameworks
      React: ReactOriginal,
      "Next.js": NextjsOriginal,
      "Node.js": NodejsOriginal,
      "Express.js": ExpressOriginal,
      Django: DjangoPlain,
      FastAPI: FastapiOriginal,
      "Spring Boot": SpringOriginal,
      TensorFlow: TensorflowOriginal,
      "Tailwind CSS": TailwindcssOriginal,

      // Cloud / Tools
      AWS: AmazonwebservicesOriginalWordmark,
      Docker: DockerOriginal,
      "Git/GitHub": GithubOriginal,
      "GitHub Actions": GitOriginal,
      Redis: RedisOriginal,

      // Databases
      PostgreSQL: PostgresqlOriginal,
      MongoDB: MongodbOriginal,
      Supabase: SupabaseOriginal,
    };

    return iconMap[skill] || Wrench;
  };

  const tabs = [
    { id: "languages", label: "Languages", icon: Languages },
    { id: "frameworks", label: "Frameworks", icon: Layers },
    { id: "cloudtools", label: "Cloud/Tools", icon: Cloud },
    { id: "databases", label: "Databases", icon: Database },
  ];

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-2">
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
              <button className="flex items-center gap-1 px-3 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700 transition-colors ml-2">
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
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {skills[activeTab].map((skill, index) => {
            const SkillIcon = getSkillIcon(skill);
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-2 px-6 shadow-sm hover:bg-neutral-50 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <SkillIcon size={22} className="text-neutral-800 filter grayscale brightness-60 transition"/>
                  <h3 className="text-lg font-medium text-neutral-900">
                    {skill}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
