import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';
import { LOCAL_STATE_QUERY } from './gql';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    clientState: {
      resolvers: {
        Mutation: {
          toggleHamburger(_, variables, { cache }) {
            const { hamburgerMenuOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            const data = {
              data: { hamburgerMenuOpen: !hamburgerMenuOpen },
            };
            cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        hamburgerMenuOpen: false,
      },
    },
  });
}

export default withApollo(createClient);
