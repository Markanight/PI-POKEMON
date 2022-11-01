const {Router} = require('express');
const {Pokemon, Type} = require('../db.js');
const {getAllPokemons, getPokemonDetail, getAllPokemonsDetail} = require('../middlewares/middleware.js');


const router = Router();

router.get('/', async (req, res) => {
    try {
        const name = req.query.name
    const pokeTotal = await getAllPokemons()
    if(name) {
        const pokeName = pokeTotal.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()))
        pokeName?
        res.status(200).send(pokeName) :
        res.status(404).send('No esta el pokemon, intenta con otro nombre')
    } else {
        res.status(200).send(pokeTotal)
    }
    } catch (error) {
        res.status(404).send(error)
    }
    
})

router.get('/detail', async (req, res) => {
    const pokeDetail = await getAllPokemonsDetail()
    try {   
    res.status(200).send(pokeDetail)
    }
    catch (error) {
            res.status(404).send(error)
        }    
})



router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
    const pokeTotal = await getAllPokemonsDetail()
    if(id) {
        const pokeId = pokeTotal.filter((el) => el.id == id)
        pokeId.length ?
        res.status(200).send(pokeId) :
        res.status(404).send('id inexistente')
    } else {
        res.status(200).send(pokeTotal)
    }
    } catch (error) {
        res.status(404).send(error)
    }
    

})

router.post('/', async (req, res) => {
    try {
        const { 
            name, 
            life, 
            attack, 
            defense, 
            speed, 
            height, 
            weight, 
            types,
            img,
            createdInDb
        } = req.body;

        const pokemonCreated = await Pokemon.create({
            name : name.toLowerCase(),
            life,
            attack,
            defense,
            speed,
            height,
            weight,
            img,
            createdInDb
        })

        const typeDb = await Type.findAll({
            where: {name : types}
        })

        pokemonCreated.addType(typeDb);
        res.send('Pokemon creado con exito')
    } catch (error) {
        res.status(404).send(error)
    }  
})



module.exports = router