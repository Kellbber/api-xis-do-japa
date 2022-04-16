const xisService = require('../services/xis.service');

const findAllXisController = (req, res) => {
  const xis = xisService.findAllXisService();

  if(xis.length==0){
        return res
        .status(404)
        .send({ message: 'Nenhum xis cadastrado no momento...' });
    
  }

  res.send(xis);
};

const findByIdXisController = (req, res) => {
  const idParametro = Number(req.params.id);
    if(!idParametro){
        return res
        .status(400)
        .send({ message: 'ID não existe!' });
    }

  const escolhaXis = xisService.findByIdXisService(idParametro);
  if(!escolhaXis){
    return res
    .status(404)
    .send({ message: 'Xis não encontrado!' });
}
  res.send(escolhaXis);
};
const createXisController = async (req, res) => {
  const xis = req.body;
  if (!xis || !xis.sabor || !xis.preco || !xis.descricao || !xis.foto) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos preenchidos!' });
  }
  const newXis = await xisService.createXisService(xis);
  res.status(201).send(newXis);
};

const updateXisController = (req, res) => {
  const idParametro = Number(req.params.id);
  if(!idParametro){
    return res
    .status(400)
    .send({ message: 'ID não existe!' });
}
  const xisEdit = req.body;
  if (!xisEdit || !xisEdit.sabor || !xisEdit.preco || !xisEdit.descricao || !xisEdit.foto) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos preenchidos!' });
  }
  const updateXis = xisService.updateXisService(idParametro, xisEdit);
  res.send(updateXis);
};

const deleteXisController = (req, res) => {
  const idParametro = Number(req.params.id);
  if(!idParametro){
    return res
    .status(400)
    .send({ message: 'ID não existe!' });
}
  xisService.deleteXisService(idParametro);

  res.send({ message: 'Xis deletado com sucesso!' });
};

module.exports = {
  findAllXisController,
  findByIdXisController,
  createXisController,
  updateXisController,
  deleteXisController,
};
