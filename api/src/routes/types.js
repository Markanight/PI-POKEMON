const {Router} = require('express');
const {Type} = require('../db.js');
const { getApiTypes } = require('../middlewares/middleware.js');

const router = Router();

router.get('/', async (req, res) => {
   const everyType = await getApiTypes()
    
    everyType.forEach((el) => {
        Type.findOrCreate({where: {name : el}})
    })
    const allTypes = await Type.findAll();
    res.status(200).send(allTypes)   
})
    


module.exports = router