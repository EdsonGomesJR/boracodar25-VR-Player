'use client'
import { IonIcon } from '@ionic/react'
import {
  playCircleOutline,
  accessibilityOutline,
  albumsOutline,
  searchOutline,
  chevronBack,
  chevronForward,
  text,
  lockClosed,
  refresh,
  shareOutline,
  addOutline,
  copyOutline,
} from 'ionicons/icons'

import { PanelLeft } from 'akar-icons'

export default function Home() {
  return (
    <div className="relative flex h-[1080px] w-[1920px] items-center justify-center  bg-[url('/images/background.png')] bg-cover bg-no-repeat">
      {/* Adjustment Layer */}
      <div className="absolute left-[calc(50%-1920px/2)] top-[calc(50%-1080px/2)] h-[1080px] w-[1920px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,0.4)_0%,_rgba(0,0,0,0.6)_100%)]" />
      {/* Shadow  */}
      <div className="absolute left-[394.38px] top-[926.46px] h-[10px] w-[975.87px] bg-[url('/images/shadow.png')] bg-cover bg-no-repeat" />

      {/* Main Container */}
      <main className="border-1 absolute flex h-[660px]   w-[1048px]  gap-6 ">
        {/* SideMenu */}
        <div className="flex items-center bg-slate-300">
          {/* Sidebar Actions */}
          <div className="flex flex-col justify-between gap-4 bg-red-400 p-2">
            <div>Play</div>
            <div>Homem</div>
            <div>Quadrado</div>
            <div>Lupa</div>
          </div>
          {/* ------- */}
        </div>
        {/* Column */}
        <div className="flex flex-1 flex-col items-center gap-6">
          {/* NavBar */}
          <div className=" flex h-16 w-1/2  bg-slate-500 text-white">
            {/* Actions */}
            <div>
              <div>Sidebar</div>
              <div> Left</div>
              <div>Right</div>
            </div>
            {/* ---- */}
            {/* Adress */}
            <div>
              <div>Tipogria</div>
              <div> Cadeado +Adress</div>
              <div>Refresh</div>
            </div>
            {/* ------- */}
            {/* Actions II */}
            <div>
              <div>Enviar</div>
              <div>+</div>
              <div>Copiar</div>
            </div>
            {/* --------- */}
          </div>
          {/* Screen */}
          <div className=" bg-teal-400"> Player</div>
          {/* Interaction */}
        </div>
      </main>
    </div>
  )
}
