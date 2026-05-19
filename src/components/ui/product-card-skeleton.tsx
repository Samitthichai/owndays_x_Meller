export default function ProductCardSkeleton() {
  return (
    <div className="w-full h-95.75 lg:h-113 bg-white flex flex-col px-3.75 lg:px-4.5 pt-3.5 pb-8 lg:pb-9.25 ">
      <div className="relative bg-gray-200 h-61.75 lg:h-73.25 overflow-hidden animate-pulse" />

      <div className="flex mt-4.25 justify-between">
        <div className="flex flex-col gap-2">
          <div className="h-8 lg:h-12 w-32 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>

        <div className="flex flex-col gap-3.75 justify-center items-end">
          <div className="flex items-center gap-1">
            <div className="w-7 h-7 lg:w-9.5 lg:h-9.5 rounded-full bg-gray-200" />
            <div className="w-7 h-7 lg:w-9.5 lg:h-9.5 rounded-full bg-gray-200" />
            <div className="w-7 h-7 lg:w-9.5 lg:h-9.5 rounded-full bg-gray-200" />
            <div className="w-7 h-7 lg:w-9.5 lg:h-9.5 rounded-full bg-gray-200" />
          </div>

          <div className="h-6 w-24 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
