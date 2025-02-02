"use client";

import { useState } from "react";
import { TabContent } from "./technology-content";

const tabs = [
  "Customer focused",
  "Agile and adaptable",
  "Compliance ready",
  "Secure and safe",
];

export function Technology() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-blue-600 font-medium">TECHNOLOGY BUILT FOR YOU</h2>
        <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">
          The future of finance
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block mb-8">
        <div className="w-full flex text-center">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => handleTabChange(index)}
              className={`w-full px-6 py-2.5 rounded-full font-semibold text-blue-500 transition-colors ${
                activeTab === index ? "bg-blue-100" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div className="relative rounded-2xl technology-item">
        <TabContent activeTab={activeTab} onSlideChange={handleTabChange} />
      </div>
    </div>
  );
}

export default Technology;
