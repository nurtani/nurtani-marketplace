import { 
  CircleAlertIcon, 
  CircleCheckBig, 
  CircleX, 
  Clock5, 
  ShieldCheck, 
  ShieldOff 
} from "lucide-react";
import type { Dispatch, ReactElement, SetStateAction } from "react";
import Modal from "@/components/modal/Modal";
import type { IVerifyData } from "@/interfaces/verify";
import type { IDictionaries } from "@/types/dictionaries";
import type { IVerifyStatus } from "@/types/verify";
import { getStatusColorClass } from "@/utils";

interface IModalVerifyResponseProps {
  data: IVerifyData | undefined
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

const ModalVerifyResponse = ({ props, t }: { props: IModalVerifyResponseProps, t: IDictionaries }): ReactElement => {
  const {
    data,
    isModalOpen,
    setIsModalOpen
  } = props

  function getStatusIcon(name: IVerifyStatus, className = ''): ReactElement {
    const classes = `w-full h-full ${getStatusColorClass(name)} ${className}`;
  
    switch (name) {
    case 'pending':
      return <Clock5 className={classes} />;
    case 'rejected':
      return <CircleX className={classes} />;
    case 'verified':
      return <CircleCheckBig className={classes} />;
    case 'certified':
      return <ShieldCheck className={classes} />;
    case 'revoked':
      return <ShieldOff className={classes} />;
    case 'expired':
      return <CircleAlertIcon className={classes} />;
    default:
      return <Clock5 className={`text-gray-400 ${classes}`} />;
    }
  }

  return (
    <Modal
      props={{
        isModalOpen: (data !== undefined)  && isModalOpen,
        setIsModalOpen
      }}
    >
      <div 
        onClick={(e) => { e.stopPropagation() } }
        className="bg-white m-auto rounded-2xl overflow-hidden py-6 px-5 font-sans flex flex-col gap-y-8 w-[24rem]"
      >
        {data?.status && <>
          <div className="flex justify-center items-center w-20 h-20 mx-auto">
            {getStatusIcon(data.status)}
          </div>
          <div className="flex flex-col gap-y-2 text-kraflab-steel  ">
            <p className="grid grid-cols-2 gap-x-3">
              <span className="text-sm">{t.verification.items.productId}</span>
              <span className="text-kraflab-charcoal">{data.id}</span>
            </p>
            <p className="grid grid-cols-2 gap-x-3">
              <span className="text-sm">{t.verification.items.productName}</span>
              <span className="text-kraflab-charcoal">{data.name}</span>
            </p>
            <p className="grid grid-cols-2 gap-x-3">
              <span className="text-sm">{t.verification.items.status}</span>
              <span className={`capitalize ${getStatusColorClass(data.status)}`}>{data.status}</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <button
              type="button" 
              className="col-span-2 w-fit mx-auto bg-white border-[1px] border-kraflab-blue text-kraflab-blue rounded-lg overflow-hidden px-10 px- py-1 font-noto-sans"
              onClick={() => { setIsModalOpen(false) }}
            >
              <span className="text-sm">{t.catalogue.button.close}</span>
            </button>
          </div>
        </>}
      </div>
    </Modal>
  )
}

export default ModalVerifyResponse