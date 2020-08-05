import styled from 'styled-components';

const HamburgerMenuStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 3vw;
    
    z-index: 1;
    
    -webkit-user-select: none;
    user-select: none;
    
    div {
        width: 40px;
        height: 32px;
    }

    input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        
        cursor: pointer;
        
        opacity: 0;
        z-index: 3; /* and place it over the hamburger */
        
        -webkit-touch-callout: none;
    }

    div > span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        
        background: ${props => (props.top ? 'white' : '#501414')};
        border-radius: 3px;
        
        z-index: 2;
        
        transform-origin: 4px 0px;
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
    }

    div > span:first-child {
        transform-origin: 0% 0%;
    }

    div > span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }

    input:checked ~ div > span {
        opacity: 1;
        background: white;
    }

    input:checked ~ div > span:nth-last-child(2) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    input:checked ~ div > span:nth-last-child(3) {
        transform: translate(4px, -2px) rotate(45deg);
    }

    input:checked ~ div > span:last-child {
        transform: translate(0px, 0px) rotate(-45deg);
    }
`;

export default HamburgerMenuStyle;