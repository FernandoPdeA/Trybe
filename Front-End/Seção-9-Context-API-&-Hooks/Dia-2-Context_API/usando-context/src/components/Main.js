import { useState } from 'react';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import logo from '../img/logo.png';

function Main() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmData, setConfirmData] = useState(false);

  const { value } = useContext(ThemeContext);
  const { colorMain, colorFormTotal } = value;

  function activeConfirmData() {
    setConfirmData(true);
  }

 const style = {
    color: 'red',
    marginTop: '50px',
    fontSize: '12px',
  };

  return (
    <div className={`${colorFormTotal}`}>
      <img src={logo} alt="reactLogo" />
      <form className={`${colorMain}`}>
        <h3>Formulário de contato</h3>
        <br />
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
        {confirmData ? (
          <div className="resultsData">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
          </div>) : (<strong style={style}>Preencha todos os campos Por favor!</strong>)}
      </form>
    </div>
  );
}

export default Main;
