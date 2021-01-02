import React from "react";
import Artwork from './Artwork';

function Home() {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
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