import Link from 'next/link';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';
import { LOCAL_STATE_QUERY } from '../components/HamburgerMenu';

const DISABLE_HAMBURGER_MUTATION = gql`
    mutation {
        disableHamburger @client
    }
`;

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
export { DISABLE_HAMBURGER_MUTATION };