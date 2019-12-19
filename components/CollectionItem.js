import React from 'react';
import { StyledCollectionItem } from './styles/shop';

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <StyledCollectionItem bg={imageUrl}>
      <div className="image"></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </StyledCollectionItem>
  );
};

export default CollectionItem;
