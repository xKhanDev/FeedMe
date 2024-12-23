import React, { useState } from "react";
import Card from "../../components/landing_page_components/Card";
import data from "../../data.json";

const Feature_Campaigns = () => {
  const [filterCampaigns, setFilterCampaigns] = useState(data);
  const [active, setActive] = useState("All");

  const handleFilter = (type) => {
    setActive(type);
    if (type === "All") {
      setFilterCampaigns(data);
    } else {
      setFilterCampaigns(data.filter((camp) => camp.category === type));
    }
  };
  const handleClick = () => {
    window.alert("There are no more campaigns");
  };
  return (
    <div className="w-full mt-12 pb-2 pt-2">
      <h1 className="capitalize font-bold text-2xl w-full">
        Feature campaigns
      </h1>
      <div className="flex items-center gap-4 my-2">
        <button
          className={`py-2 px-6 ${
            active === "All" ? "bg-[#1b2836]" : "bg-gray-500"
          } cursor-pointer hover:bg-[#1b2836]`}
          onClick={() => handleFilter("All")}
        >
          All
        </button>
        <button
          className={`py-2 px-6 ${
            active === "Food" ? "bg-[#1b2836]" : "bg-gray-500"
          } cursor-pointer hover:bg-[#1b2836]`}
          onClick={() => handleFilter("Food")}
        >
          Food
        </button>
        <button
          className={`py-2 px-6 ${
            active === "Education" ? "bg-[#1b2836]" : "bg-gray-500"
          } cursor-pointer hover:bg-[#1b2836]`}
          onClick={() => handleFilter("Education")}
        >
          Education
        </button>
        <button
          className={`py-2 px-6 ${
            active === "Animals" ? "bg-[#1b2836]" : "bg-gray-500"
          } cursor-pointer hover:bg-[#1b2836]`}
          onClick={() => handleFilter("Animals")}
        >
          animals
        </button>
        <button
          className={`py-2 px-6 ${
            active === "Healthcare" ? "bg-[#1b2836]" : "bg-gray-500"
          } cursor-pointer hover:bg-[#1b2836]`}
          onClick={() => handleFilter("Healthcare")}
        >
          Healthcare
        </button>
      </div>
      <div className="w-full flex flex-col items-center md:justify-center md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap gap-8 mb-2">
        {filterCampaigns.map((camp) => (
          <Card key={camp.id} camp={camp} />
        ))}
      </div>
      <div
        className="flex items-center justify-center w-full my-4"
        onClick={handleClick}
      >
        <button className="my_btn green_bg">Explore More...</button>
      </div>
    </div>
  );
};

export default Feature_Campaigns;
