import { useReducer, useCallback } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

import {
  PaginationHook,
  DataFetchProps,
  paginationActionType,
} from "../types/Pagination";

function PaginationReducer(
  state: PaginationHook,
  action: paginationActionType
) {
  const { payload, property } = action;

  return { ...state, [property]: payload };
}

function useDataFetch(props: DataFetchProps) {
  const { fetchData, limit = 20 } = props;

  const [{ hasMore, loading, offset }, setPagination] = useReducer(
    PaginationReducer,
    { hasMore: true, offset: 0, loading: false, limit }
  );

  const handleLoadMore = useCallback(async () => {
    setPagination({ property: "loading", payload: true });

    const { total, currentOffset } = await fetchData({ offset, limit });

    setPagination({ property: "offset", payload: currentOffset });
    setPagination({ property: "loading", payload: false });
    setPagination({
      property: "hasMore",
      payload: total >= currentOffset,
    });
  }, [fetchData, offset, limit]);

  const reset = useCallback(() => {
    setPagination({ property: "offset", payload: 0 });
    setPagination({ property: "loading", payload: false });
    setPagination({ property: "hasMore", payload: true });
  }, []);

  const [ref] = useInfiniteScroll({
    loading: loading,
    hasNextPage: hasMore,
    onLoadMore: handleLoadMore,
    rootMargin: "0px 0px 400px 0px",
  });

  console.log({ hasMore, loading, offset, limit });

  return { ref, loading, offset, reset };
}

export default useDataFetch;
