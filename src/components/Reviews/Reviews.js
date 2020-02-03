import React from "react";
import { useQuery } from "react-query";
import { fetchReview } from "./Reviews.api";

export const Reviews = ({ id }) => {
  const { data } = useQuery(["preview", { id }], fetchReview, {
    suspense: true
  });
  return <h4>{data}</h4>;
};
