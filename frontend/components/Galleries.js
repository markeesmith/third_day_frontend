import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Gallery from './Gallery';

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

const Center = styled.div`
    text-align: center;
`;

const GalleryList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-right: 2vw;
    padding-left: 2vw;
    grid-gap: 2vw;
    max-width: ${props => props.theme.maxWidth };
    margin: 0 auto;
`;

const Galleries = () => (
  <Center>
    <Query 
      query={TYPE_GALLERIES_QUERY} 
      variables={{searchTerm: "home"}}
    >
      {
        ({data, loading, error}) => {
          if(loading) return <p>Loading...</p>;
          if(error) return (
            <p>
              Error:
              {' '}
              {error.message}
            </p>
          );
          return (
            <GalleryList>
              {data.galleries.map(gallery => <Gallery gallery={gallery} key={gallery.gallery_id} />)}
            </GalleryList>
          );
        }
      }
    </Query>
  </Center>
);
 
export default Galleries;