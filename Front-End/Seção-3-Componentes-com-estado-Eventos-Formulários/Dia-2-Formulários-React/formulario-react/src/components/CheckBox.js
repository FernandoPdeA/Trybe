import React from 'react';

class Checkbox extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='checkbox'>
        Vai comparecer a conferência?
        <input id='checkbox' type="checkbox" name="comparecera"
          value={value}
          onChange={handleChange} />
      </label>
    );
  }
}

export default Checkbox;