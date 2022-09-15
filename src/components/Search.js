import React from "react";

function Search({ filterPlanets }) {
  function handleChange(e) {
    filterPlanets(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Search..." />
    </div>
  );
}

export default Search;
