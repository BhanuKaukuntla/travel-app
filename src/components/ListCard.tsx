// import React from "react";

// const ListCard = () => {
//   return (
//     <div>
//       <div className="max-w-sm w-full lg:max-w-full lg:flex">
//         <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
//           <div className="mb-8">
//             {/* <p className="text-sm text-gray-600 flex items-center">
//               <svg
//                 className="fill-current text-gray-500 w-3 h-3 mr-2"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
//               </svg>
//               Members only
//             </p> */}
//             {/* <div className="text-gray-900 font-bold text-xl mb-2">
//               Can coffee make you a better developer?
//             </div> */}
//             <p className="text-gray-700 text-base">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Voluptatibus quia, nulla! Maiores et perferendis eaque,
//               exercitationem praesentium nihil.
//             </p>
//           </div>
//           {/* <div className="flex items-center">
//             <img
//               className="w-10 h-10 rounded-full mr-4"
//               src="/img/jonathan.jpg"
//               alt="Avatar of Jonathan Reinink"
//             />
//             <div className="text-sm">
//               <p className="text-gray-900 leading-none">Jonathan Reinink</p>
//               <p className="text-gray-600">Aug 18</p>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListCard;

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Hero from "./Hero";

interface Props {
  name: string;
  // description: string;
  // image: string;
}

const handleClick = () => {
  <Hero />;
};

const ListCard: React.FC<Props> = ({ name }) => {
  return (
    <div className="bg-white rounded-xl mb-4">
      <a
        className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
        href="#"
      >
        <div className="text-gray-500">
          {/* <svg
            className="h-8 w-8 sm:h-10 sm:w-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            ></path>
          </svg> */}

          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            {name}
          </h3>

          {/* <p className="mt-2 hidden text-sm sm:block">
            You can manage phone, email and chat conversations all from a single
            mailbox.
          </p> */}
        </div>

        <span className="mt-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
          <button onClick={handleClick}>
            <HiArrowNarrowRight />
          </button>
        </span>
      </a>
    </div>
  );
};

export default ListCard;
