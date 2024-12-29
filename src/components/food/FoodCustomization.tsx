import { Dispatch, SetStateAction } from 'react';

interface FoodCustomizationProps {
  spiceLevels: string[];
  selectedSpiceLevel: string;
  setSelectedOptions: Dispatch<SetStateAction<{
    spiceLevel: string;
    extras: string[];
  }>>;
}

export function FoodCustomization({ 
  spiceLevels, 
  selectedSpiceLevel, 
  setSelectedOptions 
}: FoodCustomizationProps) {
  return (
    <div className="border-t border-b py-4">
      <h3 className="text-lg font-semibold mb-3">Spice Level</h3>
      <div className="flex space-x-4">
        {spiceLevels.map(level => (
          <button
            key={level}
            onClick={() => setSelectedOptions(prev => ({ ...prev, spiceLevel: level }))}
            className={`px-4 py-2 rounded-full border ${
              selectedSpiceLevel === level
                ? 'border-purple-600 bg-purple-50 text-purple-600'
                : 'border-gray-300 text-gray-600'
            }`}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}