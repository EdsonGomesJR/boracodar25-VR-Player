import { IoShareOutline, IoAddOutline, IoCopyOutline } from 'react-icons/io5'

export function ActionButtonsRight() {
  return (
    <div className="flex gap-4 text-2xl  text-white/80 ">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
        <IoShareOutline size={24} />
      </div>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
        <IoAddOutline size={24} />
      </div>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
        <IoCopyOutline size={24} />
      </div>
    </div>
  )
}
