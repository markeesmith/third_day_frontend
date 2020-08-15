import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

const handleStartRouteChange = () => {
    NProgress.start();
}

const handleCompleteRouteChange = () => {
    NProgress.done();
    // Disable hamburger menu via Apollo Client
}

const handleRouteChangeError = () => {
    NProgress.done();
}

Router.events.on('routeChangeStart', handleStartRouteChange);
Router.events.on('routeChangeComplete', handleCompleteRouteChange);
Router.events.on('routeChangeError', handleRouteChangeError);

const Header = () => (
  <Nav />
)

export default Header;