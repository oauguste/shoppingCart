import "./NavButtons.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavButtons = ({ name }) => {
  const path =
    name.toLowerCase() === "home"
      ? "/"
      : `/${name.toLowerCase()}`;

  return (
    <div>
      <button className="navButtons">
        <Link to={path}>{name}</Link>
      </button>
    </div>
  );
};

export default NavButtons;

NavButtons.propTypes = {
  name: PropTypes.string,
};
