import type { IVerifyStatus } from "@/types/verify";
import type { IApiResponse } from "..";

export interface IVerifySefice {
  verifyById(): Promise<IVerifyByIdResponse | void>;
  verifyByImage(): Promise<IVerifyByImageResponse | void>;
}

export interface IVerifyData {
  id: string
  name: string
  status: IVerifyStatus
}

export type IVerifyByIdResponse = IApiResponse<IVerifyData>;
export type IVerifyByImageResponse = IApiResponse<IVerifyData>;
