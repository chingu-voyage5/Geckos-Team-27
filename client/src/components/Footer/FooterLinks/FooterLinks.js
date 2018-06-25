import React from "react";
import "./FooterLinks.css";

const FooterLinks = () => (
  <div className="flex-row ft-links">
    <ul>
      <li className="bold-ft-link">Geckobnb</li>
      <li className="ft-link">Careers</li>
      <li className="ft-link">Press</li>
      <li className="ft-link">Policies</li>
      <li className="ft-link">Help</li>
      <li className="ft-link">Diversity & Belonging</li>
    </ul>
    <ul>
      <li className="bold-ft-link">Discover</li>
      <li className="ft-link">Trust & Safety</li>
      <li className="ft-link">Travel Credit</li>
      <li className="ft-link">Gift Cards</li>
      <li className="ft-link">Geckobnb Citizen</li>
      <li className="ft-link">Business Travel</li>
      <li className="ft-link">Guidebooks</li>
      <li className="ft-link">Geckobnbmag</li>
    </ul>
    <ul>
      <li className="bold-ft-link">Hosting</li>
      <li className="ft-link">Why Host</li>
      <li className="ft-link">Hospitality</li>
      <li className="ft-link">Responsible Hosting</li>
      <li className="ft-link">Community Center</li>
    </ul>
    <ul>
      <div className="flex-row">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-twitter" />
        <i className="fab fa-instagram" />
      </div>
      <li className="ft-link">Terms</li>
      <li className="ft-link">Privacy</li>
      <li className="ft-link">Site Map</li>
    </ul>
  </div>
);

export default FooterLinks;
