export interface IPaginationParams {
  page: number,
  limit: number
}

export interface IApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
  meta?: IPaginationResponse | undefined;
}

export interface IPaginationResponse {
  page: number
  size: number
  totalPage: number
  totalData: number
}
