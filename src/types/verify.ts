import type { ReactElement } from "react"

export type IVerifyTabs = 'id' | 'image'

export type IVerifyStatus = 
  'pending' |
  'verified' |
  'certified' |
  'rejected' |
  'revoked' |
  'expired'

export interface IVerifyStatusGuidline {
  name: IVerifyStatus
  description: string
  icon: ReactElement
}