import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import OffScreenMenu from './OffScreenMenu';
import HamburgerMenuStyle from './styles/HamburgerMenuStyle';

const LOCAL_STATE_QUERY = gql`
    query {
        hamburgerMenuOpen @client
    }
`;

const TOGGLE_HAMBURGER_MUTATION = gql`
    mutation {
        toggleHamburger @client
    }  
`;

const HamburgerMenu = (props) => (
<Mutation mutation={ TOGGLE_HAMBURGER_MUTATION }>
    {toggleHamburger => (
    <Query query={ LOCAL_STATE_QUERY }>
        {({ data }) => (
        <HamburgerMenuStyle top={props.top}>
            <input 
                type='checkbox' 
                checked={data.hamburgerMenuOpen} 
                onChange={toggleHamburger}
            />
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <OffScreenMenu />
        </HamburgerMenuStyle>
    )}</Query> 
 )}</Mutation>
);

export default HamburgerMenu;
export { LOCAL_STATE_QUERY, TOGGLE_HAMBURGER_MUTATION };