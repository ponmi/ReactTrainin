import React from 'react';

function TestComponent() {
  return (
    <div>
      <lable htmlFor="test">Incorrect Label</lable>
      <label htmlFor="test">Correct Label</label>
    </div>
  );
}

export default TestComponent;