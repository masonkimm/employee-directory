import React from 'react';
import './SearchInput.css';

export default function SearchInput({ filterName }) {
  return (
    <div className="SearchInput">
      <input
        type="text"
        placeholder="Search for Student"
        onChange={(e) => {
          e.preventDefault();
          filterName(e);
        }}
      />
    </div>
  );
}
