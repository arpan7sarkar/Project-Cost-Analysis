import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Dummy data - in a real app, you'd fetch this based on the ID
const dummyProject = {
  id: 'P001',
  name: 'Highway Expansion',
  type: 'Infrastructure',
  cost: 1200,
  duration: 24,
  status: 'In Progress',
  summary: 'Expansion of a 200km stretch of national highway to 6 lanes, including new bridges and toll plazas.',
};

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');

  // In a real app, you would fetch project data based on the id
  const project = { ...dummyProject, id };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'cost':
        return <div className="mt-4 p-4 bg-gray-50 rounded-lg">Placeholder for Cost Breakdown chart or text.</div>;
      case 'timeline':
        return <div className="mt-4 p-4 bg-gray-50 rounded-lg">Placeholder for a static Gantt chart image or component.</div>;
      case 'recommendations':
        return <div className="mt-4 p-4 bg-gray-50 rounded-lg">AI Suggestion Placeholder: Consider re-allocating resources from task A to B to mitigate potential delays.</div>;
      case 'overview':
      default:
        return (
          <div className="mt-4 space-y-2">
            <p><span className="font-semibold">ID:</span> {project.id}</p>
            <p><span className="font-semibold">Type:</span> {project.type}</p>
            <p><span className="font-semibold">Budget:</span> ₹{project.cost} Cr</p>
            <p><span className="font-semibold">Duration:</span> {project.duration} Months</p>
            <p><span className="font-semibold">Status:</span> <span className="text-yellow-600 font-bold">{project.status}</span></p>
            <p className="mt-4">{project.summary}</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">{project.name}</h1>
        <Link to="/projects" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-md">
          &larr; Back to Projects
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button onClick={() => setActiveTab('overview')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Overview
            </button>
            <button onClick={() => setActiveTab('cost')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'cost' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Cost Breakdown
            </button>
            <button onClick={() => setActiveTab('timeline')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'timeline' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Timeline Progress
            </button>
            <button onClick={() => setActiveTab('recommendations')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'recommendations' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Recommendations
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProjectDetails;
