import React from "react";
import { useState } from "react";
import ActivityInfo from "./ActivityInfo";
import avatar from "../images/image-jeremy.png";

const Profile = () => {
  const [timePeriod, setTimePeriod] = useState("weekly");

  return (
    <div className="profile-container">
      <div className="profile-top">
        <img className="avatar-img" src={avatar} alt="Image of Jeremy" />
        <div className="name-info">
          <p className="report">Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>

      <div className="profile-bottom">
        <p
          onClick={() => setTimePeriod("daily")}
          className={timePeriod === "daily" ? "current-target" : "you"}
        >
          Daily
        </p>
        <p
          onClick={() => setTimePeriod("weekly")}
          className={timePeriod === "weekly" ? "current-target" : "you"}
        >
          Weekly
        </p>
        <p
          onClick={() => setTimePeriod("monthly")}
          className={timePeriod === "monthly" ? "current-target" : "you"}
        >
          Monthly
        </p>
      </div>
    </div>
  );
};

export default Profile;
