import { Dispatch, SetStateAction } from 'react';

interface Extra {
  name: string;
  price: number;
}

interface FoodExtrasProps {
  extras: Extra[];
  selectedExtras: string[];
  setSelectedOptions: Dispatch<SetStateAction<{
    spiceLevel: string;
    extras: string[];
  }>>;
}

export function FoodExtras({ extras, selectedExtras, setSelectedOptions }: FoodExtrasProps) {
  const handleExtraToggle = (extra: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      extras: prev.extras.includes(extra)
        ? prev.extras.filter(e => e !== extra)
        : [...prev.extras, extra]
    }));
  };

  return (
    <div className="border-b pb-4">
      <h3 className="text-lg font-semibold mb-3">Extras</h3>
      <div className="space-y-2">
        {extras.map(extra => (
          <div key={extra.name} className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={selectedExtras.includes(extra.name)}
                onChange={() => handleExtraToggle(extra.name)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2">{extra.name}</span>
            </label>
            <span className="text-gray-600">+${extra.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}