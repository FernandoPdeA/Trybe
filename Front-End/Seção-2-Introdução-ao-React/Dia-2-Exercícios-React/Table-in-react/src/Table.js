import React, { Component } from "react";
import UserName from "./UserName";
import UserOtherInfo from "./UserOtherInfo";
import PropTypes from "prop-types";

class Table extends Component {
  render() {
    const users =
      [
        {
          nome: "Fernando Andrade",
          idade: 38,
          profissao: "Desenvolvedor",
          email: 'pupygreen@gmail.com',
          avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png'
        },
        {
          nome: "Rodrigo Andrade",
          idade: 40,
          profissao: "Desenvolvedor",
          email: 'digorro@gmail.com',
          avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png'
        },
        {
          nome: "Bruna Andrade",
          idade: 42,
          profissao: "Desenvolvedora",
          email: 'bruna@gmail.com',
          avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
        },
        {
          nome: "Adriano Andrade",
          idade: 42,
          profissao: "Desenvolvedor",
          email: 'dri@gmail.com',
          avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png'
        }
      ];
    return (
      users.map((user, index) => (
        <div key={index}>
          <UserName name={user.nome} avatar={user.avatar}></UserName>
          <UserOtherInfo idade={user.idade} profissao={user.profissao} email={user.email}></UserOtherInfo>
        </div >
      ))
    );
  }
};

Table.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      idade: PropTypes.number.isRequired,
      profissao: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    })
  )
};

Table.defaultProps = {
  users: []
};

export default Table;