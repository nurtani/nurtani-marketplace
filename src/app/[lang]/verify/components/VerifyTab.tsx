"use client"

import { type ReactElement, useState } from "react"
import type { IVerifyData } from "@/interfaces/verify"
import type { IDictionaries } from "@/types/dictionaries"
import type { IVerifyTabs } from "@/types/verify"
import ModalVerifyResponse from "./ModalVerifyResponse"
import SelectTabVerify from "./SelectTabVerify"
import VerifyByIdForm from "./VerifyByIdForm"
import VerifyByImageForm from "./VerifyByImageForm"

const VerifyTab = ({ t }: { t: IDictionaries }): ReactElement => {
  const [activeTab, setActiveTab] = useState<IVerifyTabs>('id') 
  const [isModalResponseOpen, setIsModalResponseOpen] = useState(false)
  const [verifyResponse, setVerifyResponse] = useState<IVerifyData | undefined>(undefined)

  const handleVerify = async (): Promise<void> => {
    setVerifyResponse({
      id: 'PRD-001',
      name: 'Ogoh-ogoh',
      status: 'verified'
    })

    setIsModalResponseOpen(true)
  }
  
  return (
    <div className="flex flex-col rounded-xl border-[1px] border-kraflab-mist shadow-md p-6 gap-y-6">
      <div className="flex flex-col items-start gap-y-2">
        <h3 className="text-kraflab-charcoal text-lg">{t.verification.productVerification.title}</h3>
        <p className="text-sm text-gray-600">{t.verification.productVerification.description}</p>
      </div>
      <SelectTabVerify 
        props={{
          activeTab,
          setActiveTab
        }}
        t={t}
      />
      {
        activeTab === 'id'
          ? <VerifyByIdForm 
            props={{
              handleVerify 
            }}
            t={t}
          />
          : <VerifyByImageForm 
            props={{
              handleVerify
            }}
            t={t}
          />
      }
      <ModalVerifyResponse 
        props={{
          data: verifyResponse,
          isModalOpen: isModalResponseOpen,
          setIsModalOpen: setIsModalResponseOpen
        }} 
        t={t}      
      />
    </div>
  )
}

export default VerifyTab