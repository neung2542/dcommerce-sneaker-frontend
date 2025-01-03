import React from "react";
import { Suspense } from "react";
import Loading from "@/loading";
import ShoeCardList from "@/ui/ShoeCardList";
import { Shoe } from "@/types";

async function fetchData(category: string): Promise<Shoe[]> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch(`https://sneaker-store-api-6qe0.onrender.com/api/sneakers/${category}`);
      const data = await res.json();
      resolve(data);
    }, 3000); // Simulate a 3-second delay
  });
}
// { params }: { params: Promise<{ shoe: string }> }
const page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const category = (await params).category == "launch" ? "1" : "2";

  const shoes = await fetchData(category);

  return (
    <div className="">
      <Suspense fallback={<Loading />}>
        <ShoeCardList shoes={shoes} />
      </Suspense>
    </div>
  );
};

export default page;
