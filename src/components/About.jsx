import React from "react";
import email from "../assets/emailicon.png";
import github from "../assets/github_icon.png";
import linkedin from "../assets/linkedin_icon.png";

function About() {
    return (
        <div className="about">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <h1 class="font-weight-light">About</h1>
                        <p>
                            Amateur programmer, amateur artist, and Computer Science student.
                         </p>
                    </div>
                </div>
                <div class="col-lg-7">

                    <a href="mailto: srz2@humboldt.edu">
                        <img src={email} style={{ height: '10%', width: '10%', margin: '25px 25px 25px 25px' }} /> </a>

                    <a href="https://github.com/srzaz">
                        <img src={github} style={{ height: '10%', width: '10%', margin: '25px 25px 25px 25px' }} /> </a>

                    <a href="https://www.linkedin.com/in/stephen-zazueta-a126901b8/">
                        <img src={linkedin} style={{ height: '10%', width: '10%', margin: '25px 25px 25px 25px' }} /> </a>
                </div>


            </div>
        </div>
    );
}

export default About;