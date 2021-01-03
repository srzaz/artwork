import React from "react";
import ArtGallery from './ArtGallery';
import 'react-awesome-slider/dist/styles.css';


function Gallery() {
    return (
        <div className="home">
            <header>
                <div id="circle-container-gallery">

                    <div class="container">

                        <div class="col-lg-7">
                            <hr />
                            <ArtGallery />
                            <hr />
                        </div>

                    </div>
                </div>
            </header>

        </div >
    );
}

export default Gallery;