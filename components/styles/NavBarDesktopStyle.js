import styled from 'styled-components';

const NavBarDesktop = styled.ul`
  position: fixed;
  z-index: 3;
  top: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  background-color: ${(props) => (props.top ? 'transparent' : 'white')};
  padding-top: ${(props) => (props.top ? '5vh' : '0')};
  height: ${(props) => (props.top ? '15vh' : '10vh')};
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.3s;

  a {
    text-decoration: none;
    color: ${(props) => (props.top ? 'white' : '#501414')};
    font-size: 2.25rem;
    font-weight: bolder;
    font-family: 'FuturaPT-Light';
  }

  a:hover {
    text-decoration: underline;
  }

  div {
    width: 33vw;
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
    justify-content: flex-end;
    padding-right: 2vw;
  }

  first-:first-child {
    display: flex;
    justify-content: space-between;
  }
`;

export default NavBarDesktop;
