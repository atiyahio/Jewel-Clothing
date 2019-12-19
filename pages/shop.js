import React, { useState } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../components/CollectionPreview';

const Shop = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className="shop-page container">
      <h1>SHOP</h1>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
