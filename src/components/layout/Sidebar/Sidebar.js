import React from 'react';
import SidebarFooter from './SidebarFooter';
import SideBarHeader from './SideBarHeader';

const Sidebar = () => {
    return (
        <>
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
            <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center" style={{overflowY: "hidden"}}>
                <SideBarHeader />
                <SidebarFooter />
            </aside>
        </>
    )
}

export default Sidebar;
