import { IonIcon } from '@ionic/react'
import { text, lockClosed, refresh } from 'ionicons/icons'

export function AdressWidget() {
  return (
    <div className="flex  w-[440px] items-center justify-between rounded-[80px] bg-black/10 p-3 text-2xl leading-none text-white/80 shadow-[0px_-1px_0px_0px_rgba(255,255,255,0.10)_inset,_0px_1px_0px_0px_rgba(0,0,0,0.20)_inset]">
      <IonIcon icon={text} className="rounded-full  text-base" />
      <div className="flex items-center gap-1">
        <IonIcon icon={lockClosed} className="text-base" />
        <p className=" text-[15px]">rocketseat.com</p>
      </div>
      <IonIcon icon={refresh} className=" rounded-full hover:bg-white/20" />
    </div>
  )
}
