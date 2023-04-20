// Plans component
export default function Plan(): JSX.Element {
  return (
    <div className="max-w-7xl m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <PlanLeftSide />
      <PlanRightSide />
    </div>
  );
}

// right side of component
function PlanRightSide(): JSX.Element {
  return (
    <div className="flex flex-col h-full justify-center">
      <span className="text-5xl md:text-6xl font-bold">
        Plan Your Next Trip
      </span>
      <p className="text-2xl py-6">
        Hawaii is a state in the Western United States, about 2,000 miles from
        the U.S. mainland in the Pacific Ocean. It is the only U.S. state
        outside North America, the only state that is an archipelago, and the
        only state in the tropics.
      </p>
      <p className="pb-6">
        Hawaii, constituent state of the United States of America. Hawaii
        (Hawaiian: Hawai‘i) became the 50th U.S. state on August 21, 1959.
        Hawaii is a group of volcanic islands in the central Pacific Ocean. The
        islands lie 2,397 miles (3,857 km) from San Francisco, California, to
        the east and 5,293 miles (8,516 km) from Manila, in the Philippines, to
        the west. The capital is Honolulu, located on the island of Oahu.
      </p>
      <div>
        <button
          type="button"
          className="border-black sm:mr-4 m-2 hover:shadow-xl"
        >
          Learn More
        </button>
        <button
          type="button"
          className="bg-black text-white border-black hover:shadow-xl"
        >
          Book Trip
        </button>
      </div>
    </div>
  );
}

// left side of component
function PlanLeftSide(): JSX.Element {
  return (
    <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
      <img
        alt="/"
        className="row-span-3 object-cover w-full h-full p-2"
        loading="lazy"
        src="https://source.unsplash.com/random/2560x1440/?Hawaii"
      />
      <img
        alt="/"
        className="row-span-2 object-cover w-full h-full p-2"
        loading="lazy"
        src="https://source.unsplash.com/random/2560x1440/?Paradise"
      />
      <img
        alt="/"
        className="row-span-2 object-cover w-full h-full p-2"
        loading="lazy"
        src="https://source.unsplash.com/random/2560x1440/?Maldives"
      />
      <img
        alt="/"
        className="row-span-3 object-cover w-full h-full p-2"
        loading="lazy"
        src="https://source.unsplash.com/random/2560x1440/?island"
      />
      <img
        alt="/"
        className="row-span-2 object-cover w-full h-full p-2"
        loading="lazy"
        src="https://source.unsplash.com/random/2560x1440/?resort"
      />
    </div>
  );
}
