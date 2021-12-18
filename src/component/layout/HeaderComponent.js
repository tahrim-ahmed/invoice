import * as React from "react";
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className="nav-flex">
            <Link to="/login">
                Login
            </Link>
            <Link to="/invoice">
                Invoice
            </Link>
        </div>
    )
}

export default HeaderComponent;
