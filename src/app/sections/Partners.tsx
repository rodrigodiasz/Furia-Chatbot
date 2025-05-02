import React from "react";
import { logoIconsList } from "../constants";
const LogoIcon = ({ icon }: any) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img width={70} src={icon.imgPath} alt={icon.name} />
    </div>
  );
};
const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative overflow-hidden">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.imgPath} icon={icon} />
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.imgPath} icon={icon} />
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.imgPath} icon={icon} />
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.imgPath} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
