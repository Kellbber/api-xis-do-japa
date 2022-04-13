const xisService = require('../services/xis.service')

const findAllXisController = (req, res) =>{
const xis = xisService.findAllXisService();
res.send(xis)
}

const findByIdXisController = (req, res) =>{
    const idParametro = Number(req.params.id);
    const escolhaXis = xisService.findByIdXisService(idParametro);
    res.send(escolhaXis);
}
const createXisController = (req, res) =>{
    const oXis = req.body;
    const newXis = xisService.createXisService(oXis);
    res.send(newXis);
}

const updateXisController = (req, res) =>{
    const idParametro = Number(req.params.id);
    const xisEdit = req.body;
    const updateXis = xisService.updateXisService(idParametro, xisEdit);
    res.send(updateXis);
}

const deleteXisController = (req, res) =>{
    const idParametro = req.params.id;
    xisService.deleteXisService(idParametro);
    res.send({message: 'Xis deletado com sucesso!'});
}

module.exports = {
    findAllXisController,
    findByIdXisController,
    createXisController,
    updateXisController,
    deleteXisController,
}
