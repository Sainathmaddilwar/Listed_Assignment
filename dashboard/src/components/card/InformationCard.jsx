import React from "react";

const InformationCard = ({ info }) => {
  return (
    <div className={`rounded-[20px] p-4 ${info.bgColor}`}>
      <div className="flex justify-end">
        <img src={info.icon} alt={`${info.title}-icon`} className="mr-3" />
      </div>
      <div>
        <p className="text-sm mb-1">{info.title}</p>
        <h4 className="font-bold text-2xl">{info.value}</h4>
      </div>
    </div>
  );
};

export default InformationCard;
