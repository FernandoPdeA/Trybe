import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmData, setConfirmData] = useState(false);

  function activeConfirmData() {
    setConfirmData(true);
  }

  return (
    <div className="App">
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text" placeholder="Digite seu nome..." />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email" placeholder="Digite seu email..." />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password" placeholder="Digite seu password..." />
        <button
          type="button"
          onClick={() => {
            activeConfirmData();
          }}
        >Submit</button>
      </form>
      {confirmData &&
        <div className="resultsData">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>}
    </div>
  );
}

export default App;
