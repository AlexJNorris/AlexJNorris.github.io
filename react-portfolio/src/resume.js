import logo from './logo.svg';
import './App.css';
import { Document, Page, pdfjs } from 'react-pdf';


function Resume() {
    return (
        <div class="row">
            <div style={{ margin: 0 + ' auto', padding: 15 + 'px' }} class="col text-center left-block green-block round-corners  bg-kinda-dark btn-margin-20">
                <h1 class="display-4" style={{fontSize: 2 + 'rem'}}> Resume </h1>
                <hr />
                <iframe src="https://drive.google.com/file/d/1qh5REW9KDFRAlPLrwhAQFOsl8r8Y_amd/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        </div>
        )
}

export default Resume;