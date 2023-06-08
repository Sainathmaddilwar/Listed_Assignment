import React from "react";

const ScheduleCard = ({ info }) => {
  return (
    <div className={`border-l-4  p-3 my-3 ${info.borderDesign}`}>
      <h6 className="text-sm text-[#666666] ">{info.title}</h6>
      <p className="text-xs text-[#999999]">{info.time}</p>
      <p className="text-xs text-[#999999]">{info.location}</p>
    </div>
  );
};

export default ScheduleCard;
