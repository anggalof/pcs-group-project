import React from "react";

export const Carousel = (props) => {
  const { data } = props;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  return (
    <div className="slideshow">
      <div
        className="slideshow-slider"
        style={{ transform: `translate3d(${-(index === 0 ? index : (index === 1 ? '85.5' : '175'))}%, 0, 0)` }}
      >
        <div className="news-box">
          {data.map((item, index) => {
            return (
              <div className="news-box__wrapper" key={index}>
                <div className="news-detail__wrapper">
                  <div className="news-detail">
                    <div className="news-image">
                      <img src={item.image_url} alt="avatar" />
                    </div>
                    <div className="news-name">
                      {item.name}
                    </div>
                  </div>
                  <div className="news-detail__date">
                    <div className="news-detail__date-day">
                      {item.day}
                    </div>
                    <div className="news-detail__date-time">
                      {item.dateTime}
                    </div>
                  </div>
                </div>
                <div className="news-detail__description">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="slideshow-dots">
        {data.map((_, idx) => (
          <div
            key={idx}
            className={`slideshow-dot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
