import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import BallsCanvas from "./canvas/BallCanvas";

const Tech = () => {
  const icons = technologies.map((t) => t.icon);

  return (
    <div className="w-full h-[520px] md:h-[620px]">
      <BallsCanvas icons={icons} />
    </div>
  );
};

export default SectionWrapper(Tech, "");
