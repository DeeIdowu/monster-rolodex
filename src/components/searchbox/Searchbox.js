import React from "react";

import "./search.css";

//functional component:
export const Searchbox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
