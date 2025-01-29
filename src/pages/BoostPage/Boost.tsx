import { FC } from 'react';
import { useState } from 'react';

const categories = [
    { id: 'energy', name: 'Energy Modules'},
    { id: 'navigation', name: 'Navigation Systems'},
    { id: 'research', name: 'Research Technologies'},
    { id: 'defense', name: 'Defense Systems'},
  ];


  export const Boost: FC = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  
    return (
      <div className="pt-20 pb-20 p-4">
        <div className="grid grid-cols-1 gap-4 mb-6">
          {categories.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`p-4 rounded-lg w-full text-left transition-colors ${
                selectedCategory === id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
  
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-800 p-4 rounded-lg flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white">
                {i === 0 && 'SOLAR PANELS'}
                {i === 1 && 'THERMONUCLEAR REACTOR'}
                {i === 2 && 'QUANTUM BATTERY'}
                {i === 3 && 'ANTIMATTER GENERATOR'}
              </div>
              <div className="text-sm font-medium">Upgrade {i + 1}</div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                Upgrade
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }