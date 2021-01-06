import React from "react";
import Artwork from './Artwork';

function Home() {
    return (

        <div className="home">
            <header>
                <div id="circle-container">
                    <h1 style={{ color: "white" }}>Stephen Zazueta</h1>
                    <a href="gallery">
                        <div id="cc">
                            <div class="circle" id="five"></div>
                            <div class="circle" id="four"></div>
                            <div class="circle" id="three"></div>
                            <div class="circle" id="two"></div>
                            <div class="circle" id="one"></div>
                        </div>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Home;