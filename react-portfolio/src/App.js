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

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-kinda-dark border-bottom box-shadow mb-3">
                <div className="container">
                    <a className="text-gray navbar-brand " asp-area="" href="/#">Alex Norris</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item nav-mobile">
                                <a className="nav-link  text-white" href="/#resume">CV/Resume</a>
                            </li>
                            <li className="nav-item nav-mobile">
                                <a className="nav-link  text-white" href="/#awards">Awards</a>
                            </li>
                            <li className="nav-item nav-mobile">
                                <a className="nav-link  text-white" href="/#contact">Contact</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li style={{ marginRight: "15px" }}>
                                <form>
                                    <a href="https://github.com/AlexJNorris">
                                        <img src="/GitHub_Logo_White.png" height="35px" width="90px" />
                                    </a>
                                </form>
                            </li>
                            <li className="nav-mobile">
                                <form>
                                    <a href="https://www.linkedin.com/in/alex-norris-09aa9510a/">
                                        <img src="/LI-In-Bug.png" height="32px" width="40px" />
                                    </a>
                                </form>
                            </li>
                        </ul>
                    </div>
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
