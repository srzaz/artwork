import React, { Component } from 'react';
import ARTWORK from '../data/artwork';
import AwesomeSlider from 'react-awesome-slider';




class ArtGalleries extends Component {
    render() {
        return (
            <div>
                <h2>Gallery</h2>
                <div >
                    <AwesomeSlider>
                        {
                            ARTWORK.map(ARTWORK => {
                                return (
                                    <div data-src={ARTWORK.image} />
                                );
                            })
                        }


                    </AwesomeSlider>
                </div>

            </div >
        )
    }
}


export default ArtGalleries;