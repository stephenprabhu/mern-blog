import React from 'react';
import SocialIcons from '../../UI/SocialIcons';
import moment from 'moment';

const SidebarFooter = () => {
    return (
    <div className="colorlib-footer">
        <p>
        Copyright &copy; {moment().format('YYYY')} All rights reserved <br/>
         <a href="https://stephenprabhu.com" rel="noreferrer" target="_blank">Created By Stephen</a></p>
        <SocialIcons />
    </div>
    )
}

export default SidebarFooter


