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

const TYPE_GALLERIES_QUERY = gql`
    query TYPE_GALLERIES_QUERY($searchTerm: String!) {
        galleries (where: {galType: $searchTerm}) {
            gallery_id
            galNumberItems
            galPath
            galType
        }
    }
`;

const ID_GALLERIES_QUERY = gql`
  query ID_GALLERIES_QUERY($searchTerm: Int!) {
    galleries(where: {gallery_id: $searchTerm}) {
      gallery_id
      galNumberItems
      galPath
      galType
    }
  }
`;

const ALL_GALLERIES_QUERY = gql`
  query ALL_GALLERIES_QUERY {
    galleries {
      gallery_id
      galNumberItems
      galPath
      galType
    }
  }
`;

export {
  LOCAL_STATE_QUERY,
  TOGGLE_HAMBURGER_MUTATION,
  TYPE_GALLERIES_QUERY,
  ID_GALLERIES_QUERY,
  ALL_GALLERIES_QUERY,
};
