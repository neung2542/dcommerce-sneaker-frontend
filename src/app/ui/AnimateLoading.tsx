

const AnimateLoading = () => {



  return (
    <div className={""}>
      {/* {showSkeleton ? <SkeletonCard /> : <LoadingSpinner />} */}
      <SkeletonCard />
    </div>
  );
};

const SkeletonCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-6 md:px-12">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-lg bg-gray-300 h-48 w-full"></div>
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-lg bg-gray-300 h-48 w-full"></div>
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-lg bg-gray-300 h-48 w-full"></div>
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-lg bg-gray-300 h-48 w-full"></div>
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-lg bg-gray-300 h-48 w-full"></div>
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-lg bg-gray-300 h-48 w-full"></div>
      </div>
    </div>
  );
};

// const LoadingSpinner = () => {
//   return (
//     <div className="flex justify-center items-center h-full">
//       <div className="loader ease-linear rounded-full border-4 border-t-4 border-black h-12 w-12"></div>
//     </div>
//   );
// };

export default AnimateLoading;
