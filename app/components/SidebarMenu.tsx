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
      <div className=" flex flex-col items-start justify-between gap-3 rounded-[80px] bg-[rgba(255,255,255,0.1)] p-3 text-2xl text-white/80 backdrop-blur-[16px]">
        <IonIcon icon={playCircleOutline} />
        <IonIcon icon={accessibilityOutline} />
        <IonIcon icon={albumsOutline} />
        <IonIcon icon={searchOutline} />
      </div>
      {/* ------- */}
    </div>
  )
}
