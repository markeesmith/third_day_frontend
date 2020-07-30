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

const StyledLogo = styled.img`
    margin-top: 1.5rem;
    max-height: 6rem;
`;

const Header = () => (
    <div>
        <div className="bar">
            <div>
                <Link href="/">
                    <StyledLogo src="/static/MainLogo.svg" />
                </Link>
            </div>
            <Nav />
        </div>
    </div>
)

export default Header;