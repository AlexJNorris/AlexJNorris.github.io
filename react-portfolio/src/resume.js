import logo from './logo.svg';
import './App.css';
import { Document, Page, pdfjs } from 'react-pdf';


function Resume() {
    return (
        <div class="row">
            <div style={{ margin: 0 + ' auto', padding: 15 + 'px' }} class="col text-center left-block green-block round-corners  bg-kinda-dark btn-margin-20">
                <h1 class="display-4" style={{fontSize: 2 + 'rem'}}> Resume </h1>
                <hr />
                <div className="icontainer">
                    <iframe className="responsive-iframe" src="https://docs.google.com/document/d/e/2PACX-1vSqhMtCUi60cEcVjBkr-8XiXzLx_FowObqsTl65rbV2U5Lr4bgf87zFGyOOf0_OuT4l5D4EQ3KykP91/pub?embedded=true" allow="autoplay"></iframe>
                </div>
            </div>
        </div>
        )
}

export default Resume;