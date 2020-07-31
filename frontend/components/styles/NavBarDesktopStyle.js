import styled from 'styled-components';

const NavBarDesktop = styled.ul`
    position: fixed;
    top: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    padding-top: 5vh;
    height: 20vh;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: none;
        color: white;
        font-size: 2rem;
        font-weight: bold;
        font-family: 'FuturaPT-Light';
    }

    a:hover {
        text-decoration: underline;
    }

    img {
        max-height: 8rem;
    }

    div {
        width: 33vw
    }

    div:first-child {
        display: flex;
        justify-content: space-around;
    }

    div:nth-child(2) {
        display: flex;
        justify-content: center;
    }

    div:last-child {
        display: flex;
        justify-content:flex-end;
        padding-right: 2vw;
    }

    first-:first-child {
        display: flex;
        justify-content: space-between;
    }
`;

export default NavBarDesktop;