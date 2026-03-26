import { useState } from "react"
import places from "../data/places"
import GlobeMap from "./GlobeMap"
import "../styles/app.css"

function Hero() {
  const [selectedPlace, setSelectedPlace] = useState(null)

  return (
    <main className="hero globe-page">
      <div className="intro-block">
        <p className="eyebrow">Unsere Orte</p>
        <h1>Unsere kleine Welt</h1>
        <p className="subtitle">
  Zoome hinein und entdecke die Orte, an denen unsere Geschichte ihre
  schönsten Kapitel geschrieben hat.
</p>
      </div>

      <section className="globe-section globe-stage">
        <GlobeMap
          places={places}
          selectedPlace={selectedPlace}
          onSelectPlace={setSelectedPlace}
        />

        {selectedPlace && (
  <section className="card detail-card overlay-card">
    <button
      className="close-card-button"
      onClick={() => setSelectedPlace(null)}
      aria-label="Karte schließen"
    >
      ✕
    </button>

    <p className="place-date">{selectedPlace.date}</p>
    <h2>
      {selectedPlace.emoji} {selectedPlace.name}
    </h2>
    <p className="detail-text">{selectedPlace.description}</p>

    <div className="memory-box">
      <h3>Erinnerung</h3>
      <p>{selectedPlace.memory}</p>
    </div>
  </section>
)}
      </section>
    </main>
  )
}

export default Hero