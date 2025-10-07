import React from 'react';

const StoreButton = ({ logo, name }) => {
  return (
    <div className="flex justify-center items-center border-1 border-[#d2d2d2]  rounded-[4px] px-6 py-3 gap-2.5 w-fit">
      <img src={logo} className="w-8 h-8" alt="" />
      <span className="font-semibold text-[20px]">{name}</span>
    </div>
  );
};

export default StoreButton;