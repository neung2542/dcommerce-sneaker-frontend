import { Shoe } from "@/types";
// import { getCategoryLabel } from "@/utils/categoryMapper";

const page = async ({ params }: { params: { shoe: string } }) => {
  const shoeId = (await params).shoe;
  const res = await fetch(
    `https://sneaker-store-api-6qe0.onrender.com/api/sneakers/product/${shoeId}`
  );
  const shoe: Shoe = await res.json();

  return (
    <div className="py-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 px-12">
        <div className="col-span-7">
          <div className="">
            <div className="">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={shoe.image_url} alt={shoe.name} className="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-4">
          <div className="px-3 grid gap-3">
            <h1 className="text-2xl font-bold">{shoe.name}</h1>
            <p className="text-sm font-semibold">{shoe.sub_desc}</p>
            <p className="text-xl font-semibold">{shoe.desc}</p>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
