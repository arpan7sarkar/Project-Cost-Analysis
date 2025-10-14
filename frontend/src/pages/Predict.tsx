import React, { useState } from 'react';

const Predict: React.FC = () => {
  const [showResult, setShowResult] = useState(false);

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Predict Cost & Timeline</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Prediction Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handlePredict} className="space-y-6">
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">Project Type</label>
              <select id="projectType" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                <option>Infrastructure</option>
                <option>Energy</option>
                <option>Technology</option>
                <option>Transport</option>
              </select>
            </div>

            <div>
              <label htmlFor="terrain" className="block text-sm font-medium text-gray-700">Terrain</label>
              <select id="terrain" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                <option>Plains</option>
                <option>Hilly</option>
                <option>Coastal</option>
                <option>Desert</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Estimated Budget (₹ Cr)</label>
              <input type="number" id="budget" defaultValue="1000" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <div>
              <label htmlFor="manpower" className="block text-sm font-medium text-gray-700">Manpower</label>
              <input type="number" id="manpower" defaultValue="500" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
            </div>

            <div>
              <label htmlFor="vendorPerf" className="block text-sm font-medium text-gray-700">Vendor Performance (1-10)</label>
              <input type="range" id="vendorPerf" min="1" max="10" defaultValue="7" className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            </div>

            <button type="submit" className="w-full bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 shadow-md font-semibold">
              Predict
            </button>
          </form>
        </div>

        {/* Prediction Result */}
        <div className="flex items-center justify-center">
          {showResult && (
            <div className="bg-white p-8 rounded-lg shadow-lg w-full text-center animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Prediction Results</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">Predicted Cost Overrun</p>
                  <p className="text-2xl font-bold text-red-500">+12%</p>
                </div>
                <div>
                  <p className="text-gray-600">Predicted Delay</p>
                  <p className="text-2xl font-bold text-red-500">+2.5 months</p>
                </div>
                <div>
                  <p className="text-gray-600">Risk Level</p>
                  <p className="text-2xl font-bold text-orange-500">Moderate</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Predict;
