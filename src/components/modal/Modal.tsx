import type { ReactElement, ReactNode } from "react"

interface IModalProps {
  isModalOpen: boolean
  setIsModalOpen: (param: boolean) => void
}

const Modal = ({ props, children }: { props: IModalProps, children: ReactNode }): ReactElement => {
  const {
    isModalOpen,
    setIsModalOpen
  } = props

  return (
    <div 
      onClick={() => { setIsModalOpen(!isModalOpen) }}
      className={`modal ${isModalOpen ? 'show bg-kraflab-gray-modal bg-opacity-70 ' : ''}fixed top-0 left-0 px-8 sm:px-0 flex overflow-hidden w-full h-screen transition-all duration-300 ease-in py-20`}
    >
      {children}
    </div>
  )
}

export default Modal