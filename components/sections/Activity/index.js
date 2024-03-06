import React from "react";
import { convertToTime } from "../../../utils/formatter/times";

export const Activity = (props) => {
  const { data } = props;
  return (
    <div id="activity">
      <div className="container max-w-480">
        <h3>Today's activity</h3>
        <div className="activity-wrapper">
          <div className="activity-detail">
            <div className="activity-info__icon-checkin">
              <i className="fa fa-clock-o"></i>
            </div>
            <div className="activity-info__check-inout">
              {data.checkIn}
            </div>
            <div className="activity-info__check-inout-title">
              Check In
            </div>
          </div>
          <div className="activity-detail">
            <div className="activity-info__icon-circle">
              <i className="fa fa-circle-o-notch"></i>
              <span className="arrow-right"></span>
              <span className="number">8</span>
            </div>
            <div className="activity-info__working-hours">
              {convertToTime(data.workingHours)}
            </div>
            <div className="activity-info__check-inout-title">
              Working Hours
            </div>
          </div>
          <div className="activity-detail">
            <div className="activity-info__icon-checkout">
              <i className="fa fa-clock-o"></i>
            </div>
            <div className="activity-info__check-inout">
              {data.checkOut ? data.checkOut : '--:--'}
            </div>
            <div className="activity-info__check-inout-title">
              Check Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
