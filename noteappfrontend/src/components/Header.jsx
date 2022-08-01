import React from "react";

const Header = () => {
  return (
    <div className="app-header">
      <h1>
        Notes{" "}
        <i
          className="fa-solid fa-thumbtack"
          style={{ color: "#ffdd09", fontSize: "20px" }}
        ></i>
      </h1>
    </div>
  );
};

export default Header;
