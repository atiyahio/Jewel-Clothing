import React from 'react';
import { StyledPreviewCollection } from './styles/shop';
import CollectionItem from './CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <StyledPreviewCollection>
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </StyledPreviewCollection>
  );
};

export default CollectionPreview;
