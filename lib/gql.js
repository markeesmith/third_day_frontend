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
    galleries(where: { galType: $searchTerm }, orderBy: galRank_ASC) {
      gallery_id
      galNumberItems
      galPath
      galType
    }
  }
`;

const ID_GALLERY_QUERY = gql`
  query ID_GALLERY_QUERY($searchTerm: Int!) {
    gallery(where: { gallery_id: $searchTerm }) {
      gallery_id
      galNumberItems
      galPath
      galType
    }
  }
`;

const ALL_GALLERIES_QUERY = gql`
  query ALL_GALLERIES_QUERY {
    galleries(orderBy: galRank_ASC) {
      gallery_id
      galNumberItems
      galPath
      galType
    }
  }
`;

const ALL_TESTIMONIALS_QUERY = gql`
  query ALL_TESTIMONIALS_QUERY {
    testimonials {
      testimonial_id
      body
      headline
      customer {
        customer_id
        firstName
      }
      gallery {
        gallery_id
        galPath
      }
    }
  }
`;

const SEND_EMAIL_MUTATION = gql`
  mutation SEND_EMAIL_MUTATION(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phone: String!
    $streetAddress: String!
    $city: String!
    $state: String!
    $zipCode: String!
    $chkCustom: Boolean!
    $chkRemodel: Boolean!
    $chkAddition: Boolean!
    $budget: String!
    $description: String!
  ) {
    requestContact(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phone: $phone
      streetAddress: $streetAddress
      city: $city
      state: $state
      zipCode: $zipCode
      chkCustom: $chkCustom
      chkRemodel: $chkRemodel
      chkAddition: $chkAddition
      budget: $budget
      description: $description
    ) {
      customer_id
    }
  }
`;

export {
  LOCAL_STATE_QUERY,
  TOGGLE_HAMBURGER_MUTATION,
  TYPE_GALLERIES_QUERY,
  ID_GALLERY_QUERY,
  ALL_GALLERIES_QUERY,
  ALL_TESTIMONIALS_QUERY,
  SEND_EMAIL_MUTATION,
};
