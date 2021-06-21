import { createAction, createReducer } from '@reduxjs/toolkit';
import { CharacterResponse } from '../models/characters';


export interface Character {
    id: number,
    name: string,
    image: string
}

interface CharactersState {
    characters: Character[],
    currentCharacter: Character | null,
    nextUrl: string | null
}


const mapCharacters = (source: CharacterResponse) => {
    return source?.results?.map(rawData => ({ id: rawData.id, name: rawData.name, image: rawData.image })) ?? [];
}

const mapNextUrl = (source: CharacterResponse) => {
    return source?.info?.next;
}

const initialState: CharactersState = {
    characters: [],
    currentCharacter: null,
    nextUrl: null
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