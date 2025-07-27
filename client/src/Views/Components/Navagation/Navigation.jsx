import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavItem, NavLink, Nav, Button, Col, Row } from "reactstrap";
import { faBug, faPersonDotsFromLine } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { signOut, reset } from "../../../Controllers/Reducers/authSlice";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faWrench,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const dispatch = useDispatch();

  const history = useNavigate();

  function onSignOut() {
    dispatch(signOut());
    dispatch(reset());
    history("/user/login");
  }

  return (
   <div className="navbar-section">
  <div className="navbar-content">
    <div className="logo">
      <h1 id="navtitle">
        <FontAwesomeIcon icon={faBug} className="pe-4" />
        Bug Tracker
      </h1>
    </div>

    <Nav className="nav-links">
      <NavItem>
        <NavLink tag={Link} to="/">
          <FontAwesomeIcon icon={faNetworkWired} /> Dashboard
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/viewbugs">
          <FontAwesomeIcon icon={faMapMarkedAlt} /> View All Bugs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/create">
          <FontAwesomeIcon icon={faWrench} /> Create New Bug
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/mybugs">
          <FontAwesomeIcon icon={faPersonDotsFromLine} /> Assigned To Me
        </NavLink>
      </NavItem>
      <NavItem>
        <Button outline size="sm" color="info" onClick={onSignOut}>
          Sign Out
        </Button>
      </NavItem>
    </Nav>
  </div>
</div>


  );
}
