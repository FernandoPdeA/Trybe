import React from "react";

class MessageEnail extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (value.indexOf('@') === -1) error = "Digite um email válido";
    if (value.length > 30) error = "Email muito grande";
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input type="email"
            id="email"
            name="email"
            value={value}
            onChange={handleChange}
          />
        </label>
        <span className="messageErrorInput" >{error ? error : ""}</span>
      </div>
    );
  }
}

export default MessageEnail;