import React from 'react';
import './Tags.css';

export default function Tags({ addTag, employee }) {
  const displayTags = (arr) => {
    const tag = arr.map((tag, employee) => {
      return <button key={employee.id}> {tag}</button>;
    });
    return tag;
  };
  return (
    <>
      <form
        id={employee.id}
        onSubmit={(e) => {
          e.preventDefault();
          addTag(e);
        }}
      >
        <input type="text" placeholder="Add a tag" name="tagInput" />
        <div className="tags">{displayTags(employee.tag)}</div>
      </form>
    </>
  );
}
