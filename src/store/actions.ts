import axios from "axios"
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

const setCurretCharacterAction = (id: number) => (dispatch: ApplicationDispatch) => axios.get(getCharacterUrl(id)).then((characterResponse) =>
    dispatch({
        type: Actions.SetCurrentCharacter,
        payload: characterResponse.data,
    })
)

const loadMoreAction = (url: string) => (dispatch: ApplicationDispatch) => axios.get(url).then((characterResponse) =>
    dispatch({
        type: Actions.AppendCharacters,
        payload: characterResponse.data,
    })
)

const searchAction = (params: SearchConfig) => (dispatch: any) => axios.get(apiBaseUrl, { params: params }).then((characterResponse) =>
    dispatch({
        type: 'INIT',
        payload: characterResponse.data,
    }))


export { initAction, searchAction, loadMoreAction, setCurretCharacterAction, Actions }