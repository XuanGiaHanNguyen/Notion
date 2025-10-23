import { useState } from "react";
import {
  SlidersHorizontal,
  ArrowUpDown,
  Zap,
  Search,
  Maximize2,
  TvMinimal,
  CalendarClock,
  Github,
  Youtube,
  Image as ImageIcon,
} from "lucide-react";

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
        ],
        media: [
          {
            img: "/toasthome.png",
            title: "Video Demo",
            link: "https://youtu.be/0wnn2L0FkWc?si=MQRzDgukTvG2lE52",
          },
          {
            img: "/toasthome.png",
            title: "Github",
            link: "https://github.com/ttrang87/toast-tutor",
          },
          { img: "/checkout.png", title: "Pages" },
        ],
        contributors: ["T", "G", "Q","P"],
      },
      {
        title: "MediCare+",
        duration: "Jun 2025 – Aug 2025",
        skills: [
          "React.js",
          "MongoDB",
          "Tailwind CSS",
          "JavaScript",
          "Node.js",
        ],
        media: [
          {
            img: "/toasthome.png",
            title: "Github",
            link: "https://github.com/XuanGiaHanNguyen/MediCare-",
          },
          { img: "/checkout.png", title: "Pages" },
        ],
        contributors: ["Y","P"],
      },
      {
        title: "Cellular Automaton Simulator",
        duration: "Sept 2025 – Oct 2025",
        skills: ["React.js", "Java", "TypeScript", "Docker", "AWS"],
        media: [
          {
            img: "/toasthome.png",
            title: "Video Demo",
            link: "https://youtu.be/SDTYmDCTQvs?si=MzNTIQgJZVC0J_6x",
          },
          {
            img: "/toasthome.png",
            title: "Github",
            link: "https://github.com/XuanGiaHanNguyen/Cellular-Automaton-Visualization-Tool",
          },
        ],
      },
    ],
    "In Progress": [
      {
        title: "Blockchain-based Cryptocurrency",
        duration: "Dec 2024 – Present",
        skills: ["Go"],
        media: [
          {
            img: "/toasthome.png",
            title: "Github",
            link: "https://github.com/XuanGiaHanNguyen/Simplified-BlockChain",
          },
        ],
      },
    ],
  };

  const tabs = [
    { id: "Main", label: "Main", icon: TvMinimal },
    { id: "In Progress", label: "In Progress", icon: CalendarClock },
  ];

  return (
    <div className="w-full">
      {/* === Top Menu Bar === */}
      <div className="mb-2">
        <div className="flex items-center justify-between mb-6">
          {/* Tabs */}
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

          {/* Right Menu Buttons */}
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
      <div className="grid grid-cols-2 gap-4 mb-6">
        {experiences[activeTab].map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-5 bg-white hover:shadow-sm hover:border-gray-300 transition-all cursor-pointer"
          >
            <h2 className="text-base font-semibold text-neutral-800 mb-1">
              {item.title}
            </h2>
            <p className="text-sm text-neutral-600 mb-2">{item.duration}</p>

            {item.skills && item.skills.length > 0 && (
              <p className="text-sm text-neutral-700 font-medium mb-4">
                Skills:
                <span className="text-xs text-neutral-600 ml-1">
                  {item.skills.join(" · ")}
                </span>
              </p>
            )}

            {/* Media Section */}
            {item.media && item.media.length > 0 && (
              <div className="grid grid-cols-4 gap-3 mb-3">
                {item.media.map((m, i) => {
                  const isYouTube =
                    m.link && (m.link.includes("youtube") || m.link.includes("youtu.be"));
                  const isGitHub = m.link && m.link.includes("github");

                  return (
                    <div key={i}>
                      {m.link ? (
                        <a
                          href={m.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-full aspect-video rounded-md overflow-hidden border bg-neutral-100 border-gray-200 flex items-center justify-center">
                            {isYouTube ? (
                              <Youtube size={40} className="text-neutral-300" />
                            ) : isGitHub ? (
                              <Github size={40} className="text-neutral-300" />
                            ) : (
                              <ExternalLink size={40} className="text-neutral-400" />
                            )}
                          </div>
                          <p className="text-xs font-medium text-neutral-600 mt-1 text-center">
                            {m.title}
                          </p>
                        </a>
                      ) : (
                        <div>
                          <div className="relative w-full aspect-video rounded-md overflow-hidden border bg-neutral-100 border-gray-200 flex items-center justify-center">
                            <ImageIcon size={40} className="text-neutral-300" />
                          </div>
                          <p className="text-xs font-medium text-neutral-600 mt-1 text-center">
                            {m.title}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Contributors Section */}
            {item.contributors && item.contributors.length > 0 && (
              <div className="flex items-center mt-6">
                <p className="text-xs font-medium text-neutral-700 mr-2">
                  Other contributors
                </p>
                <div className="flex -space-x-2">
                  {item.contributors.map((letter, idx) => (
                    <div
                      key={idx}
                      className="w-7 h-7 rounded-full border-2 border-white bg-neutral-600 text-white flex items-center justify-center text-xs font-semibold"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
