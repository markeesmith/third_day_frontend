import Link from 'next/link';
import HamburgerMenuStyle from './styles/HamburgerMenuStyle';

const HamburgerMenu = () => (
    <HamburgerMenuStyle>
        <input type='checkbox' />
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </HamburgerMenuStyle>
);

export default HamburgerMenu;