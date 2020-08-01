import styled from 'styled-components';

const HamburgerMenuStyle = styled.div`
    display: block;
    position: relative;
    top: 50px;
    left: 50px;
    
    z-index: 1;
    
    -webkit-user-select: none;
    user-select: none;

    input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;
        
        cursor: pointer;
        
        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */
        
        -webkit-touch-callout: none;
    }

    span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        
        background: #cdcdcd;
        border-radius: 3px;
        
        z-index: 1;
        
        transform-origin: 4px 0px;
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
    }

    span:first-child {
        transform-origin: 0% 0%;
    }

    span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }

    input:checked ~ span {
        opacity: 1;
        background: white;
    }

    input:checked ~ span:nth-last-child(2) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    input:checked ~ span:nth-last-child(3) {
        transform: translate(4px, 0px) rotate(45deg);
    }

    input:checked ~ span:last-child {
        transform: translate(1px, 0px) rotate(-45deg);
    }
`;

export default HamburgerMenuStyle;