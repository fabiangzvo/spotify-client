export interface FetchDataInterface {
  offset?: number;
  limit?: number;
  locale?: string;
  country?: string;
}

type FetchDataReturn = {
  total: number;
  currentOffset: number;
  hasMore: boolean;
};

export interface PaginatedData<T> {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Array<T>;
}

export interface DataFetchProps {
  fetchData(params: FetchDataInterface): Promise<FetchDataReturn>;
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
