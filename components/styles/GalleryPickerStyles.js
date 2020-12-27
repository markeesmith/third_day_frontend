import styled from 'styled-components';

const GalleryPickerStyles = styled.div`
  height: ${(props) => (props.isMobile ? '20vh' : '80vh')};
  overflow-y: ${(props) => (props.isMobile ? 'hidden' : 'auto')};
  overflow-x: ${(props) => (props.isMobile ? 'auto' : 'hidden')};
  white-space: ${(props) => (props.isMobile ? 'nowrap' : 'normal')};
  ${(props) => props.isMobile && `border-top: 1px solid #501414`};
`;

export default GalleryPickerStyles;
