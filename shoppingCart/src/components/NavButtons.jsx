import "./NavButtons.css";
import PropTypes from "prop-types";

const NavButtons = ({ name }) => {
  return (
    <div>
      <button>{name}</button>
    </div>
  );
};

export default NavButtons;

NavButtons.propTypes = {
  name: PropTypes.string,
};
