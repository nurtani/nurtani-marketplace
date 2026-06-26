export type ActivityType =
  | "planted"
  | "maintenance"
  | "fertilizing"
  | "harvested"
  | "sold"
  | "stock_update"
  | "status_change";

export interface History {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  createdAt: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  totalData: number;
}

export interface HistoryProductResponse {
  message: string;
  data: History[];
  meta: PaginationMeta;
}
