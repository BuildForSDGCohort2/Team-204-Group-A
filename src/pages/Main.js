import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo1.png";
import { Dropdown } from "react-bootstrap";

const Main = () => {
  return (
    <section className="dashboard">
      <div className="dashboard__top">
        <nav className="dashboard__nav">
          <div className="dashboard__brand">
            <img src={Logo} alt="Logo" className="dashboard__logo" />
          </div>
          <div className="dashboard__profile">
            <Dropdown>
              <button
                aria-haspopup="true"
                aria-expanded="false"
                id="dropdown-basic"
                type="button"
                className="dropdown-toggle"
              ></button>
              {/* <Dropdown.Toggle id="dropdown-basic">
                <div className="dashboard__avatar"></div>
              </Dropdown.Toggle> */}

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
      </div>
      <div className="dashboard__bottom">
        <aside className="dashboard__bottom--left">
          <ul className="dashboard__list">
            <li className="dashboard__item">
              <NavLink className="dashboard__link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="dashboard__item">
              <NavLink className="dashboard__link" to="/home">
                My Appointments
              </NavLink>
            </li>
            <li className="dashboard__item">
              <NavLink className="dashboard__link" to="/home">
                Facilities
              </NavLink>
            </li>
            <li className="dashboard__item">
              <NavLink className="dashboard__link" to="/home">
                Pharmacies
              </NavLink>
            </li>
            <li className="dashboard__item">
              <NavLink className="dashboard__link" to="/home">
                My Health
              </NavLink>
            </li>
          </ul>
        </aside>
        <main className="dashboard__bottom--right"></main>
      </div>
    </section>
  );
};

export default Main;
