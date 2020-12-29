import React from 'react';

function ReactIsInDevelomentMode() {
  return '_self' in React.createElement('div');
}

export default ReactIsInDevelomentMode;
