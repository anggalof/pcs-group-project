import React from "react";
import { Carousel } from "../../elements/Carousel";

export const News = (props) => {
  const { data } = props;
  return (
    <div id="news">
      <div className="container max-w-480">
        <h3>PCS News</h3>
      </div>
      
      <Carousel data={data} />
    </div>
  );
};
