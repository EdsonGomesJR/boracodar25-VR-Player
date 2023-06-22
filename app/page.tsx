'use client'

import { SidebarMenu } from './components/SidebarMenu'
import NavBar from './components/NavBar'
import { Player } from './components/Player'

export default function Home() {
  return (
    <div className="relative flex h-[1080px] w-[1920px] items-center justify-center  bg-[url('/images/background.png')] bg-cover bg-no-repeat">
      {/* Adjustment Layer */}
      <div className="absolute left-[calc(50%-1920px/2)] top-[calc(50%-1080px/2)] h-[1080px] w-[1920px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,0.4)_0%,_rgba(0,0,0,0.6)_100%)]" />
      {/* Shadow  */}
      <div className="absolute left-[394.38px] top-[926.46px] h-[10px] w-[975.87px] bg-[url('/images/shadow.png')] bg-cover bg-no-repeat" />

      {/* Main Container */}
      <main className="absolute flex h-[660px] w-[1048px]   gap-6 ">
        <SidebarMenu />
        {/* Column */}
        <div className="flex flex-1 flex-col items-center gap-6">
          {/* NavBar */}
          <NavBar />
          {/* Screen */}
          <Player />
          {/* Effect  it' was to blur the video image and perhaps create an light effect while video is playing, but a just add a black opacity 10% blur to make it more darker */}
          <div className="absolute -bottom-[4px] -left-[50px] h-[596px] w-[1060px] rounded-[32px] bg-black/10  blur-[50px]" />
          {/* Interaction */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-2 w-2 rounded-lg bg-white/60 backdrop-blur-[2px]" />
            <div className="h-2 w-[86px]  rounded-lg bg-white/60 backdrop-blur-[2px]" />
          </div>
        </div>
      </main>
    </div>
  )
}
