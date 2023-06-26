import NavButtons from "./NavButtons";
import "./NavHeader.css";

const NavHeader = () => {
  return (
    <div className="navheader">
      <ul className="list">
        <div className="left">
          <li>
            <NavButtons name="Home" />
          </li>
          <li>
            <NavButtons name="About" />
          </li>
        </div>
        <div className="right">
          <li>
            <NavButtons name="Products" />
          </li>
          <div className="cartButton">
            <li>
              <NavButtons name="Cart" />
            </li>
            <div className="box">5</div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default NavHeader;
