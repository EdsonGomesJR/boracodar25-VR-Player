'use client'
import { IonIcon } from '@ionic/react'
import { PanelLeft } from 'akar-icons'
import { chevronBack, chevronForward } from 'ionicons/icons'

export function ActionButtonsLeft() {
  return (
    <div className="flex h-6 w-[152px] items-center gap-4 text-white/80 ">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px]   hover:bg-white/20">
        <PanelLeft size={24} />
      </div>
      <IonIcon
        icon={chevronBack}
        className="rounded-[80px] p-2  text-2xl hover:bg-white/20"
      />
      <IonIcon
        icon={chevronForward}
        className="rounded-[80px] p-2 text-2xl  hover:bg-white/20"
      />
    </div>
  )
}
