import React, { Component } from 'react';
import styled from 'styled-components';

class GalleryLogo extends Component {
    render(props) { 
        return (
            <a href="">
                <img
                    srcset=
                    {`
                    ${this.props.basePath}0-480.jpg 480w,
                    ${this.props.basePath}0-767.jpg 767w,
                    ${this.props.basePath}0-1024.jpg 1024w,
                    ${this.props.basePath}0-1280.jpg 1280w
                    `}
                    sizes='100%'
                    src={`${this.props.basePath}0-480.jpg 480w`}
                    alt='Main Gallery Image'
                />
            </a>
        );
    }
}
 
export default GalleryLogo;