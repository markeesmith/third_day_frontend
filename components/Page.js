import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Meta from "./Meta"
import Header from "./Header";
import Footer from "./Footer";

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
    /* height: 2000px; */
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <Header />
      <Inner>{children}</Inner>
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = {
    children: PropTypes.node.isRequired
}

export default Page;