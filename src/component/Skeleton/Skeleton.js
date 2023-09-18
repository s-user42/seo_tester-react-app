import React from 'react';
import './skeleton.css'; // Стили для компонента-костяшки

const SkeletonComponent = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-block"></div>
    </div>
  );
};

export default SkeletonComponent;