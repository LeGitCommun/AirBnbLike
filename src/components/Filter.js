import React from "react";

const Filter = ({ icon, title }) => {
  return (
    <div className="pr-2 flex items-center cursor-pointer text-white bg-[#ff5a60] hover:text-[#030303] gap-2 py-1 px-3 h-10 sm:px-4 rounded-full text-[14px] sm:text-[14px]">
      {icon}
      {title}
    </div>
  );
};

export default Filter;