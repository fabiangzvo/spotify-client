export interface FetchDataInterface {
  offset?: number;
  limit?: number;
  locale?: string;
  country?: string;
}

export interface DataFetchProps {
  fetchData(
    params: FetchDataInterface
  ): Promise<{ total: number; currentOffset: number }>;
  limit?: number;
}

export interface PaginationHook {
  offset: number;
  loading: boolean;
  hasMore: boolean;
  limit: number;
}

export type paginationActionType = {
  property: "offset" | "loading" | "hasMore";
  payload: number | boolean;
};
