import { useState } from "react"
import Map, { Marker } from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"

function GlobeMap({ places, selectedPlace, onSelectPlace }) {
  const [zoom, setZoom] = useState(1.2)

  return (
    <div className="globe-wrapper">
      <Map
        initialViewState={{
          longitude: 10,
          latitude: 20,
          zoom: 1.2,
        }}
        mapStyle="https://demotiles.maplibre.org/style.json"
        projection="globe"
        attributionControl={false}
        onMove={(evt) => setZoom(evt.viewState.zoom)}
        style={{ width: "100%", height: "100%" }}
      >
        {places.map((place) => (
          <Marker
            key={place.id}
            longitude={place.coordinates.lng}
            latitude={place.coordinates.lat}
            anchor="bottom"
          >
            <button
              className={`pin-button ${
                selectedPlace?.id === place.id ? "active" : ""
              }`}
              onClick={() => onSelectPlace(place)}
              aria-label={place.name}
            >
              <span
                className="pin-dot"
                style={{
                  transform: `scale(${Math.max(0.6, zoom / 3)})`,
                  opacity: zoom > 2 ? 1 : 0.4,
                }}
              >
                {place.emoji}
              </span>
            </button>
          </Marker>
        ))}
      </Map>
    </div>
  )
}

export default GlobeMap