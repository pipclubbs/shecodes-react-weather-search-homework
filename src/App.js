import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <form>
            <div className="row">
              <div className="col-10 w-60 p-0">
                <input
                  className="form-control search-input"
                  input="text"
                  placeholder="Enter a city..."
                ></input>
              </div>
              <div className="col-2 p-0">
                <input
                  className="btn search-button"
                  type="button"
                  value="Search"
                ></input>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col-7">
            <div className="row">
              <h1>Paris</h1>
            </div>
            <div className="row">
              <ul className="local-info">
                <div className="row">
                  <li>Thursday, 17:50</li>
                  <li className="text-capitalize"> scattered clouds</li>
                  <li>Humidity: 60%</li>
                  <li>Wind: 15km/h</li>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-5 current">
            <img src="./sunny.png" alt="weather icon" />
            <span>21</span>
            <span className="celsius">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
