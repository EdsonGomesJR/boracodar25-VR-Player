import React from 'react'
import { ActionButtonsLeft } from './ActionButtonsLeft'
import { AdressWidget } from './AdressWidget'
import { ActionButtonsRight } from './ActionButtonsRight'

function NavBar() {
  return (
    <div
      className=" flex items-center justify-center gap-6 rounded-[80px] bg-white/10 px-3 py-2
    shadow-[0px_8px_4px_0px_rgba(0,0,0,0.05),_0px_1px_1px_0px_rgba(255,255,255,0.30)_inset,_0px_-1px_1px_0px_rgba(255,255,255,0.10)_inset]
    backdrop-blur-lg
    "
    >
      <ActionButtonsLeft />
      <AdressWidget />

      <ActionButtonsRight />
    </div>
  )
}

export default NavBar
