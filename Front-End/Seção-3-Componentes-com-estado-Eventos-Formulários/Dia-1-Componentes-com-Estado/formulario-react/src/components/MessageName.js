import React from "react";

class MessageName extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (value.length > 0 && value.length <= 3) error = "Digite o nome completo";
    return (
      <div>
        <label htmlFor='nome'>
          Nome:
          <input id='nome' type="text" name="nome"
            value={value}
            onChange={handleChange} />
        </label>
        <span className="messageErrorInput">{error ? error : ''}</span>
      </div>
    );
  }
}

export default MessageName;