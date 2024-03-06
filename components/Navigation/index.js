import React, { useRef } from "react";
import Modal from "../elements/Modal";

export const Navigation = (props) => {
  const { data } = props;
  const modal = useRef(null);

  const openForm = () => {
    return modal.current.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return modal.current.close();
  };

  return (
    <div className="navbar">
      <div className="container max-w-480">
        <div className="nav">
          <div className="nav-header">
            <a href="/">
              KerjaYuk!
            </a>
          </div>

          <div className="nav-search-icon" onClick={() => openForm()}>
            <i className="fa fa-bell-o"></i>
            <div className="point-red"></div>
          </div>
        </div>
      </div>
      <Modal ref={modal}>
        <div className="notification-content" onSubmit={handleSubmit}>
          <div className="notification-wrapper">
            {data.map((item, index) => {
              return (
                <div className={`notification ${item.bgRead ? '' : 'active'}`} key={index}>
                  <div className="notification-image">
                    <img src={item.image_url} alt="notification" />
                  </div>
                  <div className="notification-detail">
                    <div className="notification-detail__info">
                      <div className="notification-info__name">
                        {item.infoTitle}
                      </div>
                      <div className="notification-info__date">
                        {item.dateTime}
                      </div>
                    </div>
                    <div className="notification-description">
                      {item.infoDesc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
};
