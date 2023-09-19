import React from 'react';
import './skeletonText.css'; // Подключите стили для скелетона

const SkeletonText = () => {
  return (
    <div className='skeleton--blck'>
      <div className="skeleton-item1"></div>
      <div className="skeleton-item2"></div>
    </div>
  );
};

export default SkeletonText;