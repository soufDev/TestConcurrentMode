import React from "react";
import useSWR from "swr";
import { fetchReview } from "./Reviews.api";

export const Reviews = ({ id }) => {
  const { data } = useSWR(id, fetchReview, { suspense: true });
  return <h4>{data}</h4>;
};
