import React from "react";
import Artwork from './Artwork.jsx';
import 'react-awesome-slider/dist/styles.css';


function Gallery() {
    return (
        <div className="home">
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

export default Gallery;