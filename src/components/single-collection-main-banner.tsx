"use client";
import React from "react";

interface SingleCollectionBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  callNumber: string;
  whatsappNumber: string;
}

const SingleCollectionBanner: React.FC<SingleCollectionBannerProps> = ({
  title,
  description,
  imageUrl,
  callNumber,
  whatsappNumber,
}) => {
  return (
    <div>
      {/* Desktop Banner */}
      <div
        className="hidden md:flex container-fluid single-collection-main-banner p-0 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="container flex flex-col justify-center py-20">
          <div className="title text-4xl font-bold">{title}</div>
          <p className="description mt-4 max-w-2xl">{description}</p>

          <div className="flex mt-6 gap-4">
            <a
              href={`tel:${callNumber}`}
              className="flex items-center gap-2 py-2 px-4 bg-white text-black rounded shadow hover:opacity-90 transition"
            >
              <img
                src="/assets/images/call.svg"
                alt="Call"
                className="w-5 h-5 transform scale-90"
              />
              {callNumber}
            </a>

            <a
              href={`tel:${whatsappNumber}`}
              className="flex items-center gap-2 py-2 px-4 border border-white text-white rounded hover:bg-white hover:text-black transition"
            >
              <img
                src="/assets/images/whatsapp.png"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              {whatsappNumber}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="md:hidden container-fluid p-0 pb-5 bg-gray-100">
        <div className="container single-collection-mobile py-6">
          <div className="title text-3xl font-bold">{title}</div>
          <p className="description mt-2">{description}</p>

          <div className="flex mt-4 justify-center gap-4">
            <a
              href={`tel:${callNumber}`}
              className="flex items-center gap-2 py-2 px-4 bg-black text-white rounded"
            >
              <img
                src="/assets/images/call.svg"
                alt="Call"
                className="w-5 h-5 filter invert transform scale-90"
              />
              {callNumber}
            </a>

            <a
              href={`tel:${whatsappNumber}`}
              className="flex items-center gap-2 py-2 px-4 border border-black text-black rounded"
            >
              <img
                src="/assets/images/whatsapp.png"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              {whatsappNumber}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollectionBanner;