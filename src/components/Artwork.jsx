import React, { Component } from 'react';
import ARTWORK from '../data/artwork';
import 'react-awesome-slider/dist/styles.css';


class Artwork extends Component {
    render() {
        const { title, image, year } = this.props.art;

        return (
            <div style={{ display: 'inline-block', width: '50%', height: '50%' }}>
                <h2>{title} ({year})</h2>
                <div class="thumb">
                    <a href={"#" + title}>
                        <img src={image} alt={title} style={{ width: '100%', height: '100%' }} />
                    </a>

                </div>
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