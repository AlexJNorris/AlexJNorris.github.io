import logo from './logo.svg';
import './App.css';

function Home() {
    return (<div class="container" style={{ paddingBottom: "50px" }}>
        <main role="main" class="pb-3">
            <div class="">
                <div class="row">
                    <div class="col-sm-3" style={{ margin: "15px" }}>
                        <img src="/portfolioPhoto.jpg" class="round-corners" height="100%" width="100%" />
                    </div>
                    <div class="col border border-dark bg-kinda-dark text-center round-corners" style={{ margin: "15px" }}>
                        <h2 class="margin-15">Nice to meet you!</h2>
                        <hr />
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
                <hr />
                <div class="row">
                    <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                        <h1 class="display-4" style={{ fontSize: "2rem", marginTop: "20px", marginBottom: "20px" }}>VR Game Made In Unity Game Engine</h1>
                        <hr />
                        <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                            Currently in development is a VR game I have been working on in Unity Game Engine. The goal is to use a laser pointer from above the map to guide a cat to knock things off counters and steal objects. I also used community-made animations and created a simple artificial intelligence for people to try and catch the player's cat.
                        </p>
                    </div>
                    <div class="col">
                        <img class="img-responsive responsive-size" style={{ borderRadius: "25px", padding: "15px" }} src="/catburglars.gif" />
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col">
                        <img class="img-responsive responsive-size" style={{ borderRadius: "25px", padding: "15px" }} src="/9mensmorris.gif" />
                    </div>
                    <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                        <h1 class="display-4" style={{ fontSize: "2rem", marginTop: "20px", marginBottom: "20px" }}>OpenGL 9 Men's Morris</h1>
                        <hr />
                        <p style={{ marginTop: "50px" }}>
                            I developed a rendition of 9 Men's Morris in OpenGL using C++. It features a modified version of A* search for the computer opponent as demonstrated in the gif example. Also used in this project was MSTest unit testing to ensure placement and proper computer opponent behaviors.
                        </p>
                        <a href="https://github.com/AlexJNorris/9MensMorris" class="btn btn-primary" style={{ marginTop: "40px", marginBottom: "20px" }}>Source Code</a>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                        <h1 class="display-4" style={{ fontSize: "2rem", marginTop: "20px", marginBottom: "20px" }}>CI/CD DevOps Pipeline Using Jenkins</h1>
                        <hr />
                        <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                            During the Strategio Enterprise Simulator, our final group project was to develop a CI/CD Pipeline. My group employed Jenkins as the main pipelining tool with a GitHub Webhook as the pipeline trigger and a Kubernetes cluster made with AWS EKS as the endpoint. Inside the pipeline, we built a Docker container, hosted our Django application, tested using the Django testing framework, then pushed the image to the EKS cluster.
                        </p>
                    </div>
                    <div class="col">
                        <img class="img-responsive responsive-size" style={{ borderRadius: "25px", padding: "15px" }} src="/logo-jenkins.jpg" />
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col">
                        <img class="img-responsive responsive-size" style={{ borderRadius: "25px", padding: "15px" }} src="/cbwelcome.png" />
                    </div>
                    <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                        <h1 class="display-4" style={{ fontSize: "2rem", marginTop: "20px", marginBottom: "20px" }}>Commerce Bank Web App</h1>
                        <hr />
                        <p style={{ marginTop: "50px" }}>
                            For my senior capstone, I was a software engineer and project manager for a web application project sponsored by Commerce Bank.  With my group, we used ASP.NET Razor Pages to build up our application, using ASP.NET models to build our database dynamically, Microsoft Identity for user management, and Microsoft Azure to host our application online.
                        </p>
                        <a href="/#cbwebapp" class="btn btn-primary" style={{ marginTop: "40px", marginBottom: "20px" }}>Learn More</a>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                        <h1 class="display-4" style={{ fontSize: "2rem", marginTop: "20px", marginBottom: "20px" }}>Autonomous Drone Swarm</h1>
                        <hr />
                        <p style={{ marginTop: "50px" }}>
                            I developed autonomous flight decision algorithms to run on drone companion computers using the
                            DroneKit-Python library. In support of this project I also designed an IoT network using the XBee Python API to broadcast commands by RF
                            modules.
                        </p>
                        <a href="/#swarm" class="btn btn-primary" style={{ marginTop: "40px", marginBottom: "20px" }}>Watch Demonstration</a>
                    </div>
                    <div class="col">
                        <img class="img-responsive responsive-size" style={{ borderRadius: "25px", padding: "15px" }} src="/swarm.png" />
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col">
                        <img class="img-responsive responsive-size" style={{ borderRadius: "25px", padding: "15px" }} src="/unity.png" />
                    </div>
                    <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                        <h1 class="display-4" style={{ fontSize: "2rem", marginTop: "20px", marginBottom: "20px" }}>C# Drone Simulation Library</h1>
                        <hr />
                        <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                            I developed a C#-based simulation library revolving around drone flight routines using .NET Framework.  Using this setup, I ported the library to Unity for visualization and customization of flight scenarios.
                        </p>
                    </div>
                </div>
            </div>

        </main>
    </div>
    )
}



export default Home;