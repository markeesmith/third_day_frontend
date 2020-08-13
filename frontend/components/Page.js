import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Meta from '../components/Meta'
import Header from '../components/Header';
import Footer from '../components/Footer';

const theme = {
    maxWidth: '100vw',
    textColor: '#501414',
    backColor: '#FFFAFA'
};

const StyledPage = styled.div`
    margin: 0;
    padding: 0;
    color: ${ props => props.theme.textColor };
`;

const Inner = styled.div`
    max-width: ${ props => props.theme.maxWidth };
    height: 2000px;
`;

class Page extends Component {
    render() {
        return(
            <ThemeProvider theme={ theme }>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>{this.props.children}</Inner>
                    <Footer />
                </StyledPage>
            </ThemeProvider>
        )
    }
}

export default Page;