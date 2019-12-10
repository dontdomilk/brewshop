import React from 'react';
import SideMenu from '../side-menu';
import './style.scss';

const PageWrapper = ({children}) => {
    return (
        <main>
            <div className="main-wrapper">
                <SideMenu/>
                <div className="content">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default PageWrapper;