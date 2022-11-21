import logo from './img/logo.png';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
    <img src={logo} alt="logo" />
    <h1>React App</h1>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count -1)}>Decrement</button>
    </div>
  );
}

export default App;
