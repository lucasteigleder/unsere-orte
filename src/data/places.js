import erstesDateImage from "../assets/erstes-date.jpg"
import lieblingsortImage from "../assets/lieblingsort.jpg"
import naechsterOrtImage from "../assets/naechster-ort.jpg"
import ersterKussImage from "../assets/erster-kuss.jpg"

const places = [
  {
    id: 1,
    name: "Erstes Date",
    date: "15. Februar 2024",
    description: "Hier hat alles angefangen.",
    memory:
      "Hier war unser erstes richtiges Date, bei Sahara.",
    emoji: "🥙",
    image: erstesDateImage,
    coordinates: {
      lng: 8.70795688914508,
      lat: 49.41187033202423,
    },
  },
  {
    id: 2,
    name: "Lieblingsort",
    date: "Sommer 2025",
    description: "Unser erster gemeinsamer Urlaub.",
    memory:
      "Unser erster gemeinsamer Urlaub in Kroatien war etwas wundervolles mit schönen Erinnerungen, die bleiben.",
    emoji: "🌞",
    image: lieblingsortImage,
    coordinates: {
      lng: 15.220723707079312,
      lat: 44.26359670101335,
    },
  },
  {
    id: 3,
    name: "Nächster Ort",
    date: "Bald",
    description: "Hier wartet noch eine Überraschung auf uns.",
    memory: "Und das ist erst der Anfang von allem, was noch kommt ❤️",
    emoji: "✨",
    image: naechsterOrtImage,
    coordinates: {
      lng: 14.435459857143384,
      lat: 50.074608434761565,
    },
  },
  {
    id: 4,
    name: "Erster Kuss",
    date: "16.06.2024",
    description: "Hier war unser erster Kuss.",
    memory: "Hier hat es offiziell mit uns begonnen ❤️",
    emoji: "😘",
    image: ersterKussImage,
    coordinates: {
      lng: 8.800469529760658,
      lat: 49.33926251463855,
    },
  },
]

export default places