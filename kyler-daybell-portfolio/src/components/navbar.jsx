import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Navbar extends Component {
    render() {
      return (
        <div className="bar">
            <NavLink className="bar-item-main roboto-text-thin" to="/">
              kylerdaybell.com
            </NavLink >
            <NavLink className="bar-item roboto-text-thin" to="/Projects">
              projects
            </NavLink >
            <NavLink className="bar-item roboto-text-thin" to="/Examples">
              examples
            </NavLink >
        </div>
      );
    }
  }

export default Navbar;