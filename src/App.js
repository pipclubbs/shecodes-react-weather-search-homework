import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
