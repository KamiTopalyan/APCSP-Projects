import React, { createElement } from 'react';
import './App.css';
import { create } from 'domain';

//params: rows expected to be a number
//returns: a react element
function createPyramid(rows: number) {
  let currentObject = []
  let spc = rows - 3
  // nested loop to create the rows and columns
  // when x loops it breaks line
  // when y loops it creates a #
  for (let x = 0; x <= rows; x++) {

    for(let space = spc; space >= 1; space--){
      currentObject.push(<span>&nbsp;</span>);
    }
    for (let y = 0; y <= x; y++) {
      currentObject.push(<span>#</span>);
    }
    currentObject.push(<br></br>);
  }
  return createElement('div', {style: {textAlign: "center"}}, currentObject);
}

//params: rows expected to be a number
//returns: a react element
function createBox(rows: number) {
  let currentObject = [];
  // nested loop to create the rows and columns
  // the row count is same as column count
  // when x loops it breaks line
  // therefore we acheive a square
  for (let x = 1; x <= rows; x++) {
    for (let y = 1; y <= rows; y++) {
      currentObject.push(<span>#</span>);
    }
    currentObject.push(<br></br>);
  }
  return createElement("div", null, currentObject);
}

//params: rows expected to be a number
//returns: a react element
function createStaircase(rows: number) {
  let currentObject = [];
  // nested loop to create the rows and columns
  // the row count is same as column count
  // when x loops it breaks line
  // y can only loops if it x is greater than y
  // therefore we acheive a staircase
  for (let x = 0; x <= rows; x++) {
    for (let y = 0; y <= x; y++) {
      currentObject.push(<span>#</span>);
    }
    currentObject.push(<br></br>);
  }
  return createElement("div", {style: {textAlign: "left"}}, currentObject);
}
function App() {
  return (
    <div className="App">
      <div className='container'>

        {/* Inilize the functiions with lines between them */}
        {createPyramid(4)}
        <br></br>
        {createBox(5)}
        <br></br>
        {createStaircase(5)}
      </div>
    </div>
  );
}

export default App;
