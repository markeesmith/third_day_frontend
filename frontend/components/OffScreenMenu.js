import Link from 'next/link';
import OffScreenMenuStyles from './styles/OffScreenMenuStyles';

const OffScreenMenu = () => (
    <OffScreenMenuStyles>
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/gallery">
                <a>Gallery</a>
            </Link>
            <Link href="/testimonial">
                <a>Testimonials</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
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
);

export default OffScreenMenu;