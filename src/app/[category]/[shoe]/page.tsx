import { Shoe } from "@/types";
import Cart from "@/ui/cart";
// import Image from "next/image";
// import { getCategoryLabel } from "@/utils/categoryMapper";
import ShoeSwipe from "@/ui/ShoeSwipe";
type Params = Promise<{ shoe: string }>

const page = async (props: { params: Params }) => {
  // const shoeId = (await params).shoe;
  const params = await props.params;
  const shoeId = params.shoe;
  // console.log(params);
  
  const res = await fetch(
    `https://sneaker-store-api-6qe0.onrender.com/api/sneakers/product/${shoeId}`
  );
  const shoe: Shoe = await res.json();

  return (
    <div className="py-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 px-12">
        <div className="col-span-7">
          {
            shoe.image_url &&
            <ShoeSwipe
              image={shoe.image_url}
              name={shoe.name ?? ''}
            />
          }
          {/* <div className="grid grid-cols-7 gap-3">
            <div className="col-span-1">
                test
            </div>
            <div className="col-span-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={shoe.image_url ?? ''} alt={shoe.name ?? ''} className="w-full" width={500}
                  height={500} />
              </div>
            </div>
          </div> */}
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-4">
          <div className="px-3 grid gap-3">
            <h1 className="text-2xl font-bold">{shoe.name}</h1>
            <p className="text-sm font-semibold">{shoe.sub_desc}</p>
            <p className="text-lg font-semibold">${shoe.price}</p>
            <p className="text-xl ">{shoe.desc}</p>
           {/* <div className="grid grid-cols-2 gap-1 mb-6">
              {sizes.map((size) => (
                <button
                  key={size}
                  className="bg-white rounded-lg border px-4 py-2 hover:bg-gray-300 border-gray-300 h-12 duration-300 ease-in-out"
                >
                  {size}
                </button>
              ))}
            </div>
            {shoe.category_id == "1" ? (
              <button className="bg-black text-white rounded-full px-8 py-6 hover:bg-gray-800">
                ${shoe.price}
              </button>
            ) : (
              <button
                className="bg-gray-300 text-gray-600 rounded-full px-8 py-6 pointer-events-none"
                disabled
              >
                Soon
              </button>
            )} */}
            <Cart shoe={shoe} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
