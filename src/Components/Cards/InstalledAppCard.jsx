import React from "react";
import { FaDownload } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdOutlineRateReview } from "react-icons/md";

const InstalledAppCard = ({ app, handleUninstall }) => {
  return (
    <div className="p-4 bg-white flex flex-col md:flex-row justify-between items-center">
      <div className="flex gap-5 items-center">
        <img
          src="https://hero-apps.pages.dev/app-logo/icon-005.webp"
          className="rounded-[4px] w-[80px] h-[80px]"
          alt=""
        />
        <div>
          <h1>{app.title}</h1>
          <div className="flex gap-6">
            <div className="flex gap-2 items-center justify-between">
              <FaDownload className="w-[16px] h-[16px]" />{" "}
              <p>{app.downloads}</p>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <CiStar className="w-[16px] h-[16px]" /> <p>{app.ratingAvg}</p>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <MdOutlineRateReview className="w-[16px] h-[16px]" />{" "}
              <p>{app.size}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-[#00d390] rounded-[4px] text-white px-5 py-3 font-semibold"
          onClick={() => {
            handleUninstall(app.id);
          }}
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppCard;