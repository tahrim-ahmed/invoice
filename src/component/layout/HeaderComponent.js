import * as React from "react";
import { MenuItems } from "./MenuItems"
import {Component} from "react";
import './HeaderComponent.css';
import {Buttons} from "../button/Buttons";

class HeaderComponent extends Component {

    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    logOut = () => {
        window.location.href = "/login"
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <i className="fas fa-file-invoice"/>
                    Invoice
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}>

                    </i>
                </div>
                <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>
                    {
                        MenuItems.map((items, index) => {
                            return(
                                <li key={index}>
                                    <a className={items.className} href={items.link}>
                                        {items.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <Buttons onclick={this.logOut}>
                    Logout
                </Buttons>
            </nav>
        )
    }
}

export default HeaderComponent;
