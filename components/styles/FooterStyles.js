import styled from 'styled-components';

const FooterStyles = styled.div`
  a {
    text-decoration: none;
    color: #501414;
  }

  h2 {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h2:nth-of-type(1) {
  }

  .upper-wrapper {
    display: grid;
    grid-template-columns: ${(props) => (props.mobile ? '1fr' : '1fr 1fr')};
  }

  .contact {
    text-align: center;
  }

  .logo {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .logo > div:first-of-type {
    display: flex;
    justify-content: ${(props) => (props.mobile ? 'center' : 'flex-end')};
    align-items: center;
    padding-right: ${(props) => (props.mobile ? '0' : '3vw')};
  }

  .logo > div:last-of-type {
    ${(props) => props.mobile && 'font-size: 1.25rem'};
    text-align: left;
    padding-left: ${(props) => (props.mobile ? '0' : '3vw')};
  }

  .navigation {
    text-align: center;
  }

  .navigation-submenu {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .navigation-submenu > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .navigation-submenu > div > div {
    flex: 0 0 100%;
  }

  .lower-wrapper {
    display: grid;
    grid-template-columns: 1fr;

    text-align: center;
  }

  .lower-wrapper a {
    padding-left: 2vw;
    padding-right: 2vw;
  }

  .lower-wrapper p {
    margin-block-start: 0;
  }

  hr {
    border: none;
    height: 1px;
    width: 90vw;
    color: #501414;
    background-color: #501414;
    margin: 2vh auto;
  }
`;

export default FooterStyles;
