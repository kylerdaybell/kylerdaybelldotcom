import React, { Component } from 'react';
import singlelinelogo from '../public/images/Single-Line-Logo.png'
class Navbar extends Component {
    render() {
      return (
        <div class="bar">
            <a href="/" class="bar-item-main roboto-text-thin">kylerdaybell.com</a>
            <a href="/About" class="bar-item roboto-text-thin">About</a>
            <a href="/Projects" class="bar-item roboto-text-thin">Projects</a>
            <a href="/Examples" class="bar-item roboto-text-thin">Examples</a>
        </div>
      );
    }
  }

export default Navbar;