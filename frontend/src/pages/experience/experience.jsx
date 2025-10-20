import { useState } from 'react';
import { Plus, Layers, Database, Languages, SlidersHorizontal, ArrowUpDown, Zap, Search, Maximize2, Code2, FileCode, Palette, Wrench, Cloud, Braces, Terminal, Box, GitBranch, Server, Cpu, Lock, Bolt } from 'lucide-react';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('languages');
  const [skills, setSkills] = useState({
    languages: ['Python', 'Go'],
    frameworks: ['React', 'Next.js', 'Node.js', 'Express.js', 'Django', 'FastAPI', 'Spring Boot', 'TensorFlow', 'Tailwind CSS'],
  });

  // Icon mapping for skills
  const getSkillIcon = (skill) => {
    const iconMap = {
      // Languages
      'Python': Terminal,
      'Go': Code2,
      'JavaScript': Code2,
      'TypeScript': FileCode,
      'C': Braces,
      'Swift': Code2,
      'HTML/CSS': Palette,
      'Java': Code2,
      // Frameworks
      'React': Layers,
      'Next.js': Layers,
      'Node.js': Server,
      'Express.js': Server,
      'Django': Server,
      'FastAPI': Bolt,
      'Spring Boot': Server,
      'TensorFlow': Cpu,
      'Tailwind CSS': Palette,
    
    };
    return iconMap[skill] || Wrench;
  };

  const tabs = [
    { id: 'languages', label: 'Languages', icon: Languages },
    { id: 'frameworks', label: 'Frameworks', icon: Layers },
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
                        ? 'bg-neutral-200 text-neutral-700'
                        : 'text-neutral-500 hover:bg-neutral-200'
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
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-70">
                  <path d="M6 2V10M2 6H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {skills[activeTab].map((skill, index) => {
            const SkillIcon = getSkillIcon(skill);
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-2 px-6 shadow-sm hover:bg-neutral-50 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <SkillIcon size={18} className="text-neutral-600" />
                  <h3 className="text-md font-semibold text-neutral-800">
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