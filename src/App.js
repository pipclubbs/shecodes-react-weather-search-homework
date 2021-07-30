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
          <div className="col-7">
            <div className="row">
              <h1>Paris</h1>
            </div>
            <div className="row">
              <ul className="local-info">
                <div className="row">
                  <div className="col-6">
                    <li>Thursday, 17:50</li>
                  </div>
                  <div className="col-6">
                    <li> scattered clouds</li>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <li>Humidity: 60%</li>
                  </div>
                  <div className="col-6">
                    <li>Wind: 15km/h</li>
                  </div>
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
