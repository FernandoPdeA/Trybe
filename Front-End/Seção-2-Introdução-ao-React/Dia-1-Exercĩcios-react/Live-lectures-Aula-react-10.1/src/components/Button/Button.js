import React from 'react';
import "./Button.css"

class Button extends React.Component {
  state = {
    toggle: false,
  }

  render(){
    const { children } = this.props;
    return (
      <button 
        className={ `button ${ this.state.toggle && 'active'}`}        
        onClick={ () => this.setState({toggle: !this.state.toggle})}
      >
        { children }
      </button>
    )
  }
}

export default Button;