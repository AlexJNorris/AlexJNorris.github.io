import logo from './logo.svg';
import './App.css';
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './home.js';
import Contact from './contact.js';
import Resume from './resume.js';
import Awards from './awards.js';
import CBWebApp from './cbWebApp.js';
import Swarm from './swarm.js';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';



function NavbarDropdown() {
    return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <div class="topnav" id="myTopnav">
                    <a className="text-gray navbar-brand " asp-area="" href="/#">Alex Norris</a>
                    <a className="nav-link  text-white" href="/#resume">CV/Resume</a>
                    <a className="nav-link  text-white" href="/#awards">Awards</a>
                    <a className="nav-link  text-white" href="/#contact">Contact</a>
                    <a href="https://github.com/AlexJNorris">
                        <img src="/GitHub_Logo_White.png" height="35px" width="90px" />
                    </a>
                    <a href="https://www.linkedin.com/in/alex-norris-09aa9510a/">
                        <img src="/LI-In-Bug.png" height="32px" width="40px" />
                    </a>
                <a href="javascript:void(0);" class="icon" onClick={function toggle() {var x = document.getElementById("myTopnav");if (x.className === "topnav") {x.className += " responsive";}else {x.className = "topnav";}}}>
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        )
}


function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-kinda-dark border-bottom box-shadow mb-3">
                <div className="navcontainer">
                    <NavbarDropdown/>
                </div>
            </nav>
        </header>
        )
}

function Footer() {
    return (
        <footer class="border-top footer text-muted bg-kinda-dark">
            <div class="container">
                2024 - Alex Norris' Portfolio Website
            </div>
        </footer>
        )
}



function App() {
    return (
    
        <div className="body bg-black text-white">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Alex Norris: Software Engineer</title>
                <link rel="stylesheet" href="~src/bootstrap/dist/css/bootstrap.min.css" />
            </head>
            <Router >
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/resume"
                        element={<Resume />}
                    />
                    <Route
                        path="/awards"
                        element={<Awards />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                    <Route
                        path="/cbwebapp"
                        element={<CBWebApp />}
                    />
                    <Route
                        path="/swarm"
                        element={<Swarm />}
                    />
                </Routes>
                <hr />
                <Footer />
            </Router>
        </div>
  );
}

export default App;
