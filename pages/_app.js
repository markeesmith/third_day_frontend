import React from 'react';
import App from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import Page from '../components/Page';
import withData from '../lib/withData';

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
        const { Component, apollo } = this.props;

        return (
          <ApolloProvider client={apollo}>
            <Page>
              <Component />
              <GlobalStyle />
            </Page>
          </ApolloProvider>
        );
    }
}

export default withData(MyApp);