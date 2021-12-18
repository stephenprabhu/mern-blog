import React from 'react'

const SocialIcons = (props) => {
    const classes = ''+props.className;
    return (
        <ul className={classes}>
            <li><a href="https://github.com/stephenprabhu"><i className="icon-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/stephen-machado-prabhu-8549277a/"><i className="icon-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/stephen_prabhu_133/"><i className="icon-instagram"></i></a></li>
        </ul>
    )
}

export default SocialIcons
