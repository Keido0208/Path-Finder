// import "./styles.css";
// import { useState } from "react";
// function Square({ onClickSquare, value }) {
//   return (
//     <button className="square" onClick={onClickSquare}>
//       {value}
//     </button>
//   );
// }

// function Board() {
//   const rows = 1000;
//   const [board, setBoard] = useState(Array(rows).fill());
//   const [clickValue, setClickValue] = useState("");
//   const [pressed, setPressed] = useState(true);
//   function handleClick(i) {
//     console.log(pressed);
//     const nextBoard = board.slice();
//     if (pressed) {
//       nextBoard[i] = "X";
//     } else {
//       nextBoard[i] = "O";
//     }
//     setBoard(nextBoard);
//     setPressed(!pressed);
//     console.log(clickValue);
//   }
//   return (
//     <div>
//       {board.map((item, index) => (
//         <>
//           <Square
//             key={index}
//             onClickSquare={() => handleClick(index)}
//             value={board[index]}
//           />
//         </>
//       ))}
//       <button onClick={() => setBoard(Array(rows).fill())}>Clear</button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="App">
//       <Board />
//     </div>
//   );
// }

import React from "react";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
