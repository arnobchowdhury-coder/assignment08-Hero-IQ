import React from 'react';
import AppCards from '../Cards/AppCards';
import { Link } from 'react-router';

const TrendingApps = ({ apps }) => {
  return (
    <div className="p-10 md:p-20 inter bg-[#f5f5f5]">
      <h1 className="text-5xl font-bold text-center mb-5">Trending Apps</h1>
      <p className="text-[15px] font-bold text-center text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {apps.map((app) => (
          <AppCards key={app.id} app={app} />
        ))}
      </div>
      <div className="flex justify-center mt-10 items-center">
        <Link to="/apps">
          <div className="px-4 py-3 rounded-[4px] bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white font-semibold flex justify-between items-center gap-2.5">
            Show All
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;