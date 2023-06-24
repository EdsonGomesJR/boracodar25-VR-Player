import { IoText, IoLockClosed, IoRefresh } from 'react-icons/io5'

export function AdressWidget() {
  return (
    <div className="flex  w-[440px] items-center justify-between rounded-[80px] bg-black/10 p-3 text-2xl leading-none text-white/80 shadow-[0px_-1px_0px_0px_rgba(255,255,255,0.10)_inset,_0px_1px_0px_0px_rgba(0,0,0,0.20)_inset]">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
        <IoText size={15} />
      </div>
      <div className="flex items-center justify-center gap-1">
        <IoLockClosed size={15} />

        <p className="mt-1 flex self-baseline text-[15px]">rocketseat.com</p>
      </div>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
        <IoRefresh size={24} />
      </div>
    </div>
  )
}
