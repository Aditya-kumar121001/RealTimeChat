/* eslint-disable no-unused-vars */
import React from 'react'
import '../App.css'

import { useAuth0 } from "@auth0/auth0-react";
import Navbar from './Navbar';


export default function Homepage() {
    const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0();
    
    return (
        <Navbar/>
    );
}
