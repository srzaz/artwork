import React, { Component } from 'react';
import ARTWORK from '../data/artwork';

class Artwork extends Component {
    render() {
        const { title, image } = this.props.project;
        return (
            <div class="art-card" style={{ display: 'inline-block' }}>
                <h2>{title}</h2>
                <img src={image} alt='profile' style={{ width: '70%', height: '70%' }} />
                <hr />
            </div>
        )
    }
}


class Artworks extends Component {
    render() {
        return (
            <div>
                <h2>Favorites</h2>
                <div>
                    {
                        ARTWORK.map(ARTWORK => {
                            return (
                                <Artwork key={ARTWORK.id} project={ARTWORK} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Artworks;