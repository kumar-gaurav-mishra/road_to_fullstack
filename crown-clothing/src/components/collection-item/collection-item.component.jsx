import React from 'react';
import './collection-item.style.scss';

const CollectionItem = ({ id, name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      className="item-img"
      style={{
        backgroundColor: `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`,
        backgroundImage: `url(${imageUrl})`
      }}></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
