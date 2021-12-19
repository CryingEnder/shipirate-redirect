import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  useEffect(() => {
    window.location.href = "https://shipirate.herokuapp.com/";
  }, []);

  return (
    <div className="redirect">
      <h1>Redirecting...</h1>
    </div>
  );
}

export default App;
