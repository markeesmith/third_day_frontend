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


const Logo = styled.h1`
    font-size: 3rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    a {
        padding: 0.5rem 1rem;
        text-transform: uppercase;
        text-decoration: none;
    }
    @media (max-width: 1300px) {
        margin: 0;
        text-align: center;
    }
`;

const StyledHeader = styled.header`
    .bar {
        border-bottom: 10px solid black;
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        @media (max-width:1300px) {
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }
    .sub-bar {
        display:grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid lightgrey;
    }
`;

const Header = () => (
    <StyledHeader>
        <div className="bar">
            <Logo>
                <Link href="/">
                    <a>Third Day</a>
                </Link>
            </Logo>
            <Nav />
        </div>
    </StyledHeader>
)

export default Header;