import axios from 'axios';

export function getPokemons(){
        return async function(dispatch){
            const json = await axios.get('http://localhost:3001/pokemons');
            return dispatch({
            type: 'STORE_POKEMONS',
            payload: json.data
            })
    }
}

export function getPokemonDetail(){
    return async function(dispatch){
        const json = await axios.get('http://localhost:3001/pokemons/detail');
        return dispatch({
        type: 'STORE_POKEMONS_DETAIL',
        payload: json.data
        })
}
}     

export function filterPokemonByType(payload){
    return {
        type : 'FILTER_BY_TYPE',
        payload
    }
}

export function filterPokemonByDB(payload){
    return {
        type: 'FILTER_BY_DB',
        payload
    }
}

export function filterPokemonByName(payload){
    return {
        type: 'FILTER_BY_NAME',
        payload
    }
}

export function filterPokemonByStrength(payload){
    return {
        type: 'FILTER_BY_STRENGTH',
        payload
    }
}

export function getNamePokemons(name){
    return async function(dispatch) {
            var json = await axios.get('http://localhost:3001/pokemons?name=' + name)
            return dispatch({
                type : 'GET_NAME_POKEMONS',
                payload : json.data
            })
    }
}

export function getPokemonData(pokeId){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/pokemons/${pokeId}`)
        return dispatch({
            type: 'GET_POKEMON_DATA',
            payload : json.data
        })
    }
}

export function getTypes() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/types')
        return dispatch({
            type : 'GET_TYPES',
            payload : json.data
        })
}
}

export function postPokemon(payload) {
    return async function(dispatch) {
        var json = await axios.post('http://localhost:3001/pokemons', payload)
        console.log(json)
        return json
    
    }
}

    