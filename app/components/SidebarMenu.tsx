import {
  IoPlayCircleOutline,
  IoAccessibilityOutline,
  IoAlbumsOutline,
  IoSearchOutline,
} from 'react-icons/io5'

export function SidebarMenu() {
  return (
    <div className="flex items-center ">
      <div
        className=" flex flex-col  items-start gap-[72px] rounded-[80px] bg-[rgba(255,255,255,0.1)] p-3  text-white/80 
      shadow-[0px_8px_4px_0px_rgba(0,0,0,0.05),_0px_1px_1px_0px_rgba(255,255,255,0.30)_inset,_0px_-1px_1px_0px_rgba(255,255,255,0.10)_inset]
      
      backdrop-blur-[16px]"
      >
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
          <IoPlayCircleOutline size={28} />
        </div>
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
          <IoAccessibilityOutline size={28} />
        </div>
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
          <IoAlbumsOutline size={28} />
        </div>
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
          <IoSearchOutline size={28} />
        </div>
      </div>
    </div>
  )
}
