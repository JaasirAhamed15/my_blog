export default function Hero() {
  return (
    <div className="flex items-center justify-center w-full m-4 px-2 md:px-0">
      <div className="w-full max-w-4xl relative rounded-md overflow-hidden">
        <img
          src="hero.png"
          alt="hero image"
          className="w-full h-48 md:h-[600px] object-cover"
          sizes="100vw"
        />
        <div className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2 dark:bg-[#242535] p-4 md:p-6 rounded-lg shadow-lg w-[90%] md:w-[60%] max-w-2xl">
          <p className="text-xs bg-blue-700 w-fit py-1 px-2 text-white rounded-md mb-1">
            Technology
          </p>
          <h2 className="text-base text-white md:text-3xl font-bold">
            The Impact of Technology on the Workplace: How Technology is Changing
          </h2>
          <p className="text-sm text-white mt-4">
            Jaasir Ahamed |30 June 2025
          </p>
        </div>
        {/* Mobile overlay */}
        <div className="block md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#242535cc] p-2 rounded-lg shadow max-w-[95%] w-[95%]">
          <h2 className="text-sm text-white font-bold">
            The Impact of Technology on the Workplace
          </h2>
        </div>
      </div>
    </div>
  );
}