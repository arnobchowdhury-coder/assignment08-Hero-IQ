import React from 'react';

const States = () => {
  return (
    <div className="bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] p-20 w-full inter text-white">
      <h1 className="text-5xl font-bold text-center mb-10">
        Trusted by Millions, Built for You
      </h1>

      <div className="flex justify-center items-center gap-40">
        <div className="flex items-center flex-col gap-4">
          <span className="opacity-60">Total Downloads</span>
          <h1 className="text-6xl font-extrabold">29.6M</h1>
          <span className="opacity-60">21% more than last month</span>
        </div>
        <div className="flex items-center flex-col gap-4">
          <span className="opacity-60">Total Reviews</span>
          <h1 className="text-6xl font-extrabold">906K</h1>
          <span className="opacity-60">46% more than last month</span>
        </div>
        <div className="flex items-center flex-col gap-4">
          <span className="opacity-60">Active Apps</span>
          <h1 className="text-6xl font-extrabold">132+</h1>
          <span className="opacity-60">31 more will Launch</span>
        </div>
      </div>
    </div>
  );
};

export default States;