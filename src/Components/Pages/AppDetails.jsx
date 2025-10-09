import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { FaDownload } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdOutlineRateReview } from "react-icons/md";
import { GetInstalledApps, InstallApp } from "../utils/InstallApps";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const apps = useLoaderData();
  const { id: appId } = useParams();
  const app = apps.find((app) => app.id === parseInt(appId));

  const [InstalledApps, SetInstalledApps] = useState(GetInstalledApps());
  return (
    <>
      <div className="p-8 md:p-20">
        <div>
          {app ? (
            <>
              <div className="flex justify-start items-center flex-col md:flex-row gap-10 inter ">
                <div>
                  <img
                    src="https://hero-apps.pages.dev/app-logo/icon-005.webp"
                    className="rounded-[4px] w-[350px] h-[350px] shadow-md"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
                  <h3 className="mb-7">
                    Developed by{" "}
                    <span className="text-[#632ee3] font-semibold">
                      {app.companyName}
                    </span>
                  </h3>
                  <div className="border-b-[1px] border-[#001931] opacity-20 mb-4"></div>
                  <div className="grid grid-cols-3 gap-10 mb-8 ">
                    <div className="flex gap-2 items-center flex-col">
                      <FaDownload className="w-[48px] h-[48px]" />
                      <h1 className="text-left">Downloads</h1>
                      <h1 className="text-[40px] font-extrabold text-left">
                        {app.downloads}
                      </h1>
                    </div>
                    <div className="flex gap-2 items-center flex-col w-fit">
                      <CiStar className="w-[48px] h-[48px]" />
                      <h1 className="text-left">Average Ratings</h1>
                      <h1 className="text-[40px] font-extrabold text-left">
                        {app.ratingAvg}
                      </h1>
                    </div>
                    <div className="flex gap-2 items-center flex-col w-fit">
                      <MdOutlineRateReview className="w-[48px] h-[48px]" />
                      <h1 className="text-left">Total Reviews</h1>
                      <h1 className="text-[40px] font-extrabold text-left">
                        {app.reviews}
                      </h1>
                    </div>
                  </div>
                  <div className="flex md:block justify-center items-center">
                    <button
                      className="bg-[#00d390] rounded-[4px] text-white px-5 py-3.5 text-[20px] font-semibold"
                      disabled={InstalledApps.includes(Number(app.id))}
                      onClick={() => {
                        const InstalledApps = InstallApp(app.id);
                        SetInstalledApps(InstalledApps);
                      }}
                    >
                      {InstalledApps.includes(Number(app.id))
                        ? "Installed"
                        : `Install Now (${app.size} MB)`}
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-[#001931] opacity-20 my-10"></div>
              <h1 className="mb-6 text-2xl font-semibold">Ratings</h1>
              <ResponsiveContainer width="90%" height={300}>
                <BarChart
                  data={app.ratings}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <YAxis dataKey="name" type="category" />
                  <XAxis type="number" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="count"
                    fill="#8884d8"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                  />
                </BarChart>
              </ResponsiveContainer>
              <div className="border-b-[1px] border-[#001931] opacity-20 my-10"></div>
              <h1 className="mb-6 text-2xl font-semibold">Description</h1>
              <p>{app.description}</p>
            </>
          ) : (
            <>
              <div className="flex justify-center items-center flex-col gap-4">
                <img src="/App-Error.png" alt="" />
                <h1 className="text-5xl font-semibold">OPPS!! APP NOT FOUND</h1>
                <p className="text-[15px] font-bold text-center text-[#627382] opacity-80">
                  The App you are requesting is not found on our system. please
                  try another apps
                </p>
                <Link to="/">
                  <div className="px-4 py-3 rounded-[4px] bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white font-semibold flex justify-between items-center gap-2.5 w-fit">
                    Go Back
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AppDetails;
