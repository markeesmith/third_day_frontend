import React from 'react';
import { Query } from 'react-apollo';
import { ALL_TESTIMONIALS_QUERY } from '../lib/gql';
import Testimonial from './Testimonial';
import JumboText from './JumboText';

const Testimonials = () => {
  return (
    <div>
      <JumboText
        title="Customer Testimonials"
        body="See what customers think of Third Day Builders"
      />
      <Query query={ALL_TESTIMONIALS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <div>
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
    </div>
  );
};

export default Testimonials;
