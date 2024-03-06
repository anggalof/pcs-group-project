import React from "react";

export const Member = (props) => {
  const { data } = props;
  return (
    <div id="member">
      <div className="container max-w-480">
        <h3>Hai, Good Morning!</h3>
        <div className="member-box">
          <div className="member-info__wrapper">
            <div className="member-info__detail">
              <div className="member-info__detail-image">
                <img src={data.image_url} alt="icon" />
              </div>
              <div className="member-info__detail-more">
                <div className="member-info__detail-name">
                  {data.name}
                </div>
                <div className="member-info__detail-position">
                  {data.position}
                </div>
              </div>
            </div>
            <div className="member-info__since">
              <div className="member-info__since-title">Member since</div>
              <div className="member-info__since-date">{data.member_since}</div>
            </div>
          </div>
          <div className="member-info__wrapper">
            <div className="member-info__location">
              <div className="member-info__location-title">
                Location
              </div>
              <div className="member-info__location-address">
                {data.location}
              </div>
            </div>
            <div className="member-info__ico">
              ico
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
