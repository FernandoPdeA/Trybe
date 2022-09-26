import React, { Component } from "react";
import './UserOtherInfo.css';
import PropTypes from "prop-types";

class UserOtherInfo extends Component {
  render() {
    const { idade, profissao, email } = this.props;
    return (
      <span className="otherInfo">
        <p>Idade = {idade}</p>
        <p>Profissao = {profissao}</p>
        <p className="separator">Email = {email}</p>
      </span>
    );
  }
}

UserOtherInfo.propTypes = {
  idade: PropTypes.number.isRequired,
  profissao: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

UserOtherInfo.defaultProps = {
  idade: 'Idade não informada',
  profissao: "Profissão não informada",
  email: "Email não informado"
};

export default UserOtherInfo;


