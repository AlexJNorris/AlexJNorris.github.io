import logo from './logo.svg';
import './App.css';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-kinda-dark border-bottom box-shadow mb-3">
                <div className="container">
                    <a className="text-gray navbar-brand " asp-area="" asp-page="/Index">Alex Norris</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item nav-mobile">
                                <a className="nav-link  text-white" asp-page="/Resume">CV/Resume</a>
                            </li>
                            <li className="nav-item nav-mobile">
                                <a className="nav-link  text-white" asp-page="/Awards">Awards</a>
                            </li>
                            <li className="nav-item nav-mobile">
                                <a className="nav-link  text-white" asp-page="/Contact">Contact</a>
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
            <Header />
            <div class="container" style={{ paddingBottom: "50px" }}>
                <main role="main" class="pb-3">
                    <div class="">
                        <div class="row">
                            <div class="col-sm-3" style={{ margin: "15px" }}>
                                <img src="/portfolioPhoto.jpg" class="round-corners" height="100%" width="100%"/>
                             </div>
                            <div class="col border border-dark bg-kinda-dark text-center round-corners" style={{ margin: "15px" }}>
                                    <h2 class="margin-15">Nice to meet you!</h2>
                                    <hr/>
                                <div style={{ padding: "10px" }}>
                                            <p>
                                                I am a software engineer looking for new and exciting opportunities.
                                            </p>
                                            <p>
                                                Over my coding journey, I have made use of a plethora of frameworks such as Azure, AWS, Cucumber, Protractor, Springboot, Selenium, .NET Core, Angular, and Unity Game Engine.
                                            </p>
                                    <p style={{ marginBottom: "20px" }}>
                                                Feel free to explore my projects below and contact me if you have any questions!
                                            </p>
                                        </div>
                                </div>
                            </div>
                                <hr/>
                                    <div class="row">
                                        <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                                            <h1 class="display-4" style={{ fontSize: "2rem", marginTop: "20px", marginBottom: "20px" }}>CI/CD DevOps Pipeline Using Jenkins</h1>
                                            <hr/>
                                                <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                                                    During the Strategio Enterprise Simulator, our final group project was to develop a CI/CD Pipeline. My group employed Jenkins as the main pipelining tool with a GitHub Webhook as the pipeline trigger and a Kubernetes cluster made with AWS EKS as the endpoint. Inside the pipeline, we built a Docker container, hosted our Django application, tested using the Django testing framework, then pushed the image to the EKS cluster.
                                                </p>
                                        </div>
                                            <div class="col">
                                                <img class="img-responsive responsive-size" style={{ borderRadius: "25px", padding: "15px" }} src="/logo-jenkins.jpg"/>
                                            </div>
                                            </div>
                                            <hr/>
                                                <div class="row">
                                                    <div class="col">
                                                        <img class="img-responsive responsive-size" style={{ borderRadius: "25px", padding: "15px" }} src="/cbwelcome.png"/>
                                                    </div>
                                                        <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                                                            <h1 class="display-4" style={{fontSize: "2rem", marginTop: "20px", marginBottom: "20px"}}>Commerce Bank Web App</h1>
                                                            <hr/>
                                                                <p style={{marginTop: "50px"}}>
                                                                    For my senior capstone, I was a software engineer and project manager for a web application project sponsored by Commerce Bank.  With my group, we used ASP.NET Razor Pages to build up our application, using ASP.NET models to build our database dynamically, Microsoft Identity for user management, and Microsoft Azure to host our application online.
                                                                </p>
                                                            <a href="/CBWebApp" class="btn btn-primary" style={{marginTop: "40px", marginBottom: "20px"}}>Learn More</a>
                                                        </div>
                                                </div>
                                                        <hr/>
                                                            <div class="row">
                                                                <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                                                                    <h1 class="display-4" style={{fontSize: "2rem", marginTop: "20px", marginBottom: "20px"}}>Autonomous Drone Swarm</h1>
                                                                    <hr/>
                                                                        <p style={{marginTop: "50px"}}>
                                                                            I developed autonomous flight decision algorithms to run on drone companion computers using the
                                                                            DroneKit-Python library. In support of this project I also designed an IoT network using the XBee Python API to broadcast commands by RF
                                                                            modules.
                                                                        </p>
                                                                <a href="/Swarm" class="btn btn-primary" style={{marginTop: "40px", marginBottom: "20px"}}>Watch Demonstration</a>
                                                            </div>
                                                                    <div class="col">
                                                                        <img class="img-responsive responsive-size" style={{ borderRadius: "25px", padding: "15px" }} src="/swarm.png"/>
                                                                    </div>
                                                                    </div>
                                                                    <hr/>
                                                                        <div class="row">
                                                                            <div class="col">
                                                                                <img class="img-responsive responsive-size" style={{ borderRadius: "25px", padding: "15px" }} src="/unity.png"/>
                                                                            </div>
                                                                                <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                                                                                    <h1 class="display-4" style={{fontSize: "2rem", marginTop:"20px", marginBottom: "20px"}}>C# Drone Simulation Library</h1>
                                                                                    <hr/>
                                                                                        <p style={{marginTop: "30px", marginBottom: "20px"}}>
                                                                                            I developed a C#-based simulation library revolving around drone flight routines using .NET Framework.  Using this setup, I ported the library to Unity for visualization and customization of flight scenarios.
                                                                                        </p>
                                                                                </div>
                                                                        </div>
                                                                    </div>

                </main>
            </div>
            <hr />
            <Footer/>
    </div>
  );
}

export default App;
