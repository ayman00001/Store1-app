import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends Component {
    render() {
        return(
            <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                <h1>Cart</h1>
                    <span className="navbar-brand mb-0 h1">
                        <span className="badge text-bg-primary">0</span>
                        </span>
                        </div>
            </nav>
            </>
        )
    }
}

export default Navbar;