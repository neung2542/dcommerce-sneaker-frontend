import { Shoe } from "@/types";
import Link from "next/link";
import Image from "next/image";

type ShoeCardListProps = {
  shoes: Shoe[];
};

const ShoeCardList = ({ shoes }: ShoeCardListProps) => {
  return (
    <div className="py-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6 md:px-12">
        {shoes.map((shoe, index) => (
          <Link key={index} href={shoe.category_id == "1" ? `/launch/${shoe.id}` : `/upcoming/${shoe.id}`}>
            <div className="bg-white rounded-lg shadow-md">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={shoe.image_url ?? ''}
                  alt={shoe.name ?? ''}
                  width={500}
                  height={500}
                  className="object-fill w-full h-full rounded-lg absolute top-0 left-0"
                />
              </div>
            </div>
            <div className="mt-8 mb-12 relative">
              <div className="w-3/4 pl-3">
                <p className="text-sm text-gray-500">{shoe.sub_desc}</p>
                <h2 className="text-lg font-semibold">{shoe.name}</h2>
              </div>
              <div className="absolute right-0 top-0">
                {shoe.category_id == "1" ? (
                  <button className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800">
                    Buy
                  </button>
                ) : (
                  <button
                    className="bg-gray-300 text-gray-600 rounded-full px-4 py-2 pointer-events-none"
                    disabled
                  >
                    Soon
                  </button>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShoeCardList;
