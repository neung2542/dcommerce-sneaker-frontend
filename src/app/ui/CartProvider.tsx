"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { CartItem } from "@/types"; // Assuming you have a CartItem type defined
import { addToCart, removeFromCart } from "@/actions/cartActions"; // Import your cart actions
import { CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Cookies from 'js-cookie';

// Define the shape of the cart context
interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string, size: string) => void;
}

// Create the cart context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart provider component
const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

   useEffect(() => {
    // Load cart items from cookies on mount
    const loadCartItems = () => {
      const cartItems = JSON.parse(Cookies.get('cart') || '[]');
      setItems(cartItems);
    };
    loadCartItems();
  }, []);

  const addItem = async (item: CartItem) => {
    await addToCart(item, item.size);
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (i) => i.id === item.id && i.size === item.size
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      }
      return [...prevItems, item];
    });
    setPopupVisible(true);
    // setTimeout(() => setPopupVisible(false), 3000); // Hide popup after 3 seconds
  };

  const removeItem = async (itemId: string, size: string) => {
    await removeFromCart(itemId, size);
    setItems(items.filter((item) => item.id !== itemId || item.size !== size));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
      {isPopupVisible && <CartPopup onClose={() => setPopupVisible(false)} />}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Cart popup component
const CartPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { items } = useCart();
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={popupRef}
      className="cart-popup fixed top-[100px] right-10 bg-white p-4 shadow-lg rounded-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="text-green-500" size={24} />
          <h2 className="text-lg font-bold">Item Added to Cart</h2>
        </div>
        <XCircle
          className="text-red-500 cursor-pointer"
          size={24}
          onClick={onClose}
        />
      </div>
      <ul className="mb-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-4 mb-2">
            <Image
              src={item.image_url || ""}
              alt={item.name || ""}
              className="h-12 w-12 object-cover rounded"
              width={48}
              height={48}
            />
            <div className="flex flex-col">
              <span>
                {item.name} - {item.size}
              </span>
              <span>Quantity: {item.quantity}</span>
              <span>${(item.price ?? 0) * item.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Link href="/cart">
          <button className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800">
            View Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

// Export the CartProvider to be used in the main application
export { CartProvider, useCart, CartPopup };
