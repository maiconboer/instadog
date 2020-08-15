import React from 'react';

import { Container } from './styles';

const SkeletonImage = ({alt, ...props}) => {
  const [skeleton, setSkeleton] = React.useState(true)

  function handleLoad({target}) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <Container>
      {skeleton && <div className='skeleton'></div>}
      
      <img 
        onLoad={handleLoad}
        alt={alt} 
        className='image' 
        {...props} 
      />
    </Container>
  )
}

export default SkeletonImage;
