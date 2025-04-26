import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h1 className="text-7xl">Product details page {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
