import React from 'react';
import { Link } from 'react-router-dom';

class Content extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    const { history: { push } } = this.props;
     return (
      <div>
        <h2>Conteúdo do curso</h2>
        <div>
          <Link to='fundamentals' >Módulo: Fundamentos</Link>
        </div>
        <div>
          <Link to='front' >Módulo: Front-end</Link>
        </div>
        <div>
          <Link to='back' >Módulo: Back-end</Link>
        </div>
        <div>
          <Link to='css' >Módulo: Ciência da Computação</Link>
        </div>
        <button onClick={() => push("/") }>Ir para home</button>
      </div>
    );
  }
}

export default Content;
