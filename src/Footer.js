import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer d-flex gap-2 justify-content-center">
        <span className="footer-text">
          <a
            href="https://github.com/pipclubbs/shecodes-react-weather-search-homework"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>{" "}
          {""} by Phillippa Clubbs
        </span>
      </div>
    </div>
  );
}
