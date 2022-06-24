import React, { useState } from "react";

const Filter = ({ FilterName }) => {
  const [filterele, setFilter] = useState("");
  const handelFilter = (element) => {
    const filterValue = element.target.value;
    setFilter(filterValue);
    FilterName(filterValue);

  };
  return (
    <div>
      <div style={{ marginTop: "5px" }}>
        <input
          placeholder="filter input"
          type="text"
          value={filterele}
          onChange={(e) => handelFilter(e)}
        ></input>
      </div>
    </div>
  );
};
export default Filter;
