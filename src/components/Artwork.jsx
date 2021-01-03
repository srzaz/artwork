import React, { Component } from 'react';
import ARTWORK from '../data/artwork';
import 'react-awesome-slider/dist/styles.css';


class Artwork extends Component {
    render() {
        const { title, image } = this.props.art;

        return (
            <div style={{ display: 'inline-block' }}>
                <h2>{title}</h2>

                <a href={"#" + title}>
                    <div class="art-card">
                        <img src={image} alt='profile' style={{ width: '100%', height: '100%' }} />
                    </div>
                </a>
                <hr />


                <a href="#" class="lightbox" id={title}>
                    <span style={{ backgroundImage: `url(${image})` }}></span>
                </a>
            </div >


        )
    }
}


class Artworks extends Component {
    render() {
        return (
            <div>
                <div >
                    {
                        ARTWORK.map(ARTWORK => {
                            return (
                                <Artwork key={ARTWORK.id} art={ARTWORK} />
                            );
                        })
                    }
                </div>

            </div>
        )
    }
}


export default Artworks;