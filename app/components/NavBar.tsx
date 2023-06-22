import React from 'react'
import {
  chevronForward,
  text,
  lockClosed,
  refresh,
  shareOutline,
  addOutline,
  copyOutline,
  chevronBack,
} from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import { BsChevronRight } from 'react-icons/bs'
import { PanelLeft } from 'akar-icons'
import Image from 'next/image'
import chevronBack2 from '../../public/chevron-back.svg'

function NavBar() {
  return (
    <div className=" flex items-center gap-6 rounded-[80px] bg-[rgba(255,255,255,0.1)]  p-3  text-[24px] text-white">
      {/* Actions */}
      <div className="flex items-center justify-center gap-4 p-3 text-center">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[80px] text-2xl  hover:bg-white/20">
          <PanelLeft size={24} />
        </div>
        <IonIcon
          icon={chevronBack}
          className="rounded-[80px] p-2   hover:bg-white/20"
        />
        <IonIcon
          icon={chevronForward}
          className="rounded-[80px] p-2   hover:bg-white/20"
        />
      </div>
      {/* ---- */}
      {/* Adress */}
      <div className="flex ">
        <IonIcon icon={text} />

        <div>
          <IonIcon icon={lockClosed} /> Adress
        </div>
        <IonIcon icon={refresh} />
      </div>
      {/* ------- */}
      {/* Actions II */}
      <div className="flex">
        <IonIcon icon={shareOutline} />
        <IonIcon icon={addOutline} />
        <IonIcon icon={copyOutline} />
      </div>
      {/* --------- */}
    </div>
  )
}

export default NavBar
