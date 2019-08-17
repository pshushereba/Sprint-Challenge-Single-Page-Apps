import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";



// TODO: Add missing tabs below
const panes = [
    { menuItem: 'Characters', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]

export default function TabNav() {
    return(
        <>
            <Tab panes={panes} />
        </>
    )
};