import { createAction, createReducer } from '@reduxjs/toolkit';
import { Character, CharacterResponse } from '../models/characters';


export interface CharacterChunk {
    id: number,
    name: string,
    image: string
}

interface CharactersState {
    characters: CharacterChunk[],
    currentCharacter?: Character,
    nextUrl?: string
}


const mapCharacters = (source: CharacterResponse) => {
    return source?.results?.map(rawData => ({ id: rawData.id, name: rawData.name, image: rawData.image })) ?? [];
}

const mapNextUrl = (source: CharacterResponse) => {
    return source?.info?.next;
}

const initialState: CharactersState = {
    characters: []
}

const initData = createAction('INIT')
export const selectCharacter = createAction('SET_CHARACTER')
export const appendCharacter = createAction('APPEND_CHARACTER');

export const charactersReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(initData, (state, action:any) => {
                return { ...state, characters: mapCharacters(action.payload), nextUrl: mapNextUrl(action.payload) }
            })
            .addCase(appendCharacter, (state, action:any) => {
                return { ...state, characters: [...state.characters, ...mapCharacters(action.payload)], nextUrl: mapNextUrl(action.payload) }
            })
            .addCase(selectCharacter, (state, action:any) => {
                return {...state, currentCharacter: action.payload}
            })
            .addDefaultCase((state, action) => { })

    });