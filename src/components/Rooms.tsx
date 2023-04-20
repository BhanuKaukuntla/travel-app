import axios from "axios";
import ListCard from "./ListCard";

// Rooms component

const data = [
  {
    name: "Adventure",
    activities: [
      {
        title: "Surfing in the waves of Waikiki",
      },
      {
        title: "Hiking the Diamond Head trail in Oahu",
      },
      {
        title: "Exploring Hawaii Volcanoes National Park",
      },
      {
        title: "Snorkeling at the beaches of Maui",
      },
      {
        title:
          "Taking a helicopter tour to see the active volcanoes and waterfalls",
      },
    ],
  },
  {
    name: "Culinary",
    activities: [
      {
        title: "Taking a Hawaiian cooking class",
      },
      {
        title: "Trying Poke at a local restaurant",
      },
      {
        title: "Going on a coffee tasting tour in the Big Island",
      },
      {
        title: "Attending a Hawaiian luau dinner show",
      },
      {
        title:
          "Visiting a local market to taste exotic fruits and other local products",
      },
    ],
  },
  {
    name: "Eco-tourism",
    activities: [
      {
        title: "Hiking in the lush forests of the Big Island",
      },
      {
        title: "Kayaking through the mangroves of Maui",
      },
      {
        title: "Whale watching during the winter months",
      },
      {
        title: "Snorkeling with sea turtles at the Turtle Bay on Oahu",
      },
      {
        title:
          "Visiting the Akaka Falls State Park on the Big Island to see the stunning waterfall",
      },
    ],
  },
  {
    name: "Family",
    activities: [
      {
        title: "Visiting the Waikiki Aquarium in Oahu",
      },
      {
        title: "Going on a scenic drive to see the Road to Hana on Maui",
      },
      {
        title: "Exploring the Polynesian Cultural Center on Oahu",
      },
      {
        title: "Taking a sunset dinner cruise along the coast of Maui",
      },
      {
        title: "Attending a hula show or a Hawaiian music concert as a family",
      },
    ],
  },
  {
    name: "Sport",
    activities: [
      {
        title: "Playing golf on one of Hawaii's world-famous courses",
      },
      {
        title: "Going on a deep-sea fishing excursion",
      },
      {
        title: "Participating in a beach volleyball game on Waikiki Beach",
      },
      {
        title: "Hiking the challenging trails of the Koko Head Crater on Oahu",
      },
      {
        title: "Surfing lessons on the North Shore of Oahu",
      },
    ],
  },
];

export interface IItem {
  name: string;
  // description: string;
  // image: string;
}

function Rooms(): JSX.Element {
  const headers = {
    "Content-Type": "application/json",
    // Authorization: apiKey,
  };
  const url = "https://web-dev.dev.kimo.ai/v1/categories";

  axios.get(url, { headers });
  return (
    <div className="max-w-7xl h-[512px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="relative lg:col-span-1 col-span-2">
        {data.map((item: IItem) => {
          return <ListCard name={item.name} />;
        })}
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          loading="lazy"
          src="https://source.unsplash.com/random/2560x1440/?luxury+bathroom"
          alt="/"
        />
        <img
          className="object-cover w-full h-full row-span2"
          loading="lazy"
          src="https://source.unsplash.com/random/2560x1440/?luxury+bedroom"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          loading="lazy"
          src="https://source.unsplash.com/random/2560x1440/?luxury+hotel"
          alt="/"
        />
      </div>
    </div>
  );
}

export default Rooms;
