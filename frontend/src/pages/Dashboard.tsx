import React from 'react';
import Card from '../components/Card';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Projects" value="150" />
        <Card title="Avg Delay" value="22 Days" />
        <Card title="Cost Overrun" value="12%" />
        <Card title="On-Time Completion" value="78%" />
      </div>

      {/* Chart Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Project Delay Trends</h2>
          <div className="mt-4 h-64 bg-gray-200 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart Placeholder</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Cost Overrun Distribution</h2>
          <div className="mt-4 h-64 bg-gray-200 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
