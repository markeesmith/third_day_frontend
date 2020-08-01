import Link from 'next/link';
import HamburgerMenuStyle from './styles/HamburgerMenuStyle';

const HamburgerMenu = () => (
    <HamburgerMenuStyle>
        <input type='checkbox' />
        <span></span>
        <span></span>
        <span></span>
    </HamburgerMenuStyle>
);

export default HamburgerMenu;