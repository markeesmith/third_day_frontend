import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryStyles from './styles/GalleryStyles';
import GalleryLogo from './GalleryLogo';
import FA from 'react-fontawesome';

class Gallery extends Component {
    static propTypes = {
        gallery: PropTypes.object.isRequired,
    };

    render() {
        const { gallery } = this.props;
        var imgSrc = process.env.NEXT_PUBLIC_S3_BASE_URL + gallery.galPath;

        if(gallery.galNumberItems > 1) {
            return <GalleryStyles>
                <FA className='picture-icon' name='clone'/>
                <GalleryLogo basePath={imgSrc}/>
            </GalleryStyles>
        } else {
            return <GalleryStyles>
                <GalleryLogo basePath={imgSrc}/>
            </GalleryStyles>
        }
    }
}

export default Gallery;