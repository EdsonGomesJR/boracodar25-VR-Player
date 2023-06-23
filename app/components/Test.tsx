import React, { useRef } from 'react'

interface YouTubePlayerProps {
  videoId: string
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const playerRef = useRef<HTMLIFrameElement>(null)

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    }
  }

  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.src = `https://www.youtube.com/embed/${videoId}`
    }
  }

  return (
    <div>
      <iframe
        ref={playerRef}
        width="960"
        height="540"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  )
}

export default YouTubePlayer
