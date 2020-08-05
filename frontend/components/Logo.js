import Link from 'next/link';
import styled from 'styled-components';

const LogoContainer = styled.div `
    padding-left: ${props => (props.pad ? '3vw' : '0vw')};
    img {
        max-height: 8rem;
        cursor: pointer;
    }
`;

const Logo = (props) => (
    <LogoContainer pad={props.pad}>
        <Link href="/">
            <img src={props.imgSrc}/>
        </Link>
    </LogoContainer>
);

export default Logo;