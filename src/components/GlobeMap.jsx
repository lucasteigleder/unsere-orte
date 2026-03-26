import Map, { Marker } from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"

function GlobeMap({ places, selectedPlace, onSelectPlace }) {
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
              <span className="pin-dot">{place.emoji}</span>
            </button>
          </Marker>
        ))}
      </Map>
    </div>
  )
}

export default GlobeMap