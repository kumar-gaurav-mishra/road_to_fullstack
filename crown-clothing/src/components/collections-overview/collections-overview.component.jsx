import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollection } from '../../redux/shop/shop.selector';
import './collections-overview.style.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {
      Object.keys(collections).map(key => <CollectionPreview key={collections[key].id} {...collections[key]} />)
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection
});

export default connect(mapStateToProps)(CollectionsOverview);
