import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import maxBy from "lodash/maxBy";
import minBy from "lodash/minBy";

const BEST_SELLER = "best_seller";
const MOST_VIEWED = "most_viewed";
const MOST_LIKED = "most_liked";
const MOST_DISCOUNT = "most_discount";
const HIGHEST_RATING = "highest_rating";
const CHEAPEST = "cheapest";

const options = [
  { value: BEST_SELLER, text: "Best Seller" },
  { value: MOST_LIKED, text: "Most Liked" },
  { value: MOST_VIEWED, text: "Most Viewed" },
  { value: MOST_DISCOUNT, text: "Most Discount" },
  { value: HIGHEST_RATING, text: "Highest Rating" },
  { value: CHEAPEST, text: "Cheapest" },
];

function useBest() {
  const items = useSelector((state) => state.featurecompare.items);

  const [option, setOption] = useState("");
  const [best, setBest] = useState({});

  useEffect(() => {
    switch (option) {
      case BEST_SELLER:
        setBest(maxBy(items, "sold"));
        return;
      case MOST_LIKED:
        setBest(maxBy(items, "liked_count"));
        return;
      case MOST_VIEWED:
        setBest(maxBy(items, "view_count"));
        return;
      case MOST_DISCOUNT:
        setBest(maxBy(items, "discount"));
        return;
      case HIGHEST_RATING:
        setBest(maxBy(items, "rating_star"));
        return;
      case CHEAPEST:
        setBest(minBy(items, "price"));
        return;
      default:
        return;
    }
  }, [items, option]);

  return { best, options, setOption };
}

export default useBest;
