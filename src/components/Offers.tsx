import Card from "./Card";
import React from "react";
// import axios from "axios";

const data = [
  {
    title: "Surfing",
    description: "Best Hawaiian islands for surfing.",
    image:
      "https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png",
  },
  {
    title: "Traditional Festivals",
    description: "Best places to attend traditional festivals in Hawaii",
    image:
      "https://storage.googleapis.com/topics-images/web-dev-images/traditional_festivals_low.png",
  },
  {
    title: "Volcanoes",
    description: "Volcanic conditions can change at any time.",
    image:
      "https://storage.googleapis.com/topics-images/web-dev-images/volcanoes_low.png",
  },
];
export interface IItem {
  title: string;
  description: string;
  image: string;
}
// Offers component
function Offers(): JSX.Element {
  return (
    <div>
      <div className="max-w-4xl m-auto px-4 sm:py-12 py-8 sm:flex flex-wrap justify-between">
        <p className="text-lg font-bold text-gray-700 text-center">
          Highlights
        </p>
      </div>
      <div className="ml-72">
        <div className="grid grid-cols-4 gap-12">
          {data.map((item: IItem) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Offers;
