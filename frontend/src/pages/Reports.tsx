import React from 'react';

const Reports: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Reports & Analytics</h1>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-md font-semibold">Download CSV</button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-md font-semibold">Download PDF</button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Cost vs. Delay Correlation</h2>
          <div className="mt-4 h-64 bg-gray-200 rounded flex items-center justify-center">
            <p className="text-gray-500">Scatter Plot Placeholder</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Projects by Status</h2>
          <div className="mt-4 h-64 bg-gray-200 rounded flex items-center justify-center">
            <p className="text-gray-500">Pie Chart Placeholder</p>
          </div>
        </div>
      </div>

      {/* Project Comparison */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Project Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg bg-gray-50">
            <h3 className="font-bold text-gray-800">P001: Highway Expansion</h3>
            <p className="text-sm text-gray-600">Status: <span className="font-semibold">In Progress</span></p>
            <p className="text-sm text-red-500">Cost Overrun: +5%</p>
            <p className="text-sm text-orange-500">Delay: 1.5 months</p>
          </div>
          <div className="border p-4 rounded-lg bg-gray-50">
            <h3 className="font-bold text-gray-800">P003: Metro Line 3</h3>
            <p className="text-sm text-gray-600">Status: <span className="font-semibold">Delayed</span></p>
            <p className="text-sm text-red-500">Cost Overrun: +18%</p>
            <p className="text-sm text-orange-500">Delay: 4 months</p>
          </div>
          <div className="border p-4 rounded-lg bg-gray-50">
            <h3 className="font-bold text-gray-800">P002: Solar Power Plant</h3>
            <p className="text-sm text-gray-600">Status: <span className="font-semibold">Completed</span></p>
            <p className="text-sm text-green-600">Cost: On Budget</p>
            <p className="text-sm text-green-600">Timeline: On Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
