'use client';
import { useCart } from "@/ui/CartProvider";
// import { CartItem } from "@/types";
import Image from "next/image";
import { Trash } from "lucide-react";
import Link from "next/link";

const CartDisplay: React.FC = () => {
  const { items: cart, removeItem } = useCart();

  const handleRemoveItem = async (itemId: string, size: string) => {
    await removeItem(itemId, size);
  };

  return (
    <div className="global-container py-6">
      
      <div className="grid lg:grid-cols-3 grey-bg px-8 py-6 rounded-lg gap-6 ">
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-bold">Cart Items</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="py-6 w-full border-b border-gray-200">
                <Link
                  key={index}
                  href={
                    item.category_id == "1"
                      ? `/launch/${item.id}`
                      : `/upcoming/${item.id}`
                  }
                >
                  <div className="flex-col md:flex-row flex gap-4">
                    <figure className="flex flex-row bg-white rounded-sm shadow-md overflow-hidden item-center justify-center">
                      <Image
                        src={item.image_url || ""}
                        alt={item.name || ""}
                        className="h-20 w-20 object-cover"
                        width={500}
                        height={500}
                      />
                    </figure>
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-2lg font-bold">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.sub_desc}</p>
                      </div>
                      <div className="flex flex-col gap-3 items-end">
                        <p className="text-2lg font-bold">
                          ${(item.price ?? 0) * item.quantity}
                        </p>
                        <div className="flex gap-2">
                          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 duration-200 ease-in-out">
                            <Trash
                              className="cursor-pointer"
                              onClick={() => handleRemoveItem(item.id!, item.size)}
                            />
                          </div>
                          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                            <span>{item.quantity}</span>
                          </div>
                          {/* <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 duration-200 ease-in-out">
                            <Plus className="cursor-pointer" />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="md:px-6">
            <h2 className="text-4xl font-bold">Total</h2>
            <div className="py-6 flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="text-2xl">Subtotal</p>
                <p className="text-2xl">
                  $
                  {cart.reduce(
                    (acc, item) => acc + item.price! * item.quantity,
                    0
                  )}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-2xl">Shipping Cost</p>
                <p className="text-2xl">0</p>
              </div>
            </div>
            <div className="flex justify-between border-t border-gray-200 py-6 border-b font-bold">
              <p className="text-2xl">Total</p>
              <p className="text-2xl">
                $
                {cart.reduce(
                  (acc, item) => acc + item.price! * item.quantity,
                  0
                )}
              </p>
            </div>
            <div className="py-6">
              <Link className="bg-black text-white py-5 px-8 rounded-3xl w-full text-2xl hover:bg-gray-800 duration-300 ease-in-out" href="/checkout">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDisplay;