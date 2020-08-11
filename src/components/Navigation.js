import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  // NavbarBrand,
  // NavbarToggler,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from "reactstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <Link to="/">
          <img
            alt="logo"
            src={logo}
            style={{ height: "100px", width: "auto" }}
          />
        </Link>
        <h4 className="font-weight-normal">
          TodoIst
          <p className="font-weight-light">
            The to do list to organize work & life
          </p>
        </h4>
        {/* <NavbarToggler onClick={toggle} /> */}
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/savetodo">Add Todo</Link>
            </NavLink>
          </NavItem>
          {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
