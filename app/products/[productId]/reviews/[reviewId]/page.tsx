import React from "react";

const ReviewDetails = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  return (
    <div>
      Review {params.reviewId} for the product {params.productId}
    </div>
  );
};

export default ReviewDetails;
