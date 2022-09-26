import React from 'react';
import logo from './logo.svg'; // const logo = require('./logo.svg');
import './App.css'; //require('./App.css');
import HelloWorld from './HelloWorld';
import Button from './components/Button/Button';


function myNewLove(newLove){
  return `Agora estou amando o(a) ${newLove}`
}

const thingsILove = ['JS', 'Trybe', 'Turma25B', 'React', 'MongoDb'];

// function App() {
//   const name = "Luanzito";
//   return (
//     <>
//       <h1 className="hello-world" id="teste">Hello World!!!</h1>
//       <p>E turma 25B gosta muito do React</p>
//       <div>
//         <span>
//           <strong>O professor da turma é o { name } </strong>
//         </span>
//         <ul>
//           <li> { myNewLove("React")} </li>
//           { thingsILove.map((thing) => <li key={thing}> { myNewLove(thing) } </li>) }
//         </ul>
//       </div>
//     </>
//   );
// }


class App extends React.Component {
  render(){
    const name = "Luanderson"
    return (
    <>
      { /* helloworld */}
      <HelloWorld></HelloWorld>
      <div>
        <span>
          <strong>O professor da turma é o { name } </strong>
        </span>
        <ul>
          <li> { myNewLove("React")} </li>
          { thingsILove.map((thing) => <li key={thing}> { myNewLove(thing) } </li>) }
        </ul>
        <Button>Click ME</Button>
      </div>
    </>
    );
  }
}

export default App;

// function,
// const,
// let,
// for,
// var,
// class,
