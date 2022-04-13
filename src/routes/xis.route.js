const route = require('express').Router();
const controllerXis = require('../controllers/xis.controller');

route.get('/todos-xis', controllerXis.findAllXisController)
route.get('/o-xis/:id', controllerXis.findByIdXisController);
route.post('/create', controllerXis.createXisController);
route.put('/update/:id', controllerXis.updateXisController);
route.delete('/delete/:id', controllerXis.deleteXisController);


module.exports = route;
