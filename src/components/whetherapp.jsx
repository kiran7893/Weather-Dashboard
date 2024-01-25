/* eslint-disable no-unused-vars */
import "./whetherapp.css";

import { useState } from "react";
function Whetherapp() {
  let api = {
    key: "e2623b35c893fdaa6ecb416d7947eae3",
    base: "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}",
  };

  const [search, setsearch] = useState("");
  const [whether, setwhether] = useState("");

  function searchpressed() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setwhether(result);
        console.log(result);
      });
  }

  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input
            type="text"
            className="cityInput"
            placeholder="search"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          <div className="search-icon">
            <button onClick={searchpressed}>Search</button>
          </div>
        </div>
        <div>
          <p>{whether.name}</p>
          {typeof whether.main != "undefined" ? (
            <div>
              <p>{whether.main.temp / 10} Celsius</p>
              <p>{whether.weather[0].main}</p>
              <h1>{whether.weather[0].description}</h1>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Whetherapp;
