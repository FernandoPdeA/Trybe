import React, { Component } from "react";
import './UserName.css';
import PropTypes from "prop-types";

class Username extends Component {
  render() {
    const { name, avatar } = this.props;
    return (
      <span className="name">
        <p>{name}</p>
        <img src={avatar} alt="Avatar do personagem" />
      </span>
    );
  }
};

Username.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

Username.defaultProps = {
  name: "Nome não informado",
  avatar: "Avatar não informado"
};

export default Username;