import React from 'react';

class Age extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (value < 18) error = 'Você deve ser maior de idade';
    return (
      <label htmlFor='idade'>
        Idade:
        <input id='idade' type="number" name="idade"
          value={value}
          onChange={handleChange} />
        <span className='messageErrorInput'>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Age;