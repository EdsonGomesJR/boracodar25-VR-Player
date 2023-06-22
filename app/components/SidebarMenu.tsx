import { IonIcon } from '@ionic/react'
import {
  playCircleOutline,
  accessibilityOutline,
  albumsOutline,
  searchOutline,
} from 'ionicons/icons'

export function SidebarMenu() {
  return (
    <div className="flex items-center">
      {/* Sidebar Actions */}
      <div className=" flex   flex-col items-center  gap-3 rounded-[80px] bg-[rgba(255,255,255,0.1)]  p-3 text-white/80 backdrop-blur-[16px]">
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
      {/* ------- */}
    </div>
  )
}
