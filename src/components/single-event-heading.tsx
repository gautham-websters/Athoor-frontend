"use client";
import React from "react";

interface SingleEventHeadingProps {
  title: string;
  description: string;
  bannerUrl: string;
}

const SingleEventHeading: React.FC<SingleEventHeadingProps> = ({
  title,
  description,
  bannerUrl,
}) => {
  return (
    <div className="single-event-heading container-fluid px-0 py-3 md:py-20">
      <div className="container mx-auto text-center">
        <h1 className="title text-[62px] md:text-[62px] font-semibold text-brand-blue md:pb-5 sm:text-2xl sm:leading-8">
          {title}
        </h1>
        <p className="mx-auto mb-3 md:mb-10 text-[18px] md:text-[18px] leading-7 max-w-[70%] sm:max-w-full sm:text-sm sm:leading-6">
          {description}
        </p>
        <div
          className="banner rounded-[20px] w-full bg-center bg-cover sm:h-[270px] h-[600px]"
          style={{ backgroundImage: `url(${bannerUrl})` }}
        ></div>
      </div>
    </div>
  );
};

export default SingleEventHeading;
