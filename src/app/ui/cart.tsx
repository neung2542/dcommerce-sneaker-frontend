'use client';

import React from 'react';
import { Shoe } from '@/types';
import { useState } from 'react';
import { useCart } from '@/ui/CartProvider';

interface CartProps {
  shoe: Shoe;
}

const Cart: React.FC<CartProps> = ({ shoe }) => {
  const sizes = [
    'US 7',
    'US 7.5',
    'US 8',
    'US 8.5',
    'US 9',
    'US 9.5',
    'US 10',
    'US 10.5',
    'US 11',
    'US 11.5',
    'US 12',
  ];

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addItem } = useCart();

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }

    try {
      // const result = await addToCart({
      //     ...shoe, quantity: 1,
      //     size: ''
      // }, selectedSize);
      const newItem = { ...shoe, size: selectedSize, quantity: 1 };
      addItem(newItem);
      // alert(result.message); // Show success message
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message); // Show error message
      } else {
        alert('An unknown error occurred.');
      }
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-1 mb-6">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`rounded-lg border px-4 py-2 h-12 duration-300 ease-in-out ${
              selectedSize === size
                ? 'bg-gray-300 border-gray-500'
                : 'bg-white border-gray-300 hover:bg-gray-300'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      {shoe.category_id == '1' ? (
        <button
          onClick={handleAddToCart}
          className="bg-black text-white rounded-full px-8 py-6 hover:bg-gray-800 w-full"
        >
          ${shoe.price}
        </button>
      ) : (
        <button
          className="bg-gray-300 text-gray-600 rounded-full px-8 py-6 pointer-events-none w-full"
          disabled
        >
          Soon
        </button>
      )}
    </div>
  );
};

export default Cart;