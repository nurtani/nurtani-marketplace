import type { Dispatch, ReactElement, SetStateAction } from "react"
import type { IconType } from "react-icons/lib"
import { LuCamera, LuSearch } from "react-icons/lu"
import type { IDictionaries } from "@/types/dictionaries"
import type { IVerifyTabs } from "@/types/verify"

interface ISelectTabVerifyProps {
  activeTab: IVerifyTabs
  setActiveTab: Dispatch<SetStateAction<IVerifyTabs>>
}

const SelectTabVerify = ({ props, t }: { props: ISelectTabVerifyProps, t: IDictionaries }): ReactElement => {
  const { 
    activeTab,
    setActiveTab
  } = props

  const creatorTabOptions: { 
    icon: IconType, 
    name: IVerifyTabs,
    text: string
  }[] = [
    {
      icon: LuSearch,
      name: 'id',
      text: t.verification.productVerification.productId.title
    }, 
    {
      icon: LuCamera,
      name: 'image',
      text: t.verification.productVerification.productImage.title
    }
  ]

  const getLeftPositionClass = (activeTab: IVerifyTabs): string => {
    switch (activeTab) {
    case 'id':
      return 'top-0 lg:left-0'
    case 'image':
      return 'top-[50%] lg:left-[50%] lg:top-0'
    default:
      setActiveTab(creatorTabOptions[0].name)
      return 'top-0 lg:left-0'
    }
  }

  return (
    <div className="relative bg-kraflab-mist/30 rounded-lg p-1">
      <div className="flex flex-col gap-y-2 lg:grid grid-cols-2 bg-transparent text-sm font-medium text-black relative z-[2]">
        {
          creatorTabOptions.map((item, index) =>
            <button
              key={index}
              type="button"
              disabled={(item.name === activeTab)}
              onClick={() => { setActiveTab(item.name) }}
              className={`py-1 capitalize flex items-center gap-x-2 justify-center ${item.name !== activeTab ? 'text-kraflab-steel' : 'text-inherit'}`}
            >
              <item.icon></item.icon>
              <span>{item.text}</span>
              
            </button>
          )
        }
      </div>
      <div className={`w-full lg:w-1/2 p-1 h-1/2 lg:h-full absolute top-0 left-0 z-[1] ${getLeftPositionClass(activeTab)} transition-all duration-100`}>
        <div className="w-full h-full rounded-lg bg-white shadow-sm"></div>
      </div>
    </div>
  )
}

export default SelectTabVerify