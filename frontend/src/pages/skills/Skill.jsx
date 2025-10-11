import { useState } from 'react';
import { Plus, Layers, Award, Languages, SlidersHorizontal, ArrowUpDown, Zap, Search, Maximize2 } from 'lucide-react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('language');
  const [skills, setSkills] = useState({
    software: ['JavaScript', 'React', 'Python'],
    expertise: ['Web Development', 'UI/UX Design', 'Data Analysis'],
    language: ['English', 'French', 'Korean']
  });

  const tabs = [
    { id: 'software', label: 'Software', icon: Layers },
    { id: 'expertise', label: 'Expertise', icon: Award },
    { id: 'language', label: 'Language', icon: Languages }
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
        <div className="mb-8">
          {/* Tabs and Actions */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-500 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                <SlidersHorizontal size={18} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowUpDown size={18} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Zap size={18} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Search size={18} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Maximize2 size={18} className="text-gray-600" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors ml-2">
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
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all cursor-pointer group"
            >
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                {skill}
              </h3>
            </div>
          ))}
        </div>

        {/* New Page Button */}
        <button
          onClick={addNewSkill}
          className="w-full max-w-md border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600"
        >
          <Plus size={18} />
          <span className="text-sm font-medium">New page</span>
        </button>
      </div>
    </div>
  );
}