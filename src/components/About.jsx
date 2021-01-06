import React from "react";
import surreal from '../assets/surreal.jpg';

function About() {
    return (
        <div className="about">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <div class="thumb">
                            <a href="#">
                                <img src={surreal} style={{ height: '100%', width: '100%' }} /> </a>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">About</h1>
                        <p>
                            Amateur programmer, amateur artist, and Computer Science student.
            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;