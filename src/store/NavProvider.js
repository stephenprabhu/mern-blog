import React, {useState} from 'react';
import NavContext from './nav-context';


const NavProvider = (props) => {
const [activePageNum,setActivePageNum]=useState(0);

    const activePageHandler=(num)=>{
        setActivePageNum(num);
    }
    const navContext ={
        activePage: activePageNum,
        setActivePage: activePageHandler
    }
    return (
        <NavContext.Provider value={navContext}>
            {props.children}
        </NavContext.Provider>
    )
}

export default NavProvider
