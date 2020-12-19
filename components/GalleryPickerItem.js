import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryPickerItemStyles = styled.div`
  height: 20%;
  width: 90%;
  margin: 2vh auto;
  text-align: center;

  img {
    height: 100%;
    width: auto;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;

function keyPress(event, f, pos) {
  if (event.charCode === 13) {
    f(pos);
  }
}

class GalleryPickerItem extends Component {
  constructor(props) {
    super(props);

    this.focusDiv = React.createRef();
  }

  componentDidMount() {
    if (this.focusDiv.current !== null) this.focusDiv.current.focus();
  }

  render() {
    const { url, photo, onPickerSelection } = this.props;

    return (
      <GalleryPickerItemStyles>
        <a
          onClick={() => onPickerSelection(photo)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            keyPress(e, onPickerSelection, photo);
          }}
        >
          <img
            sizes="100%"
            src={`${url}${photo}-1024.jpg`}
            alt="Main Gallery"
          />
        </a>
      </GalleryPickerItemStyles>
    );
  }
}

GalleryPickerItem.propTypes = {
  url: PropTypes.string.isRequired,
  photo: PropTypes.number.isRequired,
  onPickerSelection: PropTypes.func.isRequired,
};

export default GalleryPickerItem;
