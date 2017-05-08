/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "^state\d$" }]*/

import React from "react";

const App = ({ state }) => (
  <div>
    <h1>Start here!</h1>
    <hr />
    <pre>{JSON.stringify(state, null, " ")}</pre>
  </div>
);

const state1 = {
  board: [[null, null, null], [null, null, null], [null, null, null]],
  currentPlayer: "X",
  winner: null
};

/* Show the state after player 'X' made a move. */
const state2 = {
  board: [["X", null, null], [null, null, null], [null, null, null]],
  currentPlayer: "O",
  winner: null
};

/* Show a more evolved board. */
const state3 = {
  board: [["X", "O", "X"], ["O", "X", null], [null, null, null]],
  currentPlayer: "O",
  winner: null
};

/* Show the state with a winner! */
const state4 = {
  board: [["X", "X", "X"], ["O", "O", null], [null, null, null]],
  currentPlayer: "O",
  winner: "X"
};

/* Show the state with a draw! */
const state5 = {
  board: [["X", "O", "X"], ["X", "O", "O"], ["O", "X", "X"]],
  currentPlayer: "O",
  winner: "DRAW"
};

// Change the state here:
const state = state1;

// Neat trick to display the board as a table in the debug console.
console.table(state.board);

const AppWithProps = () => <App state={state} />;

export default AppWithProps;
