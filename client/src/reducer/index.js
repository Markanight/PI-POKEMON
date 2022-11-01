
const initialState = {
    pokemons : [],
    allPokemons : [],
    pokemonsDetail : [],
    types : [],
    pokemonData: []
}

function rootReducer (state = initialState, action) {
    switch(action.type){
        case 'STORE_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        case 'GET_NAME_POKEMONS' :
            return {
                ...state,
                pokemons: action.payload
            }
        case 'GET_TYPES' :
            return {
                ...state,
                types: action.payload
            }
        case 'GET_POKEMON_DATA' :
            return {
                ...state,
                pokemonData: action.payload

            }
        case 'STORE_POKEMONS_DETAIL' :
            return {
                ...state,
                pokemonsDetail: action.payload,
            }
        case 'FILTER_BY_TYPE' :
            const allPokemons = state.allPokemons
            const typeFiltered = action.payload === 'all' ? allPokemons : (allPokemons.filter((el) => el.types.map(el=>el.name).includes(action.payload)))
            return {
                ...state,
                pokemons : typeFiltered
            }
        case 'POST_POKEMON' :
            return {
                ...state
            }
        case 'FILTER_BY_DB' :
            const allPokemons1 = state.allPokemons
            const dataBasePokemons = action.payload === 'created' ? allPokemons1.filter((el) => el.createdInDb) : allPokemons1.filter((el) => !el.createdInDb)
            return {
                ...state,
                pokemons : action.payload === 'all' ? state.allPokemons : dataBasePokemons
            }
            case 'FILTER_BY_NAME' :
                const filterOrder = action.payload === 'desc' ? 
                state.pokemons.sort((a, b) => {
                    if(a.name < b.name){
                        return 1;
                    }
                    if (b.name < a.name){
                        return -1
                    }
                    return 0
                }) : 
                state.pokemons.sort((a, b) => {
                    if(a.name > b.name){
                        return 1;
                    }
                    if (b.name > a.name){
                        return -1
                    }
                    return 0
                })
                return {
                    ...state,
                    pokemons: filterOrder
                }
            case 'FILTER_BY_STRENGTH' : 

                const filterWeakers = action.payload === 'weakers' ?
                state.pokemonsDetail.sort((a, b) => {
                    if(a.attack > b.attack){
                        return 1;
                    }
                    if (b.attack > a.attack){
                        return -1
                    }
                    return 0
                }) : 
                
                state.pokemonsDetail.sort((a, b) => {
                    if(a.attack > b.attack){
                        return -1;
                    }
                    if (b.attack > a.attack){
                        return 1
                    }
                    return 0
                })
                return {
                    ...state,
                    pokemons: action.payload === 'all' ? state.allPokemons : filterWeakers
                }
                default:
                    return state
        
    }
}
export default rootReducer;