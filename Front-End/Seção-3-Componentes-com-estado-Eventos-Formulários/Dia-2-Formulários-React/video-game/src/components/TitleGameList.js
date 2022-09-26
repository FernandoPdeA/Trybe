import React from 'react';
import PropTypes from 'prop-types';

class TitleGameList extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <header>
        <h1>
          { children }
        </h1>
      </header>
    );
  }
}

TitleGameList.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TitleGameList;
