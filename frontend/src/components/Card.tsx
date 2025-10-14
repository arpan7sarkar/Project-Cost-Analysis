import React from 'react';

interface CardProps {
  title: string;
  value: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ title, value, description }) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg border border-gray-200">
      <h3 className="text-gray-600 text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
      {description && <p className="text-gray-500 text-sm mt-1">{description}</p>}
    </div>
  );
};

export default Card;
