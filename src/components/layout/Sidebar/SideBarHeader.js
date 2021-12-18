import React,{useContext} from 'react';
import NavContext from '../../../store/nav-context';

const SideBarHeader = () => {
    const context = useContext(NavContext);
    return (
        <>
        <h1 id="colorlib-logo"><a href="/">Stephen<span>.</span></a></h1>
        <nav id="colorlib-main-menu" role="navigation">
        <ul>
            <li className={context.activePage===0 ? "colorlib-active":""}><a href="/">Home</a></li>
            <li className={context.activePage===1 ? "colorlib-active":""}><a href="photography.html">Photography</a></li>
            <li className={context.activePage===2 ? "colorlib-active":""}><a href="/about">About</a></li>
            <li className={context.activePage===3 ? "colorlib-active":""}><a href="/contact">Contact</a></li>
        </ul>
        </nav>
        </>
    )
}

export default SideBarHeader;
