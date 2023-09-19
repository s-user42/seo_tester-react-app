import React from 'react';
import './skeletonIcon.css'; // Стили для компонента-костяшки

const SkeletonIcon = () => {
  return (
    <div className="skeleton__icon">
      <div className="skeleton__icon--block"></div>
    </div>
  );
};

export default SkeletonIcon;