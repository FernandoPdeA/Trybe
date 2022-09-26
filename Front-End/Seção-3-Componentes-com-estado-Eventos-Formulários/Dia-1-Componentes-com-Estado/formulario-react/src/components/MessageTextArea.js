import React from "react";

class MessageTextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (value.length > 40) error = "Texto muito grande";
    return (
      <div>
        <label htmlFor="messageTextArea">
          Mensagem:
          <textarea
            name="messageTextArea"
            id="messageTextArea"
            value={value}
            onChange={handleChange}
            maxLength="41"
          />
        </label>
        <span className="messageErrorInput">{error ? error : ""}</span>
      </div>
    );
  }
};

export default MessageTextArea;