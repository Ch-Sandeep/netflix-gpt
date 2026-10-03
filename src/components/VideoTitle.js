import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    // bg-gradient-to-r sets a linear gradient that flows horizontally from left to right, from-black sets the starting color of that gradient on the left to solid black
    <div className="w-screen aspect-video pt-[16%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-12 text-xl flex items-center rounded-lg hover:bg-opacity-80">
          <svg
            class="w-8 h-8 fill-black"
            viewBox="0 0 24 24"
            xmlns="http://w3.org"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
