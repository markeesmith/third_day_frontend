import styled from 'styled-components';

const GalleryStyles = styled.div`
    position: relative;
    height: 50vh;
    max-height: 50vh;
    border: 1px solid #501414;

    .picture-icon {
        position: absolute;
        right: 0;
        padding-top: 2.5vh;
        padding-right: 1.5vw;
        color: white;
        font-weight: bolder;
        font-size: 3.75rem;
        pointer-events: none;
        fill: white;
        z-index: 1;
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