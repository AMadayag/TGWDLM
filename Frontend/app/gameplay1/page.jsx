"use client"
import "../scene.css"
import "../gameplay.css"
import { useState, useEffect, useRef } from "react"
// import { useRouter } from "next/navigation"

export default function Gameplay1() {
  const emmaWalk = [
    "pixelart/mini-sprites/emma/emma-walk-1.png",
    "pixelart/mini-sprites/emma/emma-still.png",
    "pixelart/mini-sprites/emma/emma-walk-3.png",
    "pixelart/mini-sprites/emma/emma-still.png"
  ]

  const [walking, setWalking] = useState(false)
  const [emmaWalkIndex, setEmmaWalkIndex] = useState(1)
  const activeKeys = useRef(new Set())

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (['w', 'a', 's', 'd'].includes(event.key)) {
        activeKeys.current.add(event.key)
        setWalking(true)
      }
    }
  
    const handleKeyUp = (event) => {
      if (['w', 'a', 's', 'd'].includes(event.key)) {
        activeKeys.current.delete(event.key)
    
        if (activeKeys.current.size === 0) {
          setWalking(false)
          setEmmaWalkIndex(1)
        }
      }
    }
  
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useEffect(() => {
    if (!walking) return
  
    const interval = setInterval(() => {
      setEmmaWalkIndex(
        (prev) => (prev + 1) % emmaWalk.length
      )
    }, 250)
  
    return () => clearInterval(interval)
  }, [walking, emmaWalk.length])
  
  return(
    <div className="horizontal-container">
      <div className="vertical-container">
        <div className="scene-bg-container">
          <img
            src="pixelart/scene1/background-temp.png"
            className="sceneBackground"
          />
          <div className="sprite-container">
            <img
              src={emmaWalk[emmaWalkIndex]}
              className="emma-sprite"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
