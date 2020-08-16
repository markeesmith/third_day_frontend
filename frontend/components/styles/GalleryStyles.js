import styled from 'styled-components';

const GalleryStyles = styled.div`
    position: relative;
    height: 50vh;
    max-height: 50vh;

    .picture-icon {
        position: absolute;
        right: 0;
        padding-top: 2.5vh;
        padding-right: 1.5vw;
        color: #501414;
        font-weight: bolder;
        font-size: 2.5rem;
        z-index: 1;
        pointer-events: none;
        fill: white;
    }

    a {
        position: relative;
        height: 100%;
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    img:hover {
        opacity: 0.6;
        transition: all 0.25s;
    }
`;

export default GalleryStyles;