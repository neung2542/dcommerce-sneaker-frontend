'use client';

import { useEffect, useState } from 'react';
import { useCart } from "@/ui/CartProvider";

export function CartCounter() {
  const { items } = useCart();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Calculate the total count of items in the cart
    const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
    setCount(totalCount);
  }, [items]);

  if (count === 0) return null;

  return (
    <div className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
      {count}
    </div>
  );
}