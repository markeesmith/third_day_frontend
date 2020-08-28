import React, {Component} from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import Gallery from './Gallery';
import GalleryDropDown from './GalleryDropDown'
import { ALL_GALLERIES_QUERY, TYPE_GALLERIES_QUERY } from '../lib/gql'


const Center = styled.div`
    text-align: center;
    /* TODO: Get rid of this */
    padding-top: 25vh;
`;

const GalleryList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 5vh;
    padding-right: 2vw;
    padding-left: 2vw;
    grid-gap: 2vw;
    max-width: ${props => props.theme.maxWidth };
    margin: 0 auto;
`;

class AllGalleries extends Component {
  constructor(props) {
    super(props);
    this.dropDownChange = this.dropDownChange.bind(this);
    this.state = {
      gallerySelection: 'all',
      whichQuery: ALL_GALLERIES_QUERY
    };
  }

  dropDownChange(e) {
    const {value} = e.target;
    if(value === 'all') {
      this.setState({
        whichQuery: ALL_GALLERIES_QUERY
      });
    } else {
      this.setState({
        whichQuery: TYPE_GALLERIES_QUERY
      });
    }
    this.setState({
      gallerySelection: value
    });
  }

  render() {
    const { gallerySelection, whichQuery } = this.state;
    const ddlValues = ["all", "home", "addition", "remodel"];
    return(
      <Center>
        <Query 
          query={whichQuery} 
          variables={{searchTerm: gallerySelection}}
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
                <div>
                  <GalleryDropDown 
                    dropDownChange={this.dropDownChange}
                    values={ddlValues}
                    selectedOption={gallerySelection}
                  />
                  <GalleryList>
                    {data.galleries.map(gallery => <Gallery gallery={gallery} key={gallery.gallery_id} />)}
                  </GalleryList>
                </div>
              );
            }
          }
        </Query>
      </Center>
    );
  }
}
 
export default AllGalleries;