import React from "react";
import {Tab, Menu, Icon} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <div class="ui menu">
            <NavLink exact activeClassName="active" to={'/'}>
                <a class="item">
                    Homepage
                </a>
            </NavLink>
            <NavLink exact activeClassName="active" to={'/characters'}>
                <a class="item">
                    Characters
                </a>
            </NavLink>
            <NavLink exact activeClassName="active" to={'/locations'}>
                <a class="item">
                    Location
                </a>
            </NavLink>
            <NavLink exact activeClassName="active" to={'/episodes'}>
                <a class="item">
                    Episode
                </a>
            </NavLink>
        </div>
    )
};