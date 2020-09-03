import React from 'react';
import { Query } from 'react-apollo';
import { ALL_TESTIMONIALS_QUERY } from '../lib/gql';
import Testimonial from './Testimonial';

const Testimonials = () => (
  <Query query={ALL_TESTIMONIALS_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
      return (
        <div style={{ paddingTop: '25vh' }}>
          {data.testimonials.map((testimonial) => (
            <Testimonial
              testimonial={testimonial}
              key={testimonial.testimonial_id}
            />
          ))}
        </div>
      );
    }}
  </Query>
);

export default Testimonials;
