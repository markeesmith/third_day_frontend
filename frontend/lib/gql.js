import gql from 'graphql-tag';

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

export { 
    LOCAL_STATE_QUERY, 
    TOGGLE_HAMBURGER_MUTATION,
};