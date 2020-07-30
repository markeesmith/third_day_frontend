import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Page from '../components/Page';

const GlobalStyle = createGlobalStyle`
    /* html {
        box-sizing: border-box;
        font-size: 10px;
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
        color: black;
    } */
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