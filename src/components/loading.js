import React from 'react';
import LoadingLayout from '../layouts/loading-layout';

const Loading = ({children}) => {
  return ( 
    <LoadingLayout>
      {children}
      <br />
      Generating new question...
    </LoadingLayout>
  );
};

export default Loading;
