"use client"
import "./startup.css"
import { useRouter } from "next/navigation"

export default function Startup() {
  const router = useRouter()

  const handleStart = () => {
    router.push("/scene1")
  }

  return (
    <div className="horizontal-container">
      <div className="vertical-container">
        <div className="centre-container">
          <img src="pixelart/scene1/paul-1.png" width="500" height="500" alt="Paul" /> {/* place holder */}
          <div className="buttons-container">
            <button onClick={handleStart}>Start</button>
            <button>Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}
