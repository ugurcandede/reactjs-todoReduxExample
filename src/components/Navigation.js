/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Navbar, Nav, NavItem, NavLink, CustomInput } from "reactstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../redux/actions/themeActions";
import { DARK_MODE, LIGHT_MODE } from "../assets/style";

const Navigation = () => {
  const theme = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedMode === "dark") {
      changeDark();
    } else if (savedMode !== "dark") {
      changeLight();
    }
  }, [changeDark, changeLight]);

  function changeDark() {
    localStorage.setItem("darkMode", JSON.stringify(DARK_MODE.mode));
    return dispatch(switchTheme(DARK_MODE));
  }
  function changeLight() {
    localStorage.setItem("darkMode", JSON.stringify(LIGHT_MODE.mode));
    return dispatch(switchTheme(LIGHT_MODE));
  }

  return (
    <div>
      <Navbar
        style={{ backgroundColor: theme.backgroundColor }}
        light
        expand="md"
      >
        <Link to="/">
          <img
            alt="logo"
            src={logo}
            style={{ height: "100px", width: "auto" }}
          />
        </Link>
        <h4
          style={{ color: theme.primaryTextColor }}
          className="font-weight-normal"
        >
          TodoIst
          <p className="font-weight-light">
            The to do list to organize work & life
          </p>
        </h4>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <CustomInput
              type="switch"
              id="exampleCustomSwitch"
              name="customSwitch"
              label={theme.mode === "light" ? "🌚" : "🌕"}
              onClick={() =>
                theme.mode === "light" ? changeDark() : changeLight()
              }
            />
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/savetodo">Add Todo</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
