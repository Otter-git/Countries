import { useDispatch, useSelector } from "react-redux";
import { loadNeighborsByBorder, selectBorders } from "./details-slice";
import { useEffect } from "react";

export const useBorders = (borders) => {
  const dispatch = useDispatch();
  const neighbors = useSelector(selectBorders);

  useEffect(() => {
    if (borders) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
}