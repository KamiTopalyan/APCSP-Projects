import React, { useEffect } from 'react';
import './App.css';

function App() {
  const [state1, setState1] = React.useState<boolean>(false);
  const [state2, setState2] = React.useState<boolean>(false);
  const [gate, setGate] = React.useState<string>('AND');
  const changeHandler = () => {
    console.log(gate)
    const resultElement = document.getElementById('result') as HTMLInputElement;
    switch (gate) {
      
      case "AND":
        resultElement.checked = state1 && state2;
        break;
      case "OR":
        resultElement.checked = state1 || state2;
        break;
      case "XOR":
        resultElement.checked = (state1 || state2) && !(state1 && state2) ;
        break;
      case "NOT":
        resultElement.checked = !state1;
        break;
      case "NAND":
        resultElement.checked = !(state1 && state2);
        break;
      case "NOR":
        resultElement.checked = !(state1 || state2);
        break;
      default:
        break;
    }
    
  }
  
  useEffect(() => {
    const state2Element = document.getElementsByClassName('Switch')[1] as HTMLDivElement;
    changeHandler();
    if(gate === "NOT") {
      setState2(false);
      state2Element.style.display = "none";
    }
    else {
      state2Element.style.display = "flex";
    }
  }, [state1, state2, gate])
  
  return (
    <div className="App">
      <div className="AppContainer">
        <div className="Switch">
          <p>State 1</p>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.currentTarget.checked) {
                setState1(true);
              } else {
                setState1(false);
              }
            }}
          ></input>
        </div>
        <div className="Switch">
          <p>State 2</p>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.currentTarget.checked) {
                setState2(true);
              } else {
                setState2(false);
              }
            }}
          ></input>
        </div>
      </div>
      <div className="Switch">
        <select onChange={(e) => {
          setGate(e.currentTarget.value);
        }}>
          <option value="AND">AND</option>
          <option value="OR">OR</option>
          <option value="XOR">XOR</option>
          <option value="NOT">NOT</option>
          <option value="NAND">NAND</option>
          <option value="NOR">NOR</option>
        </select>
      </div>
      <div className="Switch result">
        <p>Result</p>
        <input id="result" type="checkbox" disabled></input>
      </div>
    </div>
  );
}

export default App;
