import { useEffect, useRef, useState } from 'react'

function usePlayerState($videoPlayer: any) {
  const [playerState, setPlayerState] = useState({
    playing: false,
  })

  useEffect(() => {
    // playerState.playing
    //   ? $videoPlayer.current.play()
    //   : $videoPlayer.current.pause()
  }, [playerState.playing, $videoPlayer])
  function toggleVideoPlay() {
    console.log($videoPlayer.current)
    setPlayerState({
      ...playerState,
      playing: !playerState.playing,
    })
  }

  return {
    playerState,
    toggleVideoPlay,
  }
}

export function Player() {
  const $videoPlayer = useRef(null)
  const { toggleVideoPlay, playerState } = usePlayerState($videoPlayer)
  return (
    <>
      <iframe
        ref={$videoPlayer}
        className="flex h-[540px] w-[960px] items-center justify-center overflow-hidden rounded-[32px] border border-white/30 shadow-[0px_8px_4px_0px_rgba(0,0,0,0.05)]"
        src="https://www.youtube.com/embed/uL6nu0-zhu0"
        title="Hero - BoraCodar"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <div className="flex gap-2">
        <button className="bg-teal-300 p-4" onClick={toggleVideoPlay}>
          {playerState.playing ? 'Pause' : 'Play'}
        </button>
        <input type="range" name="" id="" />
      </div>
    </>
  )
}
