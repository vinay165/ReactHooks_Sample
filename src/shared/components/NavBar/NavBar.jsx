import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ routes }) => {
    return (
        <div className="tabs_options">
            <ul>
                {
                    routes && routes.map((routeInfo, index) => {
                        const {path, displayName} = routeInfo;
                        return (
                            <li key={"tab-" + index} >
                                <NavLink to={path} activeClassName="active">{displayName}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default NavBar;