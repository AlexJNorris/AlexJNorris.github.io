import logo from './logo.svg';
import './App.css';

function CBWebApp() {
    return (
        <div class="container" style={{ paddingBottom: "50px" }}>
            <div class="text-center">
                <h2 class="margin-15">Commerce Bank Web Application</h2>
            </div>
            <hr/>
            <div class="row">
                <div class="col">
                    <img class="img-responsive responsive-size" style={{ borderRadius: 25 + "px", padding: 15 + "px" }} src="/cbwebapp/cbtransactions.png"/>
                </div>
                <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                    <h1 class="display-4" style={{fontSize: 2 + "rem", marginTop: 10 + "px", marginBottom: 20 + "px"}}>Front-End</h1>
                    <hr/>
                    <ul style={{marginTop: 10 + "px"}} class="description">
                        <li style={{ marginBottom: 20 + "px" }}>
                            Implemented using ASP.NET Razor Pages. Hosted on Microsoft Azure.
                        </li>
                        <li style={{ marginBottom: 20 + "px" }}>
                            Featured classic Commerce Bank color palette.
                        </li>
                        <li style={{ marginBottom: 20 + "px" }}>
                            Contained pages to view transaction history, notifications, and adjust user settings.
                        </li>
                        <li>
                            Rounded corners with happy images shown throughout.
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                    <h1 class="display-4" style={{ fontSize: 2 + "rem", marginTop: 10 + "px", marginBottom: 20 + "px" }}>Back-End</h1>
                    <hr/>
                    <ul style={{ marginBottom: 20 + "px" }} class="description">
                        <li style={{ marginBottom: 30 + "px" }}>
                            Implemented database using ASP.NET models to dynamically build a SQL database hosted on Microsoft Azure.
                        </li>
                        <li style={{ marginBottom: 30 + "px" }}>
                            Developed notification rules using polymorphism after inheriting many notification rule classes from a general purpose one.
                        </li>
                        <li style={{ marginBottom: 30 + "px" }}>
                            In the same post routine where notifications are sent, email notifications were added using SendGrid Email Services.
                        </li>
                        <li>
                            Used Microsoft Identity framework to secure user information and to maintain our user login and registration.
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <img class="img-responsive responsive-size" style={{ borderRadius: 25 + "px", padding: 15 + "px" }} src="/cbwebapp/cbemailnotif.png"/>
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col">
                    <img class="img-responsive responsive-size" style={{ borderRadius: 25 + "px", padding: 15 + "px" }} src="/cbwebapp/cdunit.png"/>
                </div>
                <div class="col-sm-5 text-center round-corners left-block bg-kinda-dark">
                    <h1 class="display-4" style={{ fontSize: 2 + "rem", marginTop: 10 + "px", marginBottom: 20 + "px" }}>Quality Assurance</h1>
                    <hr/>
                    <ul style={{ marginBottom: 20 + "px" }} class="description">
                        <li style={{ marginBottom: 30 + "px" }}>
                            Unit testing was performed using MSTest.
                        </li>
                        <li style={{ marginBottom: 30 + "px" }}>
                            Tested very general methods going to and from our database context to ensure consistent data interactions.
                        </li>
                        <li>
                            Temporary databases were used here using SQLite.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default CBWebApp;