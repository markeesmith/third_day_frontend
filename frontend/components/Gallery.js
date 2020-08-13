import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryStyles from './styles/GalleryStyles';
import GalleryLogo from './GalleryLogo';

class Gallery extends Component {
    static propTypes = {
        gallery: PropTypes.object.isRequired,
    };

    render() {
        const { gallery } = this.props;
        var imgSrc = process.env.NEXT_PUBLIC_S3_BASE_URL + gallery.galPath;
        return <GalleryStyles>
            <GalleryLogo basePath={imgSrc}/>
        </GalleryStyles>
    }
}

export default Gallery;