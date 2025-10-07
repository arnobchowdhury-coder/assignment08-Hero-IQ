import React from 'react';
import googlePlay from "../../assets/fi_16076057.png"
import appStore from "../../assets/fi_5977575.png"
import hero from "../../assets/hero.png"

import StoreButton from '../StoreButton/StoreButton';
import States from '../States/States';

const Hero = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className='text-center mt-[10px]'>
        <h1 className="text-7xl font-bold">We Build <br /> <span className="text-[#632EE3]">Productive </span> Apps </h1>
      </div>
      <div className='text-center mt-[10px]'>
        <p className="text-[#627382] text-[20px] font-normal mt-4 opacity-70">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>
      <div className='my-10 flex justify-center gap-4'>
        <StoreButton logo={googlePlay}
          name={"Google Play"}></StoreButton>
        <StoreButton logo={appStore} name={"App Store"}></StoreButton>
      </div>
      <div className='flex justify-center items-center'>
        <img src={hero} alt="" />
      </div>
      <div>
        <States></States>
      </div>
    </div >
  );
};

export default Hero;