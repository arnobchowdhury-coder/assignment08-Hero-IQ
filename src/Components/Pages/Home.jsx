import React from 'react';
import Hero from '../Hero/Hero';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';


const Home = () => {
  const apps = useLoaderData().slice(0, 8);
  return (
    <div>
      <Hero></Hero>
      <TrendingApps apps={apps}></TrendingApps>
    </div>
  );
};

export default Home;