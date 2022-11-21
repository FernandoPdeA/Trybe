import { useState } from "react";
import logo from '../img/logo.png';
import User from '../components/User';

function Home() {
  const [name, setName] = useState('');
  const [nameApi, setNameApi] = useState('');
  const [status, setStatus] = useState(false);

  function onChangUserName(event) {
    setName(event.target.value);
  }

  function setNameChange(event) {
    event.preventDefault();
    setNameApi(name);
    setStatus(true);
  }

  function resetName(event) { 
    event.preventDefault();
    const input = document.querySelector('input');
    input.value = '';
    setStatus(false);
  }

  return (
    <div>
      <img className="iconeReact" src={logo} alt="logo" />
      <form action="">
        <input placeholder="Search name..." type="text" onChange={onChangUserName} />
        <button onClick={setNameChange}>Procurar</button>
        <button onClick={resetName}>Resetar</button>
      </form>
      {status ? <User nameApi={nameApi}/> : <strong>Sem informações no momento!</strong> }
    </div>
  );
}

export default Home;