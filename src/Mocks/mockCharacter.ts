import { Character } from "../Models/characters";

const mockCharacter: Character = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
    },
    location: {
        id: 1,
        dimension: '',
        residents: [],
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [],
    url: "https://rickandmortyapi.com/api/character/1",
    created: new Date("2017-11-04T18:48:46.250Z")
}

export default mockCharacter;


