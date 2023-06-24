import { IonIcon } from '@ionic/react'
import {
  playCircleOutline,
  accessibilityOutline,
  albumsOutline,
  searchOutline,
} from 'ionicons/icons'

export function SidebarMenu() {
  return (
    <div className="flex items-center ">
      <div
        className=" flex flex-col  items-start gap-[72px] rounded-[80px] bg-[rgba(255,255,255,0.1)] p-3  text-white/80 
      shadow-[0px_8px_4px_0px_rgba(0,0,0,0.05),_0px_1px_1px_0px_rgba(255,255,255,0.30)_inset,_0px_-1px_1px_0px_rgba(255,255,255,0.10)_inset]
      
      backdrop-blur-[16px]"
      >
        <IonIcon
          className=" rounded-full p-2 text-[24px]  hover:bg-white/20"
          icon={playCircleOutline}
        />
        <IonIcon
          icon={accessibilityOutline}
          className=" rounded-[80px] p-2 text-[24px] hover:bg-white/20"
        />
        <IonIcon
          icon={albumsOutline}
          className=" rounded-[80px] p-2 text-[24px]  hover:bg-white/20"
        />
        <IonIcon
          icon={searchOutline}
          className=" rounded-full p-2 text-[24px]  hover:bg-white/20"
        />
      </div>
    </div>
  )
}
