'use client'
import { IonIcon } from '@ionic/react'
import {} from 'ionicons/icons'

import { SidebarMenu } from './components/SidebarMenu'
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <div className="relative flex h-[1080px] w-[1920px] items-center justify-center  bg-[url('/images/background.png')] bg-cover bg-no-repeat">
      {/* Adjustment Layer */}
      <div className="absolute left-[calc(50%-1920px/2)] top-[calc(50%-1080px/2)] h-[1080px] w-[1920px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,0.4)_0%,_rgba(0,0,0,0.6)_100%)]" />
      {/* Shadow  */}
      <div className="absolute left-[394.38px] top-[926.46px] h-[10px] w-[975.87px] bg-[url('/images/shadow.png')] bg-cover bg-no-repeat" />

      {/* Main Container */}
      <main className="absolute flex h-[660px] w-[1048px]   gap-6  border-2 ">
        <SidebarMenu />
        {/* Column */}
        <div className="flex flex-1 flex-col items-center gap-6">
          {/* NavBar */}
          <NavBar />
          {/* Screen */}
          <div className=" bg-teal-400"> Player</div>
          {/* Interaction */}
        </div>
      </main>
    </div>
  )
}
