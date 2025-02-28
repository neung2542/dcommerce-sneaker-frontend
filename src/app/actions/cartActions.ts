// app/actions/cartActions.ts
'use server';

import { cookies } from 'next/headers';
import { CartItem } from '@/types';
// import { useCart } from '@/ui/CartPopup';

export async function addToCart(shoe: CartItem, selectedSize: string | null) {
  if (!selectedSize) {
    throw new Error('Please select a size.');
  }
  
  // Get the current cart from cookies (or create a new one)
  const cart: CartItem[] = JSON.parse((await cookies()).get('cart')?.value || '[]');

  // Check if the item already exists in the cart
  const existingItemIndex = cart.findIndex(
    (item) => item.id === shoe.id && item.size === selectedSize
  );

  if (existingItemIndex !== -1) {
    // If the item exists, increment its quantity
    cart[existingItemIndex].quantity += 1;
  } else {
    // If the item doesn't exist, add it to the cart with a quantity of 1
    const newItem: CartItem = { ...shoe, size: selectedSize, quantity: 1 };
    cart.push(newItem);
  }

  // Save the updated cart back to cookies
  (await
        // Save the updated cart back to cookies
        cookies()).set('cart', JSON.stringify(cart), {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });


  return { success: true, message: 'Item added to cart!' };
}

export async function deleteCart() {
  // Remove the cart cookie
  (await
        // Remove the cart cookie
        cookies()).delete('cart');

  return { success: true, message: 'Cart deleted successfully!' };
}

export async function removeFromCart(itemId: string, size: string) {
  const cart: CartItem[] = JSON.parse((await cookies()).get('cart')?.value || '[]');

  // Filter out the item to remove
  const updatedCart = cart.filter(
    (item) => !(item.id === itemId && item.size === size)
  );

  // Save the updated cart back to cookies
  (await
        // Save the updated cart back to cookies
        cookies()).set('cart', JSON.stringify(updatedCart), {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  return { success: true, message: 'Item removed from cart!' };
}