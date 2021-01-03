import React from "react";
import Artwork from './Artwork';

function Home() {
    return (

        <div className="home">
            <header>
                <div id="circle-container">
                    <h1>my artwork</h1>
                    <div id="cc">
                        <div class="circle" id="five"></div>
                        <div class="circle" id="four"></div>
                        <div class="circle" id="three"></div>
                        <div class="circle" id="two"></div>
                        <div class="circle" id="one"></div>
                    </div>
                </div>
            </header>
            <div class="container">
                <div class="row align-items-center my-7">
                    <div class="col-lg-10">
                        <hr />
                        <Artwork />
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;