const axios = require('axios')
const {Pokemon, Type} = require('../db.js')

const getApiInfo = async () => {
    const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
    if(apiUrl === null) {
        throw new Error('No pudimos traer los datos de la API')
    }
    const apiInfo = apiUrl.data.results
    
    const pokemonInfo = await Promise.all(apiInfo.map((el)=> {
        return axios.get(el.url)
    })).then((values) => {
        
            return values.map((el)=>{
                const pokemon = el.data
            return {
                id: pokemon.id,
                name: pokemon.name,
                types: pokemon.types.map((t) => {return {name: t.type.name}}),
                img: pokemon.sprites.other.dream_world.front_default
            }
        })    
     })   
     return pokemonInfo
     } 
   
const getApiTypes = async () => {
    const apiInfo = await axios.get('https://pokeapi.co/api/v2/type');
    const types = apiInfo.data.results
    const everyType = types.map((el)=>{return el.name})
    return everyType
    
}
      

const getDbInfo = async () => {
    return await Pokemon.findAll({
        include:{
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}

const getAllPokemons = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal
}

const getAllPokemonsDetail = async () => {
    const apiInfo = await getPokemonDetail();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal
}

const getPokemonDetail = async () => {
    const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
    const apiInfo = apiUrl.data.results 
    const pokemonInfo = await Promise.all(apiInfo.map((el)=> {
        return axios.get(el.url)
    })).then((values) => {
            return values.map((el)=>{
                const pokemon = el.data
            return {
                img: pokemon.sprites.other.dream_world.front_default,
                name: pokemon.name,
                types: pokemon.types.map((t) => {return {name: t.type.name}}),
                id: pokemon.id,
                life: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                speed: pokemon.stats[5].base_stat,
                height: pokemon.height,
                weight: pokemon.weight
              }
        })    
     })   
     return pokemonInfo
}



            


module.exports = {
    getAllPokemonsDetail,
    getApiInfo,
    getDbInfo,
    getAllPokemons,
    getPokemonDetail,
    getApiTypes
}


