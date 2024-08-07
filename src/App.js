import React, { useState } from 'react';
import './App.css';

function App() {
  const [matrix, setMatrix] = useState(
    Array(3)
      .fill()
      .map(() => Array(3).fill(''))
  );
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (row, col) => {
    if (matrix[row][col] === 'green') return;

    const newMatrix = matrix.map((row) => row.slice());
    newMatrix[row][col] = 'green';

    const newClickOrder = [...clickOrder, [row, col]];

    setMatrix(newMatrix);
    setClickOrder(newClickOrder);

    if (newClickOrder.length === 9) {
      changeColorsToOrange(newMatrix, newClickOrder);
    }
  };

  const changeColorsToOrange = (newMatrix, clickOrder) => {
    let delay = 0;
    clickOrder.forEach(([row, col], index) => {
      setTimeout(() => {
        newMatrix[row][col] = 'orange';
        setMatrix([...newMatrix]);
      }, delay);
      delay += 500; // Change the delay as needed for better visual sequence
    });
  };

  return (
    <div className="matrix">
      <h1>React Matrix</h1>
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((color, colIndex) => (
            <div
              key={colIndex}
              className="box"
              style={{ backgroundColor: color }}
              onClick={() => handleClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
