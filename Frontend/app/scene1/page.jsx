"use client"
import "../scene.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Scene1() {
  const text0 = [
    "pixelart/scene1/paul-text/emma.png",
    "pixelart/scene1/paul-text/emma-im-sorry.png"
  ]

  const text1 = [
    "pixelart/scene1/emma-text/w-what.png",
    "pixelart/scene1/emma-text/paul-what-are-you.png"
  ]
  const text2 = [ // musical
    "pixelart/scene1/paul-text/emma-i-want-you.png",
    "pixelart/scene1/paul-text/to-join-the-party.png"
  ]

  const text3 = [ // musical
    "pixelart/scene1/paul-text/it's-inevitable.png",
    "pixelart/scene1/paul-text/for-us.png",
  ]

  const text4 = [
    "pixelart/scene1/emma-text/get-away.png",
    "pixelart/scene1/emma-text/you're-not-paul.png",
    "pixelart/scene1/emma-text/you're-one-of-them.png"
  ]

  const textOrder = [text0, text1, text2, text3, text4]

  const paulIdle = [
    "pixelart/scene1/paul-1.png",
    "pixelart/scene1/paul-2.png",
    "pixelart/scene1/paul-3.png",
    "pixelart/scene1/paul-2.png",
  ]

  const emmaIdle = [
    "pixelart/scene1/emma-1.png",
    "pixelart/scene1/emma-2.png",
    "pixelart/scene1/emma-3.png",
    "pixelart/scene1/emma-2.png",
  ]

  const paulEmmaIdle = [
    "pixelart/scene1/paul-emma-1.png"
  ]

  const notes = [
    "pixelart/textbox-notes/notes-1.png",
    "pixelart/textbox-notes/notes-2.png",
    "pixelart/textbox-notes/notes-3.png",
    "pixelart/textbox-notes/notes-2.png"
  ]

  const bgOrder = [paulIdle, emmaIdle, paulIdle, paulEmmaIdle, emmaIdle]

  const [textOrderIndex, setTextOrderIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)

  const [bgOrderIndex, setBgOrderIndex] = useState(0)
  const [bgIndex, setBgIndex] = useState(0)

  const [isFading, setIsFading] = useState(false)

  const [isMusical, setIsMusical] = useState(false)
  const [musicalIndex, setMusicalIndex] = useState(0)

  const router = useRouter()

  function handleSceneChange() {
    setIsFading(true)
    setTimeout(() => {
      router.push("/gameplay1")
    }, 500)
  }

  function changeText() {
    const currentText = textOrder[textOrderIndex]

    // finished all dialogue
    if ((textOrderIndex >= textOrder.length - 1)
        && textIndex >= currentText.length - 1) {
      handleSceneChange()
      return null
    }

    setTextIndex((prev) => {
      // finished this shot
      if (prev >= currentText.length - 1) {
        setTextOrderIndex((prev) => {return prev + 1})
        setBgOrderIndex((prev) => {return prev + 1})
        musicalCheck()
        return 0
      }

      // else go to next line
      return prev + 1
    })
  }

  function musicalCheck() {
    if (textOrderIndex === 1 ||
        textOrderIndex === 2) {
      setIsMusical(true);
      return
    }
    setIsMusical(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(
        (prev) => (prev + 1) % bgOrder[bgOrderIndex].length
      )
      setMusicalIndex(
        (prev) => (prev + 1) % notes.length
      )
    }, 700)

    return () => clearInterval(interval)
  }, [bgOrderIndex])

  return (
    <div className="horizontal-container">
      <div className="vertical-container">
        <div className="scene-bg-container">
          <img
            src="pixelart/scene1/background-faded-temp.png"
            className="sceneBackground"
          />
          <div className={`image-container ${isFading ? "fade-out" : ""}`}>
          <img
            src={textOrder[textOrderIndex][textIndex]}
            onClick={changeText}
            className="textbox"
          />
          <img
            src={notes[musicalIndex]}
            onClick={changeText}
            className={`notes ${isMusical ? "" : "invisible"}`}
          />
          <img
            src={bgOrder[bgOrderIndex][bgIndex]}
            onClick={changeText}
            className="background"
          />
        </div>          
        </div>
      </div>
    </div>
  )
}
