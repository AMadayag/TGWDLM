"use client"
import "./page.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Scene1() {
  const text = [
    "pixelart/scene1/paul-text/hey-emma....png",
    "pixelart/scene1/paul-text/don't-you-want.png",
    null
  ]

  const paulIdle = [
    "pixelart/scene1/paul-1.png",
    "pixelart/scene1/paul-2.png",
    "pixelart/scene1/paul-3.png",
    "pixelart/scene1/paul-2.png"
  ]

  const router = useRouter()

  const handleSceneChange = () => {
    router.push("/scene2")
  }

  const [textIndex, setTextIndex] = useState(0)
  const [bgIndex, setBgIndex] = useState(0)

  function changeText() {
    setTextIndex((prev) => {
      if (prev >= (text.length - 1)) {
        handleSceneChange()
      }
      return prev + 1;
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % paulIdle.length)
    }, 800)

    return () => clearInterval(interval)
  }, [])


  return(
    <div className="horizontal-container">
      <div className="vertical-container">
        <div className="image-container">
          <img src={text[textIndex]} onClick={changeText} className="textbox"></img>
          <img src={paulIdle[bgIndex]} onClick={changeText} className="background"></img>
        </div>
      </div>
    </div>
  )
}