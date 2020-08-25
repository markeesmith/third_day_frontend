import React from 'react'
import {withRouter} from 'next/router'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import GalleryAllPhotos from '../components/GalleryAllPhotos'
import { ID_GALLERIES_QUERY } from '../lib/gql'

const Gallery = ({router}) => (
  <Query
    query={ID_GALLERIES_QUERY}
    variables={{searchTerm: parseInt(router.query.id, 10)}}
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
          <GalleryAllPhotos 
            gallery={data.galleries[0]}
          />
        );
      }
    }
  </Query>
);

Gallery.propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
 
export default withRouter(Gallery);