import { useState } from 'react';
import { Plus, Layers, Database, Languages, SlidersHorizontal, ArrowUpDown, Zap, Search, Maximize2 } from 'lucide-react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('language');
  const [skills, setSkills] = useState({
    language: ['JavaScript', 'Python', 'TypeScript', 'Go', 'C', 'Swift', 'HTML/CSS', 'Java'],
    
    framework: ['Web Development', 'UI/UX Design', 'Data Analysis'],
    tools: ['English', 'French', 'Korean'],
    clouds: ['Web Development', 'UI/UX Design', 'Data Analysis']
  });

  const tabs = [
    { id: 'language', label: 'Language', icon: Languages },
    { id: 'framework', label: 'Framework', icon: Layers },
    { id: 'tools', label: 'Tools', icon: Database },
    { id: 'clouds', label: 'Cloud Services', icon: Database },
  ];

  const addNewSkill = () => {
    const newSkill = prompt('Enter new skill:');
    if (newSkill && newSkill.trim()) {
      setSkills(prev => ({
        ...prev,
        [activeTab]: [...prev[activeTab], newSkill.trim()]
      }));
    }
  };

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
              <button className="flex items-center gap-1 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors ml-2">
                New
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-70">
                  <path d="M6 2V10M2 6H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {skills[activeTab].map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-2 px-6 shadow-sm hover:bg-neutral-50 transition-all cursor-pointer group"
            >
              <h3 className="text-lg font-medium">
                {skill}
              </h3>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}