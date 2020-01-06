import React from 'react';
import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, bgColor }) => (
  <div className={`${size} menu-item`}>
    <div
      style={{
        backgroundColor: bgColor,
        backgroundImage: `url(${imageUrl})`
      }}
      className="background-image"></div>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
