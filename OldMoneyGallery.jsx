import React from "react";

const imageUrls = [
  "/images/oldmoney1.jpeg",
  "/images/oldmoney2.jpeg",
  "/images/oldmoney3.jpeg",
  "/images/oldmoney4.jpeg",
  "/images/oldmoney5.jpeg",
  "/images/oldmoney6.jpeg",
];

export default function OldMoneyGallery() {
  return (
    <div className="bg-[#f9f6f0] py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-4xl font-serif text-center text-gray-800 mb-10">
        Old Money Style Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={url}
              alt={`Old Money Outfit ${index + 1}`}
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
