import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router";
import AppCard from "../Cards/AppCard";
import Loading from "../Loading/Loading";

const AllApps = () => {
  const apps = useLoaderData();

  const [allApps, setAllApps] = useState([]);
  const [search, setSearch] = useState(false);
  useEffect(() => {
    setAllApps(apps);
  }, [apps]);

  const handleSearch = (e) => {
    setSearch(true);
    setTimeout(() => {
      const userText = e.target.value.toLowerCase();
      const filterApps = apps.filter((app) =>
        app.title.toLowerCase().includes(userText)
      );
      setAllApps(filterApps);
      setSearch(false)
    }, 1000);
  };

  return (
    <div className="p-10 md:p-20 inter bg-[#f5f5f5] min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-5">
        Our All Applications
      </h1>
      <p className="text-[15px] font-bold text-center text-[#627382]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="max-w-[1440px] mx-auto flex justify-between items-center mt-5">
        <h1 className="text-[24px] text-black font-semibold">
          ({allApps.length}) Apps Found
        </h1>

        <div className="relative w-1/2 md:w-full md:max-w-xs">
          <input
            type="search"
            onChange={handleSearch}
            required
            placeholder="Search"
            className="w-full border px-10 py-2 rounded-[4px] border-[#d2d2d2] focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {search ? (
        <>
          <Loading></Loading>
        </>
      ) : (
        <>
          {allApps && allApps.length > 0 ? (
            <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
              {allApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <h1 className="text-center mt-5 text-gray-500 text-5xl font-extrabold ">
              No Apps Found
            </h1>
          )}
        </>
      )
      }
    </div>
  );
};

export default AllApps;