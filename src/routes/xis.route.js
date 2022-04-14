const express = require('express');
const router = express.Router();
const controllerXis = require('../controllers/xis.controller');


router.get('/todos-xis', controllerXis.findAllXisController)
router.get('/o-xis/:id', controllerXis.findByIdXisController);
router.post('/create', controllerXis.createXisController);
router.put('/update/:id', controllerXis.updateXisController);
router.delete('/delete/:id', controllerXis.deleteXisController);


module.exports = router;
