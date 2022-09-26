import React from "react";

class SelectCity extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="select">
        Natural de:
        <select
          name="cidade"
          id="select"
          value={value}
          onChange={handleChange} >
          <option value="" disabled>Selecione uma cidade:</option> 
          <option value="Uruguaiana">Uruguaiana</option>
          <option value="Curitiba">Curitiba</option>
          <option value="Joinville">Joinville</option>
          <option value="Porto Alegre">Porto Alegre</option>
          <option value="Salvador">Salvador</option>
        </select>
      </label>
    );
  }
}

export default SelectCity;