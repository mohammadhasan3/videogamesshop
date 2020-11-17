import React from "react";

//Styling
import { ThemeButton, Logo, NavStyled, NavItem } from "../styles";
import logo from "../logo3.jpg";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo to="/">
        <img src={logo} alt="Red Panda Gaming"></img>
      </Logo>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavItem to="/games" style={{ margin: 10, float: "right" }}>
            Games
          </NavItem>
          <ThemeButton onClick={props.toggleTheme}>
            {props.themeText[props.idx]}{" "}
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
