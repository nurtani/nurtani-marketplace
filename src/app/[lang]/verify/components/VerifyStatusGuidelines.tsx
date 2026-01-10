"use client"

import { 
  CircleAlertIcon, 
  CircleCheckBig, 
  CircleX, 
  Clock5, 
  LucideFileCheck, 
  ShieldCheck, 
  ShieldOff 
} from "lucide-react"
import type { ReactElement } from "react"
import { GoQuestion } from "react-icons/go"
import type { IDictionaries } from "@/types/dictionaries"
import type { IVerifyStatus, IVerifyStatusGuidline } from "@/types/verify"

const VerifyStatusGuidelines = ({ t }: { t: IDictionaries }): ReactElement => {
  const status: IVerifyStatusGuidline[] = [
    {
      name: t.status.pending.title as IVerifyStatus,
      description: t.status.pending.description,
      icon: <Clock5 className="w-5 h-5 mt-[1px] text-yellow-500" />
    },
    {
      name: t.status.rejected.title as IVerifyStatus,
      description: t.status.rejected.description,
      icon: <CircleX className="w-5 h-5 mt-[1px] text-red-500" />
    },
    {
      name: t.status.verified.title as IVerifyStatus,
      description: t.status.verified.description,
      icon: <CircleCheckBig className="w-5 h-5 mt-[1px] text-green-500" />
    },
    {
      name: t.status.certified.title as IVerifyStatus,
      description: t.status.certified.description,
      icon: <ShieldCheck className="w-5 h-5 mt-[1px] text-blue-500" />
    },
    {
      name: t.status.revoked.title as IVerifyStatus,
      description: t.status.revoked.description,
      icon: <ShieldOff className="w-5 h-5 mt-[1px] text-stone-500" />
    },
    {
      name: t.status.expired.title as IVerifyStatus,
      description: t.status.expired.description,
      icon: <CircleAlertIcon className="w-5 h-5 mt-[1px] text-orange-500 " />
    },
  ]
  
  return (
    <div className="flex flex-col rounded-xl border-[1px] border-kraflab-mist shadow-md p-6 gap-y-5">
      <div className="flex items-center gap-x-2">
        <LucideFileCheck className="text-blue-500" />
        <h3 className="text-kraflab-charcoal text-lg">{t.verification.guidelines.title}</h3>
      </div>
      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
        <div className="flex items-center gap-2 mb-2">
          <GoQuestion className="w-5 h-5" />
          <span className="font-medium">{t.verification.guidelines.verificationPath}</span>
        </div>
        <p className="text-sm text-gray-600 flex items-center gap-1 flex-wrap ">
          <span>{t.verification.guidelines.communityApproval}</span>
          <span>→</span>
          <span>{t.verification.guidelines.governmentVerification}</span>
          <span>→</span>
          <span>{t.status.verified.title}</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {
          status.map((item, index) =>
            <div
              key={index} 
              className="flex items-start gap-2 p-3 rounded-lg bg-gray-50 shadow-sm"
            >
              <div className="mt-0.5">
                {item.icon}
              </div>
              <div className="flex flex-col gap-y-1">
                <h4 className="font-medium capitalize">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default VerifyStatusGuidelines