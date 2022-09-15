import React from "react";

function Search({ filterStudents }) {
  function handleChange(e) {
    filterStudents(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Search..." />
    </div>
  );
}

export default Search;
