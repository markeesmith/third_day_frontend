import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Page from '../components/Page';

const GlobalStyle = createGlobalStyle`
    html {
        @font-face {
            font-family: 'FuturaPT-Light';
            src: url('../static/fonts/FuturaPT-Light.eot');
            src: url('../static/fonts/FuturaPT-Light.eot?#iefix') format('embedded-opentype'),
                url('../static/fonts/FuturaPT-Light.svg#FuturaPT-Light') format('svg'),
                url('../static/fonts/FuturaPT-Light.ttf') format('truetype'),
                url('../static/fonts/FuturaPT-Light.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        box-sizing: border-box;
        font-size: 10px;
        padding: 0;
        margin: 0;
        background-color: #FFFAFA;
        background-color: black;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
    a {
        text-decoration: none;
    }
`;

class MyApp extends App {
    render() {
        const { Component } = this.props;

        return (
            <Page>
                <Component />
                <GlobalStyle />
            </Page>
        );
    }
}

export default MyApp;