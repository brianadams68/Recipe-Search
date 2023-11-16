import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Input({ onSearch }) {
  const inputRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const handleSearch = () => {
    onSearch(inputRef.current.value);
    inputRef.current.value = "";
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container">
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid d-flex justify-content-center">
        <form className="d-flex" role="search">
            <input
              ref={inputRef}
              type="text"
              className="form-control rounded text-secondary"
              placeholder="Search for recipe"
              style={{ width: "100%", maxWidth: "400px", height: "50px" }}
            />
            <button
              className="btn btn-light text-secondary ms-2 border rounded p-1"
              type="button"
              style={{ width: "100px", height: "50px" }}
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
