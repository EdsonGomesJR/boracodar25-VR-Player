import { IonIcon } from '@ionic/react'
import { shareOutline, addOutline, copyOutline } from 'ionicons/icons'

export function ActionButtonsRight() {
  return (
    <div className="flex gap-4 text-2xl  text-white/80 ">
      <IonIcon
        icon={shareOutline}
        className=" rounded-[80px] p-2 hover:bg-white/20"
      />
      <IonIcon
        icon={addOutline}
        className=" rounded-[80px] p-2 hover:bg-white/20"
      />
      <IonIcon
        icon={copyOutline}
        className=" rounded-[80px] p-2 hover:bg-white/20"
      />
    </div>
  )
}
