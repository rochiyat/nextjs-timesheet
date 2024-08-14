'use client';

import { useState } from 'react';
import CreateTaskModule from "@/app/modules/CreateTaskModule";

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Tabs</h1>
      <div className="mb-4 flex space-x-10 p-2 bg-black rounded-lg shadow-md">
        <button
          onClick={() => setActiveTab(1)}
          className={`flex-1 py-4 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            activeTab === 1 ? "bg-blue-600 text-white" : ""
          }`}
        >
          Create Task
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            activeTab === 2 ? "bg-blue-600 text-white" : ""
          }`}
        >
          Edit Task
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            activeTab === 3 ? "bg-blue-600 text-white" : ""
          }`}
        >
          Get Week
        </button>
        <button
          onClick={() => setActiveTab(4)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            activeTab === 4 ? "bg-blue-600 text-white" : ""
          }`}
        >
          Check Month
        </button>
      </div>

      <div className="transition-all duration-300 bg-amber-50 p-64 rounded-lg shadow-md border-l-4 border-blue-600">
        {activeTab === 1 && <CreateTaskModule />}
        {activeTab === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Tab 2 Content</h2>
            <p className="text-gray-700">Content for Tab 2.</p>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Tab 3 Content</h2>
            <p className="text-gray-700">Content for Tab 3.</p>
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Tab 4 Content</h2>
            <p className="text-gray-700">Content for Tab 4.</p>
          </div>
        )}
      </div>
    </main>
  );
}
