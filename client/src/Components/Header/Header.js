import React from "react";
import Search from "../Navigation/Search/Search";

import "./Header.css";

const header = () => (
  <header className="Home-Header">
    <h1>Geckosbnb</h1>
    <h2>Book unique homes and experience a city like a local.</h2>
    <Search formClasses="Home-Search">
      <input className="Search-Submit" type="submit" />
    </Search>
  </header>
);

export default header;
