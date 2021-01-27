import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import dynamic from 'next/dynamic';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import {isMobile} from 'react-device-detect';

const theme = {
  maxWidth: '100vw',
  textColor: '#501414',
  backColor: '#FFFAFA',
};

const StyledPage = styled.div`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.textColor};
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  /* height: 2000px; */
`;

const Page = ({ children }) => {
  if (isMobile) {
    const MobileHeader = dynamic(() => import('./Header'), {ssr: false});
    const MobileFooter = dynamic(() => import('./Footer'), {ssr: false});
    return(  <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <MobileHeader />
        <Inner>{children}</Inner>
        <MobileFooter />
      </StyledPage>
    </ThemeProvider>);
  }
  return(
    <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <Header />
      <Inner>{children}</Inner>
      <Footer />
    </StyledPage>
  </ThemeProvider>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
