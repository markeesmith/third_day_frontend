import styled from 'styled-components';

const NavBarMobileStyle = styled.div`
    position: fixed;
    top: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    padding-top: 5vh;
    height: 20vh;
    width: 100vw;
    background-color: transparent;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div {
        width: 50vw;
    }
`;

export default NavBarMobileStyle;