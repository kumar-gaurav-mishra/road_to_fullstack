import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';
const ShopPage = ({ match, history }) => {
  console.log('history : ', history);
  console.log('shop page:', match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};
export default ShopPage;
