import { useState } from "react";
import {
  ContactRound,
  Briefcase,
  SlidersHorizontal,
  ArrowUpDown,
  Zap,
  Search,
  Maximize2,
  ExternalLink,
  TvMinimal,
  CalendarClock
} from "lucide-react";

import Moffitt from "../../assets/Moffitt.png";
import Swinburne from "../../assets/Swinburne.png";
import ERA from "../../assets/ERA.png";
import RTC from "../../assets/RTC.png";
import USF from "../../assets/USF.png";
import HealthHack from "../../assets/HeathHack.png";

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState("Main");

  const experiences = {
    Main: [
      {
        title: "ToastTutor",
        duration: "Dec 2024 – Present",
        skills: [
          "React.js",
          "Django",
          "Tailwind CSS",
          "JavaScript",
          "HTML",
          "CSS",
          "Data Structures",
        ],
        media: [
          { img: "/toasthome.png", title: "ToastTutor Demo", link: "#" },
          { img: "/schedule.png", title: "Schedule Page" },
          { img: "/checkout.png", title: "Checkout Page" },
        ],
        contributors: [RTC, USF, Swinburne],
      },
      {
        title: "ToastTutor",
        duration: "Dec 2024 – Present",
        skills: [
          "React.js",
          "Django",
          "Tailwind CSS",
          "JavaScript",
          "HTML",
          "CSS",
          "Data Structures",
        ],
        media: [
          { img: "/toasthome.png", title: "ToastTutor Demo", link: "#" },
          { img: "/schedule.png", title: "Schedule Page" },
          { img: "/checkout.png", title: "Checkout Page" },
        ],
        contributors: [RTC, USF, Swinburne],
      },
      {
        title: "ToastTutor",
        duration: "Dec 2024 – Present",
        skills: [
          "React.js",
          "Django",
          "Tailwind CSS",
          "JavaScript",
          "HTML",
          "CSS",
          "Data Structures",
        ],
        media: [
          { img: "/toasthome.png", title: "ToastTutor Demo", link: "#" },
          { img: "/schedule.png", title: "Schedule Page" },
          { img: "/checkout.png", title: "Checkout Page" },
        ],
        contributors: [RTC, USF, Swinburne],
      },
    ],
    "In Progress": [
     {
        title: "ToastTutor",
        duration: "Dec 2024 – Present",
        skills: [
          "React.js",
          "Django",
          "Tailwind CSS",
          "JavaScript",
          "HTML",
          "CSS",
          "Data Structures",
        ],
        media: [
          { img: "/toasthome.png", title: "ToastTutor Demo", link: "#" },
          { img: "/schedule.png", title: "Schedule Page" },
          { img: "/checkout.png", title: "Checkout Page" },
        ],
        contributors: [RTC, USF, Swinburne],
      },
      {
        title: "ToastTutor",
        duration: "Dec 2024 – Present",
        skills: [
          "React.js",
          "Django",
          "Tailwind CSS",
          "JavaScript",
          "HTML",
          "CSS",
          "Data Structures",
        ],
        media: [
          { img: "/toasthome.png", title: "ToastTutor Demo", link: "#" },
          { img: "/schedule.png", title: "Schedule Page" },
          { img: "/checkout.png", title: "Checkout Page" },
        ],
        contributors: [RTC, USF, Swinburne],
      },
      {
        title: "ToastTutor",
        duration: "Dec 2024 – Present",
        skills: [
          "React.js",
          "Django",
          "Tailwind CSS",
          "JavaScript",
          "HTML",
          "CSS",
          "Data Structures",
        ],
        media: [
          { img: "/toasthome.png", title: "ToastTutor Demo", link: "#" },
          { img: "/schedule.png", title: "Schedule Page" },
          { img: "/checkout.png", title: "Checkout Page" },
        ],
        contributors: [RTC, USF, Swinburne],
      },
    ],
  };

  const tabs = [
    { id: "Main", label: "Main", icon: TvMinimal },
    { id: "In Progress", label: "In Progress", icon: CalendarClock },
  ];

  return (
    <div className="w-full">
      {/* === Top Menu Bar (kept same as original) === */}
      <div className="mb-2">
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
      </div>

      {/* === Project Cards Section === */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        {experiences[activeTab].map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-5 bg-white hover:shadow-sm hover:border-gray-300 transition-all cursor-pointer"
          >
         
              <div>
                <h2 className="text-base font-semibold text-neutral-800 mb-1">
                  {item.title}
                </h2>
                <p className="text-sm text-neutral-600 mb-2">
                  {item.duration}
                </p>
                <p className="text-sm text-neutral-700 font-medium mb-1">
                  Skills:
                </p>
                <p className="text-xs text-neutral-600 mb-4">
                  {item.skills.join(" · ")}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  {item.media.map((m, i) => (
                    <div key={i}>
                      <div className="relative w-full aspect-video rounded-md overflow-hidden border border-gray-200">
                        <img
                          src={m.img}
                          alt={m.title}
                          className="object-cover w-full h-full"
                        />
                        {m.link && (
                          <a
                            href={m.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-2 right-2 bg-white/90 p-1 rounded-full hover:bg-white"
                          >
                            <ExternalLink size={14} className="text-gray-600" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs font-medium text-neutral-800 mt-1">
                        {m.title}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center mt-3">
                  <p className="text-xs font-medium text-neutral-700 mr-2">
                    Other contributors
                  </p>
                  <div className="flex -space-x-2">
                    {item.contributors.map((logo, idx) => (
                      <img
                        key={idx}
                        src={logo}
                        alt="Contributor"
                        className="w-7 h-7 rounded-full border border-white object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
