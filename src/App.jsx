import {useState} from 'react';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1> Counter</h1>
      <h2 className="Counter"> {count} </h2>
      <div className="Buttons">
      <button className="Increase" onClick = { () => setCount(count + 1)}> + </button>
      <button className="Decrease" onClick = { () => setCount(count - 1)}> - </button>
      </div>
    </div>
  )
};


  export default App;