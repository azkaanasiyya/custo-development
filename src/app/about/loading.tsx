export default function Loading() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-6"></div>
      
      <div className="text-xl font-light animate-pulse">
        Loading...
      </div>
    </div>
  );
}
