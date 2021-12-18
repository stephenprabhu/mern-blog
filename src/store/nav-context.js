import React from 'react';

const NavContext = React.createContext({
    activePage: 0,
    setActivePage: (num)=>{}
});

export default NavContext;
