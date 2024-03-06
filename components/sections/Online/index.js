import React from "react";

export const Online = (props) => {
  const { data } = props;
  return (
    <div id="online">
      <div className="container max-w-480">
        <h3>Online</h3>
        <div className="online-box__wrapper">
          {data.map((item, index) => {
            return (
              <div className="online-profile" key={index}>
                <img src={item.image_url} alt={item.name} />
                <span className="online-name">{item.name}</span>
                <span className="online-work">{item.position}</span>
              </div>
            );
          })}
          <div className="online-more">
            <p>10</p>
            <p>more</p>
          </div>
        </div>
      </div>
    </div>
  );
};
