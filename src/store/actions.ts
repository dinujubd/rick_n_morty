import axios from "axios"

interface SearchConfig {
    name?: string,
    status?: string,
    species?: string,
    type?: string,
    gender?: string,
}

export function init() {
    return (dispatch:any) => {
        return axios.get(`https://rickandmortyapi.com/api/character`).then((intialData) =>
            dispatch({
                type: 'INIT',
                payload: intialData.data,
            })
        )
    }
}

export function setCurretCharacter(id: number) {
    return (dispatch:any) => {
        return axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((characterResponse) =>
            dispatch({
                type: 'SET_CHARACTER',
                payload: characterResponse.data,
            })
        )
    }
}


export function loadMore(url:string) {
    return (dispatch:any) => {
        return axios.get(url).then((characterResponse) =>
            dispatch({
                type: 'APPEND_CHARACTER',
                payload: characterResponse.data,
            })
        )
    }
}


export function searchAction(params: SearchConfig) {
    return (dispatch:any) => {
        return axios.get('https://rickandmortyapi.com/api/character', { params: params }).then((characterResponse) =>
            dispatch({
                type: 'INIT',
                payload: characterResponse.data,
            })
        )
    }
}