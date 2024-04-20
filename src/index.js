import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

function Rating() {
  const [movieRating, setMovieRating] = useState(0);
  const txt = {
    margin: 0,
    marginLeft: "25px",
    fontSize: "20px",
    marginTop: "-10px",
  };
  return (
    <div>
      <App maxRating={10} onSetRating={setMovieRating} />
      <p style={txt}>
        This movie was rated <b>{movieRating}</b> star
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App
      maxRating={5}
      message={["Terrable", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    <Rating />
  </React.StrictMode>
);
