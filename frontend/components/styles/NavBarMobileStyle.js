import styled from 'styled-components';

const NavBarMobileStyle = styled.div`
    position: fixed;
    top: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    width: 100vw;

    padding-top: ${props => (props.open ? '0' : (props.top ? '5vh' : '0'))};
    height: ${props => (props.open ? '15vh' : (props.top ? '20vh' : '15vh'))};
    background-color: ${props => (props.top ? 'transparent' : 'white')};;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    transition: all 0.5s;

    div {
        width: 50vw;
    }
`;

export default NavBarMobileStyle;