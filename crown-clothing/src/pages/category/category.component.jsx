import React from 'react';
// import CollectionItem from '../../components/collection-item/collection-item.component';
import './category.style.scss';

const CategoryPage = ({ match }) => {
  console.log('category page:',match);
  return (
    <div className="category">
      <h1>Category Page</h1>
    </div>
  );
};

export default CategoryPage;
