import React from 'react';
import {NavLink} from 'react-router-dom';
import Routes from '../../features/router/routes';
import './style.scss';


const SideMenu = () => {
    return (
        <aside className="side-menu">
            {Routes.map((item, i) => (
                <div className="side-menu-link" key={`side-menu-link-${i}`}>
                    <NavLink
                        to={item.path}
                        activeClassName="active-link"
                        exact={item.exact || false}
                    >{item.displayName}</NavLink>
                </div>
            ))}
        </aside>
    )
};

export default SideMenu;