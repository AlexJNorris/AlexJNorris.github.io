import logo from './logo.svg';
import './App.css';

function Awards() {
    return (
        <div>
            <div class="row">
                <div style={{ margin: 0 + ' auto',  padding: 15 + "px"}} class="col text-center left-block green-block round-corners  bg-kinda-dark btn-margin-20">
                    <h1 class="display-4" style={{ fontSize: 2 + "rem" }}> Strategio Enterprise Simulator - Certificate of Completion </h1>
                    <hr />
                    <div className="icontainer">
                        <iframe className="responsive-iframe" src="/StrategioCert.pdf#zoom=50%" allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="row">
                    <div style={{ margin: 0 + ' auto', padding: 15 + "px" }} class="col text-center left-block green-block round-corners  bg-kinda-dark btn-margin-20">
                    <h1 class="display-4" style={{ fontSize: 2 + "rem" }}> Hack-A-Roo - Third Place Award </h1>
                    <hr/>
                    <div className="icontainer">
                        <iframe className="responsive-iframe" src="/hack-a-roo_certificate.pdf#zoom=50%" allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Awards;