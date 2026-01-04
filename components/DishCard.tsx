
import React from 'react';
import { Dish } from '../types';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group transition-all duration-300 hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#4a3728]">{dish.name}</h3>
          <span className="text-sm font-semibold text-orange-700 bg-orange-50 px-2 py-1 rounded">
            {dish.price}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {dish.description}
        </p>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {dish.ingredients.slice(0, 3).map((ing, i) => (
              <span key={i} className="text-[10px] uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                {ing}
              </span>
            ))}
          </div>
          <p className="text-xs italic text-gray-400">
            Flavor: {dish.flavorProfile}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
