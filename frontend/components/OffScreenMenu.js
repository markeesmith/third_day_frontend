import Link from 'next/link';
import { Query, Mutation } from 'react-apollo';
import OffScreenMenuStyles from './styles/OffScreenMenuStyles';
import { LOCAL_STATE_QUERY, TOGGLE_HAMBURGER_MUTATION } from './HamburgerMenu';

const OffScreenMenu = () => (
    <Mutation mutation={ TOGGLE_HAMBURGER_MUTATION }>
    {toggleHamburger => (
        <Query query={ LOCAL_STATE_QUERY }>
            {({ data }) => (
            <OffScreenMenuStyles open={ data.hamburgerMenuOpen }>
                <div>
                    <Link href="/">
                        <a onClick={toggleHamburger}>Home</a>
                    </Link>
                    <Link href="/about">
                        <a onClick={toggleHamburger}>About</a>
                    </Link>
                    <Link href="/gallery">
                        <a onClick={toggleHamburger}>Gallery</a>
                    </Link>
                    <Link href="/testimonial">
                        <a onClick={toggleHamburger}>Testimonials</a>
                    </Link>
                    <Link href="/contact">
                        <a onClick={toggleHamburger}>Contact</a>
                    </Link>
                    <br />
                    <hr />
                    <br />
                    <p>Have a project in mind?</p>
                    <p>We can't wait to hear about it!</p>
                    <p>weaver.thirdday@gmail.com</p>
                    <p>(304) 283-3863</p>
                    <p><img src='static/logos/MainLogoWhite.svg' /></p>
                </div>
            </OffScreenMenuStyles>
        )}</Query> 
    )}</Mutation>
);

export default OffScreenMenu;