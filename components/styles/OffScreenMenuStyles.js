import styled from 'styled-components';

const OffScreenMenuStyles = styled.ul`
    position: fixed;
    top: 0;
    right: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    height: 100vh;
    width: ${props => (props.open ? '100vw' : '0vw')};
    
    overflow: hidden;
    opacity: ${props => (props.open ? 1 : 0)};
    background-color: #501414;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s;

    div:first-of-type {
        height: 85vh;
        width: 85vw;
    }

    a {
        display: block;
        text-decoration: none;
        color: white;
        font-size: 3rem;
        text-align: center;
    }

    p {
        color: white;
        font-size: 1.8rem;
        text-align: center;
        margin: 0;
        font-weight: bold;
    }

    p:nth-of-type(2) {
        font-weight: normal;
    }

    img {
        max-height: 5rem;
    }
`;

export default OffScreenMenuStyles;