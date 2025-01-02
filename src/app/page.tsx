// import Image from "next/image";
// import Navtab from "@/nav/Navtab";
import { Suspense } from "react";
import Loading from "./loading";
import ShoeCardList from "./ui/ShoeCardList";
// import AnimateLoading from "./ui/AnimateLoading";
import { Shoe } from "./types";

async function fetchData(): Promise<Shoe[]> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch("https://sneaker-store-api-6qe0.onrender.com/api/sneakers");
      const data = await res.json();
      resolve(data);
    }, 0); // Simulate a 3-second delay
  });
}

const DataComponent = async () => {
  const data = await fetchData();
  return <ShoeCardList shoes={data} />;
};


export default async function Home() {
  return (
    <div className="py-6 md:py-12 ">
      <Suspense fallback={<Loading />}>
        <DataComponent />
      </Suspense>
    </div>
  );
}
