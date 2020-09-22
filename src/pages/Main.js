import React from "react";
import Logo from "../assets/logo1.png";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Appointments from "../Main/Containers/Appointments";
import Facilities from "../Main/Containers/Facilities";
import MyHealth from "../Main/Containers/MyHealth";
import Pharmacies from "../Main/Containers/Pharmacies";
import Overview from "../Main/Containers/Overview";
import Doctor from "../Main/Containers/Doctor";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import * as actions from "../store/actions/export";
import { ListItemIcon } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
const Main = (props) => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <section className="dashboard">
        <div className="dashboard__top">
          <nav className="dashboard__nav">
            <div className="dashboard__brand">
              <img src={Logo} alt="Logo" className="dashboard__logo" />
            </div>
            <div
              className="dashboard__profile"
              onClick={(showAccountMenu) =>
                props.onShowAccountMenu(props.showAccountMenu)
              }
            >
              <AccountCircleIcon style={{ fontSize: "4.5rem" }} />
              <ArrowDropDownIcon style={{ color: "white", fontSize: "3rem" }} />
            </div>
          </nav>
          {props.showAccountMenu && (
            <div className="dashboard__account">
              <List
                component="nav"
                className={classes.root}
                aria-label="mailbox folders"
              >
                <ListItem divider>
                  <ListItemText
                    primary={"User 1"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </ListItem>
                <ListItem button divider>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Account" />
                </ListItem>
                <ListItem button divider>
                  <ListItemIcon>
                    <MailOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Messages" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            </div>
          )}
        </div>

        <div className="dashboard__bottom">
          <aside className="dashboard__bottom--left">
            <ul className="dashboard__list">
              <li className="dashboard__item">
                <Link className="dashboard__link" to="/dashboard/overview">
                  Overview
                </Link>
              </li>
              <li className="dashboard__item">
                <Link className="dashboard__link" to="/dashboard/appointments">
                  My Appointments
                </Link>
              </li>
              <li className="dashboard__item">
                <Link className="dashboard__link" to="/dashboard/providers">
                  My Providers
                </Link>
              </li>
              <li className="dashboard__item">
                <Link className="dashboard__link" to="/dashboard/facilities">
                  Facilities
                </Link>
              </li>
              <li className="dashboard__item">
                <Link className="dashboard__link" to="/dashboard/pharmacies">
                  Pharmacies
                </Link>
              </li>
              <li className="dashboard__item">
                <Link className="dashboard__link" to="/dashboard/myHealth">
                  My Health
                </Link>
              </li>
            </ul>
            <div className="dashboard__copy">
              <p>&copy; PrescribeMe 2020</p>
            </div>
          </aside>
          <main className="dashboard__bottom--right">
            <Switch>
              <Route path="/dashboard" children={<Overview />} exact />
              <Route path="/dashboard/overview" children={<Overview />} exact />
              <Route path="/dashboard/providers" children={<Doctor />} exact />
              <Route
                path="/dashboard/appointments"
                children={<Appointments />}
                exact
              />
              <Route
                path="/dashboard/facilities"
                children={<Facilities />}
                exact
              />
              <Route
                path="/dashboard/pharmacies"
                children={<Pharmacies />}
                exact
              />
              <Route path="/dashboard/myHealth" children={<MyHealth />} exact />
            </Switch>
          </main>
        </div>
      </section>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  showAccountMenu: state.dashboard.showAccountMenu,
});

const mapDispatchToProps = (dispatch) => ({
  onShowAccountMenu: (menuState) => dispatch(actions.showUserMenu(menuState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
