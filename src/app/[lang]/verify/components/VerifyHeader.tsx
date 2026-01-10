"use client"

import type { ReactElement } from "react"
import type { IDictionaries } from "@/types/dictionaries"

const VerifyHeader = ({ t }: { t: IDictionaries }): ReactElement => {
  return (
    <div className="flex flex-col relative overflow-hidden w-full lg:w-2/3 xl:w-1/2 mx-auto px-8 sm:px-24 lg:px-0">
      <div className="text-center flex flex-col gap-y-6 sm:gap-y-3">
        <h1 className="text-4xl font-bold text-kraflab-navy">{t.verification.title}</h1>
        <p className="text-kraflab-frost-blue font-sans text-xl">{t.verification.description}</p>
      </div>
    </div>
  )
}

export default VerifyHeader