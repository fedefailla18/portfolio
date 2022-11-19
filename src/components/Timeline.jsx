import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <h2> Timeline </h2>
        {timeline.map((item) => (
          <TimelineItem
            year={item.year}
            duration={item.duration}
            title={item.title}
            details={item.details}
          ></TimelineItem>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
