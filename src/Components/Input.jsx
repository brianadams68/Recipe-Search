import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Input({ onSearch }) {
  const inputRef = useRef(null);

  const handleSearch = () => {
    onSearch(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input ref={inputRef} type="text" className="form-control rounded" placeholder="Search for recipe"/>
            <div className="input-group-append">
              <button className="btn btn-light ms-2 border rounded p-3" type="button" onClick={handleSearch}> Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;

