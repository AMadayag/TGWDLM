"use client";
import "./startup.css"
import { useRouter } from "next/navigation"

export default function Startup() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/cutscene1");
  }

  return (
    <div className="horizontal-container">
      <div className="vertical-container">
        <div className="centre-container">
          <img src="pixelart/paul-1-large.png" width="500" height="500" alt="Paul" />
          <div className="buttons-container">
            <button onClick={handleStart}>Start</button>
            <button>Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}
