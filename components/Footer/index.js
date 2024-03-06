import React from "react";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="container max-w-480">
        <div className="footer-menu">
          <div className="footer-icon">
            <i className="fa fa-home icon-home"></i>
            <div className="footer-icon__name active">Home</div>
          </div>
          <div className="footer-icon">
            <i className="fa fa-calendar-check-o"></i>
            <div className="footer-icon__name">Attendance</div>
          </div>
          <div className="footer-icon">
            <div className="icon-circle">
              <i className="fa fa-sign-out"></i>
            </div>
            <div className="footer-icon__name center">Checkout</div>
          </div>
          <div className="footer-icon">
            <i className="fa fa-file-text"></i>
            <div className="footer-icon__name">Form</div>
          </div>
          <div className="footer-icon">
            <i className="fa fa-cog"></i>
            <div className="footer-icon__name">Setting</div>
          </div>
        </div>
      </div>
    </div>
  );
};
