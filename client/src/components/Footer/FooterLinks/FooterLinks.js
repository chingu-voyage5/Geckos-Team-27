import React from "react";
import "./FooterLinks.css";

const FooterLinks = () => (
  <div className="flex-row ft-links">
    <ul>
      <li className="bold-ft-link">Geckobnb</li>
      <li className="ft-link unallow-link">Careers</li>
      <li className="ft-link unallow-link">Press</li>
      <li className="ft-link unallow-link">Policies</li>
      <li className="ft-link unallow-link">Help</li>
      <li className="ft-link unallow-link">Diversity & Belonging</li>
    </ul>
    <ul>
      <li className="bold-ft-link">Discover</li>
      <li className="ft-link unallow-link">Trust & Safety</li>
      <li className="ft-link unallow-link">Travel Credit</li>
      <li className="ft-link unallow-link">Gift Cards</li>
      <li className="ft-link unallow-link">Geckobnb Citizen</li>
      <li className="ft-link unallow-link">Business Travel</li>
      <li className="ft-link unallow-link">Guidebooks</li>
      <li className="ft-link unallow-link">Geckobnbmag</li>
    </ul>
    <ul>
      <li className="bold-ft-link">Hosting</li>
      <li className="ft-link unallow-link">Why Host</li>
      <li className="ft-link unallow-link">Hospitality</li>
      <li className="ft-link unallow-link">Responsible Hosting</li>
      <li className="ft-link unallow-link">Community Center</li>
    </ul>
    <ul>
      <div className="flex-row unallow-link">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-twitter" />
        <i className="fab fa-instagram" />
      </div>
      <li className="ft-link unallow-link">Terms</li>
      <li className="ft-link unallow-link">Privacy</li>
      <li className="ft-link unallow-link">Site Map</li>
    </ul>
  </div>
);

export default FooterLinks;
