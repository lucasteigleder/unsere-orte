import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import Map, { Marker } from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"

const GlobeMap = forwardRef(function GlobeMap(
  { places, selectedPlace, onSelectPlace },
  ref
) {
  const [zoom, setZoom] = useState(1.2)
  const mapRef = useRef(null)

  const flyToPlace = (place) => {
    mapRef.current?.flyTo({
      center: [place.coordinates.lng, place.coordinates.lat],
      zoom: 5,
      duration: 3000,
    })
  }

  useImperativeHandle(ref, () => ({
    flyToPlace,
  }))

  return (
    <div className="globe-wrapper">
      <Map
        ref={mapRef}
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
              type="button"
              className={`pin-button ${
                selectedPlace?.id === place.id ? "active" : ""
              }`}
              onClick={() => {
                onSelectPlace(place)
                flyToPlace(place)
              }}
              aria-label={place.name}
            >
              <div
                className="pin"
                style={{
                  transform: `scale(${Math.max(0.65, zoom / 3)})`,
                  opacity: zoom > 2 ? 1 : 0.45,
                }}
              >
                <div className="pin-head">
                  <span className="pin-emoji">{place.emoji}</span>
                </div>
                <div className="pin-tip" />
              </div>
            </button>
          </Marker>
        ))}
      </Map>
    </div>
  )
})

export default GlobeMap