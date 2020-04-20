import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import "./shop.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);

  
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherSectionProps }) => (
        <CollectionPreview key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
