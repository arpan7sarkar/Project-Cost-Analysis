import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-6 flex-shrink-0">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Terrain</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><input type="checkbox" id="plains" className="mr-2" /><label htmlFor="plains">Plains</label></li>
            <li><input type="checkbox" id="hilly" className="mr-2" /><label htmlFor="hilly">Hilly</label></li>
            <li><input type="checkbox" id="coastal" className="mr-2" /><label htmlFor="coastal">Coastal</label></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Vendor Rating</h3>
          <input type="range" min="1" max="5" defaultValue="3" className="w-full" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Delay Risk</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><input type="radio" name="delayRisk" id="high" className="mr-2" /><label htmlFor="high">High</label></li>
            <li><input type="radio" name="delayRisk" id="medium" className="mr-2" /><label htmlFor="medium">Medium</label></li>
            <li><input type="radio" name="delayRisk" id="low" className="mr-2" /><label htmlFor="low">Low</label></li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
