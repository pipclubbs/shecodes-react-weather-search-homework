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
              <div className="col-10 w-50">
                <input
                  className="form-control search-input"
                  input="text"
                  placeholder="Enter a city..."
                ></input>
              </div>
              <div className="col-2 p-0 ">
                <input
                  className="btn btn-warning search-button"
                  input="submit"
                  placeholder="Search"
                ></input>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <h1>Paris</h1>
            </div>
            <div className="row">
              <ul className="local-info">
                <li>Thursday, 17:50, scattered clouds</li>
                <li>Humidity: 60%, Wind: 15km/h</li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <img src="./sunny.png" alt="weather icon" />
            <span>21°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
