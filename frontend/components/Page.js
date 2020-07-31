import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta'

const theme = {
    maxWidth: '1000px',
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
                </StyledPage>
            </ThemeProvider>
        )
    }
}

export default Page;