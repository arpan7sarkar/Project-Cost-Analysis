import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table';

const dummyProjects = [
  { id: 'P001', name: 'Highway Expansion', type: 'Infrastructure', cost: 1200, duration: 24, status: 'In Progress' },
  { id: 'P002', name: 'Solar Power Plant', type: 'Energy', cost: 800, duration: 18, status: 'Completed' },
  { id: 'P003', name: 'Metro Line 3', type: 'Transport', cost: 2500, duration: 36, status: 'Delayed' },
  { id: 'P004', name: 'Smart City Grid', type: 'Technology', cost: 1500, duration: 30, status: 'On Hold' },
  { id: 'P005', name: 'Dam Construction', type: 'Infrastructure', cost: 3000, duration: 48, status: 'In Progress' },
  { id: 'P006', name: 'Wind Farm', type: 'Energy', cost: 950, duration: 20, status: 'Completed' },
  { id: 'P007', name: 'Airport Modernization', type: 'Transport', cost: 1800, duration: 40, status: 'In Progress' },
  { id: 'P008', name: 'National Data Center', type: 'Technology', cost: 2200, duration: 28, status: 'Completed' },
  { id: 'P009', name: 'Bridge Over River', type: 'Infrastructure', cost: 700, duration: 16, status: 'Delayed' },
  { id: 'P010', name: 'Rural Electrification', type: 'Energy', cost: 500, duration: 14, status: 'Completed' },
];

const columns = [
  { header: 'Project ID', accessor: 'id' as const },
  { header: 'Name', accessor: 'name' as const },
  { header: 'Type', accessor: 'type' as const },
  { header: 'Cost (₹ Cr)', accessor: 'cost' as const },
  { header: 'Duration (Months)', accessor: 'duration' as const },
  { header: 'Status', accessor: 'status' as const },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const handleRowClick = (project: typeof dummyProjects[0]) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Projects</h1>

      {/* Projects Table */}
      <div className="overflow-x">
        <Table columns={columns} data={dummyProjects} onRowClick={handleRowClick} />
      </div>
    </div>
  );
};

export default Projects;

