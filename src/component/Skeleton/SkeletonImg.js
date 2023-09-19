import React from 'react';
import './skeletonImg.css'; // Стили для компонента-костяшки

const SkeletonImg = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-block"></div>
    </div>
  );
};

export default SkeletonImg;