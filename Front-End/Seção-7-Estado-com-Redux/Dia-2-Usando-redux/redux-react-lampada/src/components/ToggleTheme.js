import { connect } from 'react-redux';
import { BsToggleOff, BsToggleOn, BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

function ToggleTheme({ themeHeader, dispatch }) {
  return (
    <div className="icons">
      <span className="sun"><BsFillSunFill /></span>
      <button
        type="button"
        onClick={ () => dispatch({ type: 'CHANGE_THEME_HEADER' }) }
      >
        { themeHeader === 'light'
          ? <BsToggleOff className="light" /> : <BsToggleOn className="dark" />}
      </button>
      <span className="moon"><BsFillMoonFill /></span>
    </div>
  );
}

const mapStateToProps = (globalState) => ({
  themeHeader: globalState.theme,
});

export default connect(mapStateToProps)(ToggleTheme);
