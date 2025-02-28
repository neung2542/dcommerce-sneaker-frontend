// src/types.ts

export type Shoe = {
    id?: string;
    name?: string;
    release_date?: string;
    category_id?: string;
    sub_desc?: string;
    desc?: string;
    price?: number;
    image_url?: string;
  };

  export type CartItem = Shoe & {
    size: string; // Size of the shoe (e.g., "US 9")
    quantity: number; // Quantity of the item in the cart
  };