import axios, { AxiosError } from "axios"
import { Character, Location } from "../Models/characters";
import { ApplicationDispatch } from "./store";

interface SearchConfig {
    name?: string,
    status?: string,
    species?: string,
    type?: string,
    gender?: string,
}

const apiBaseUrl = 'https://rickandmortyapi.com/api/character';

enum Actions {
    Init = 'INIT',
    SetCurrentCharacter = 'SET_CHARACTER',
    AppendCharacters = 'APPEND_CHARACTER',
}

const getCharacterUrl = (id: number) => `${apiBaseUrl}/${id}`;

const initAction = () => (dispatch: ApplicationDispatch) => axios.get(apiBaseUrl).then((intialData) =>
    dispatch({
        type: Actions.Init,
        payload: intialData.data,
    })
)

const setCurretCharacterAction = (id: number) => async (dispatch: ApplicationDispatch) => {
    const character = await axios.get<Character>(getCharacterUrl(id))
    const location = character?.data?.location?.url ? await axios.get<Location>(character.data.location.url) : null
    const origin = character?.data?.origin?.url ? await axios.get<Location>(character.data.origin.url) : null

    dispatch({
        type: Actions.SetCurrentCharacter,
        payload: {
            character: character.data,
            location: location?.data,
            origin: origin?.data
        },
    });
}

const loadMoreAction = (url: string) => (dispatch: ApplicationDispatch) => axios.get(url).then((characterResponse) =>
    dispatch({
        type: Actions.AppendCharacters,
        payload: characterResponse.data,
    })
)

const searchAction = (params: SearchConfig) => (dispatch: any) => axios.get(apiBaseUrl, { params: params }).then((characterResponse) =>
    dispatch({
        type: Actions.Init,
        payload: characterResponse.data,
    })).catch((reason: AxiosError) => {
        if (reason.response?.status === 404) {
            dispatch({
                type: Actions.Init,
                payload: [],
            })
        }
    })


export { initAction, searchAction, loadMoreAction, setCurretCharacterAction, Actions }