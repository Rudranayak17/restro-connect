import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (delta: number) => void;
}

export function QuantitySelector({ quantity, onQuantityChange }: QuantitySelectorProps) {
  return (
    <div className="flex items-center border rounded-lg">
      <button
        onClick={() => onQuantityChange(-1)}
        className="p-2 hover:bg-gray-100"
      >
        <Minus className="w-5 h-5" />
      </button>
      <span className="px-4 py-2 border-x">{quantity}</span>
      <button
        onClick={() => onQuantityChange(1)}
        className="p-2 hover:bg-gray-100"
      >
        <Plus className="w-5 h-5" />
      </button>
    </div>
  );
}