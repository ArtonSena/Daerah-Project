const LoaderComp = ({ text = "Loading data..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      
      <div className="relative">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-20 animate-ping"></div>
      </div>

      <p className="text-gray-400 animate-pulse text-sm">
        {text}
      </p>
    </div>
  );
};

export default LoaderComp;