import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Input({ onSearch }) {
  const inputRef = useRef(null);

  const handleSearch = () => {
    onSearch(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="container-fluid justify-content-center">
          <form className="d-flex" role="search">
            <input
              ref={inputRef}
              type="text"
              className="form-control rounded text-secondary"
              placeholder="Search for recipe"
              style={{ width: "400px", height: "50px" }}
            />
            <button
              className="btn btn-light text-secondary ms-2 border rounded p-1"
              type="button"
              style={{ width: '100px', height: "50px" }}
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Input;
