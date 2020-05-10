
import React from 'react'
import {Link } from 'react-router-dom';

const Header = (props) => {
    return(
<div className="Header">user: {props.user} 
     <div><Link to="/">Logout</Link></div>
</div>
    )
}

export default Header;