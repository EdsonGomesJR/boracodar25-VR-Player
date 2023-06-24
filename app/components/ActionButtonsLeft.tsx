import { PanelLeft } from 'akar-icons'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
export function ActionButtonsLeft() {
  return (
    <div className="flex h-6 w-[152px] items-center gap-4 text-white/80 ">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
        <PanelLeft size={24} />
      </div>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
        <IoChevronBack size={24} />
      </div>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
        <IoChevronForward size={24} />
      </div>
    </div>
  )
}
