import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './temp-shop-data';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(data => (
          <CollectionPreview key={data.id} {...data} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
