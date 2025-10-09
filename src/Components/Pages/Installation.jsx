
import { useEffect, useState } from "react";

import { GetInstalledApps, UninstallApp } from "../utils/InstallApps";
import { useLoaderData } from "react-router";
import InstalledAppCard from "../Cards/InstalledAppCard";

const Installation = () => {
  const AllApps = useLoaderData();
  const [InstalledApps, setInstalledApps] = useState(GetInstalledApps());
  const [sort, setSort] = useState("");
  const [displayedApps, setDisplayedApps] = useState([]);

  const handleUninstall = (id) => {
    setInstalledApps(UninstallApp(id));
    handleSort(sort);
  };

  const handleSort = (name) => {
    setSort(name);
  };

  useEffect(() => {
    let apps = InstalledApps.map((id) => AllApps.find((app) => app.id === id));

    if (sort === "high-low") {
      apps.sort((a, b) => parseFloat(b.downloads) - parseFloat(a.downloads));
    } else if (sort === "low-high") {
      apps.sort((a, b) => parseFloat(a.downloads) - parseFloat(b.downloads));
    }

    setDisplayedApps(apps);
  }, [InstalledApps, sort, AllApps]);

  return (
    <div className="p-5 pt-20 inter bg-[#f5f5f5] min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-5">
        Your Installed Apps
      </h1>
      <p className="text-[15px] font-bold text-center text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="max-w-[1440px] mx-auto flex justify-between items-center mt-5">
        <h1 className="text-[24px] text-black font-semibold">
          {displayedApps.length} Apps Found
        </h1>

        <div>
          <select
            defaultValue=""
            className="select select-success border py-2 rounded-[4px] border-[#d2d2d2] bg-white"
          >
            <option value="" disabled>
              Sort by...
            </option>
            <option
              value="high-low"
              onClick={() => {
                handleSort("high-low");
              }}
            >
              Downloads: High → Low
            </option>
            <option
              value="low-high"
              onClick={() => {
                handleSort("low-high");
              }}
            >
              Downloads: Low → High
            </option>
          </select>
        </div>
      </div>
      {displayedApps && displayedApps.length > 0 ? (
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 gap-4 mt-5">
          {displayedApps.map((app) => (
            <InstalledAppCard key={app.id}
              app={app}
              handleUninstall={() => {
                handleUninstall(app.id);
              }}></InstalledAppCard>
          ))}
        </div>
      ) : (
        <h1 className="text-center mt-5 text-gray-500 text-5xl font-extrabold ">
          No Apps Found
        </h1>
      )}
    </div>
  );
};

export default Installation;
