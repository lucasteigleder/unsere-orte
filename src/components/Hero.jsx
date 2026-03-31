import { useRef, useState } from "react"
import places from "../data/places"
import GlobeMap from "./GlobeMap"
import "../styles/app.css"

function Hero() {
  const [selectedPlace, setSelectedPlace] = useState(null)
  const mapApiRef = useRef(null)

  const handleSelectPlace = (place) => {
    setSelectedPlace(place)
    mapApiRef.current?.flyToPlace(place)
  }

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

      <section className="experience-layout">
        <aside className="places-sidebar card">
          <p className="sidebar-label">Ereignisse</p>
          <div className="places-list">
            {places.map((place) => (
              <button
                key={place.id}
                type="button"
                className={`places-list-item ${
                  selectedPlace?.id === place.id ? "active" : ""
                }`}
                onClick={() => handleSelectPlace(place)}
              >
                <div className="places-list-top">
                  <span className="places-list-emoji">{place.emoji}</span>
                  <div>
                    <p className="places-list-date">{place.date}</p>
                    <h3>{place.name}</h3>
                  </div>
                </div>
                <p className="places-list-description">{place.description}</p>
              </button>
            ))}
          </div>
        </aside>

        <section className="globe-section globe-stage">
          <GlobeMap
            ref={mapApiRef}
            places={places}
            selectedPlace={selectedPlace}
            onSelectPlace={handleSelectPlace}
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

              <div className="place-image-wrapper">
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  className="place-image"
                />
              </div>

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
      </section>
    </main>
  )
}

export default Hero