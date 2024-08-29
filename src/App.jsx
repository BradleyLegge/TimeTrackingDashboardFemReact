import React from "react";
import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import ActivityInfo from "./components/ActivityInfo";

const App = () => {
  return (
    <div className="hero-container">
      <Profile />
      <ActivityInfo />
    </div>
  );
};

export default App;
