import React from 'react';
import {withRouter} from 'next/router'
import PropTypes from 'prop-types'

const Gallery = ({router}) => (
  <h1>
    Gallery Page. Gallery of id =
    {' '}
    {router.query.id}
  </h1>
);

Gallery.propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
 
export default withRouter(Gallery);