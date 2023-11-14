import React, { useRef } from "react";

function Input({ onSearch }) {
  const inputRef = useRef(null);

  const handleSearch = () => {
    onSearch(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="InputWrapper">
      <input ref={inputRef} placeholder="Search for recipe" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Input;
