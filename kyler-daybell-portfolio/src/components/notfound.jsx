import React, { Component } from 'react';
import '../public/css/404.css'

class Notfound extends Component{
    render() {
        return (
            <>
            <div class="header-text">
                <h1>404 Error: This page does not exist</h1>
                <a href="/" class="button">Take me home</a>
            </div>

            <div class="image-header">
            </div>
            </>
          );
    }
}
export default Notfound;