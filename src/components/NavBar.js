import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {UserContext} from '../context/user';
import "./css/style.css";

function NavBar () {
    const {user} = useContext(UserContext)

 
    return(
        <div className="nav-bar">
            <NavLink to ="/">
            HOME
            </NavLink>
        </div>
    )
}
export default NavBar

