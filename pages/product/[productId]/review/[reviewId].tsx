import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h2>
      Review {reviewId} and product {productId}
    </h2>
  );
};

export default Review;
