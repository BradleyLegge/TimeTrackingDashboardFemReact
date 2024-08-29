import React from "react";
import ellipsis from "../images/icon-ellipsis.svg";
import data from "../data.json";

const ActivityInfo = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.title} className="activity-container">
            <div
              className={`activity-top ${item.title
                .replace(/\s/g, "")
                .toLowerCase()}-color`}
            ></div>
            <div className="activity-bottom">
              <div className="activity-title">
                <p>{item.title}</p>
                <button className="ellipsis-btn">
                  <img
                    className="ellipsis-img"
                    src={ellipsis}
                    alt="Image of ellipsis"
                  />
                </button>
              </div>
              <p className="hours-tracked">
                {item.timeframes.weekly.current}hrs
              </p>
              <div className="previous-tracked">
                <p>Last week - {item.timeframes.weekly.previous}hrs</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ActivityInfo;
