import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta'

const theme = {
    // maxWidth: '1000px',
};

const StyledPage = styled.div`
    /* background: white;
    color: black; */
`;

const Inner = styled.div`
    /* max-width: ${ props => props.theme.maxWidth };
    margin: 0 auto;
    padding: 2rem; */
`;

class Page extends Component {
    render() {
        return(
            <ThemeProvider theme={ theme }>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
            </ThemeProvider>
        )
    }
}

export default Page;