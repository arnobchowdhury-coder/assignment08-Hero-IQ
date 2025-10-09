import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClimbingBoxLoader
        cssOverride={{}}
        loading
        size={20}
        speedMultiplier={1}>
      </ClimbingBoxLoader>
    </div>
  );
};

export default Loading;