import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';

const handleStartRouteChange = () => {
    NProgress.start();
}

const handleCompleteRouteChange = () => {
    NProgress.done();
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