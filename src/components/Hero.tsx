// Hero component
export default function Hero(): JSX.Element {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://source.unsplash.com/random/2560x1440/?beach"
        loading="lazy"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <HeroContent />
      </div>
    </div>
  );
}

// text inside of hero
function HeroContent(): JSX.Element {
  return (
    <div className="md:left-[10%] max-w-6xl m-auto absolute p-4">
      <p>Aloha</p>
      <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
        Welcome to Hawaii
      </h1>
      <button type="button" className="bg-white text-black m-1 font-bold">
        Book a trip
      </button>
    </div>
  );
}
