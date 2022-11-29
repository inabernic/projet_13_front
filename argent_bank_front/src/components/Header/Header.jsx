import React from 'react'
//import './Nav.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (

        <nav class="main-nav">
            <a class="main-nav-logo" href="./index.html">
                <Link className="link" to="/" >
                    <img
                        class="main-nav-logo-image"
                        src="./../src/assets/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                </Link>
                <h1 class="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a class="main-nav-item" href="./sign-in.html">
                    <i class="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        </nav>
    )
}