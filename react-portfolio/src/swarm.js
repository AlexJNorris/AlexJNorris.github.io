import './App.css';

function Swarm() {
    return (
        <div class="row"style={{ paddingBottom: "50px" }}>
            <div style={{ margin: 0 + " auto", padding: 15 + "px" }} class="col text-center left-block green-block round-corners  bg-kinda-dark btn-margin-20">
                <h1 class="display-4" style={{ fontSize: 2 + "rem" }}> Swarm Formation Demonstration </h1>
                <hr/>
                    <p class="description">
                        Description: In this demonstration, the goal was to have the first drone take off and move to a predefined point and for the second to catch up.  Upon the second catching up, both engaged in landing routines.
                    </p>
                    <hr/>
                        <iframe src="/swarm_demo.mp4#zoom=50" style={{ width: 100 + "%", height: 700 + "px" }} frameborder="0"></iframe>
            </div>
        </div>
    )
}



export default Swarm;