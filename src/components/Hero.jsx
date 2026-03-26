import places from "../data/places"
import "../styles/app.css"

function Hero() {
  return (
    <main className="hero">
      <p className="eyebrow">Unsere Orte</p>
      <h1>Eine kleine App nur für uns</h1>
      <p className="subtitle">
        Hier entsteht unsere persönliche Karte mit Erinnerungen, Lieblingsorten
        und kleinen Überraschungen.
      </p>

      <section className="card">
        <h2>Unsere ersten Stationen</h2>
        <div className="places-preview">
          {places.map((place) => (
            <article key={place.id} className="place-item">
              <p className="place-date">{place.date}</p>
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Hero