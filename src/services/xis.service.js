'use strict';

const xis = [
    {
      id: 1,
      sabor: 'Xis Galinha',
      descricao: 'Frango desfiado, queijo, alface, maionese, tomate e catupiry',
      foto: '/images/xfrango.png',
      preco: 10.0,
    },
    {
      id: 2,
      sabor: 'Xis Calabresa',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: '/images/xcalabresa.png',
      preco: 10.0,
    },
    {
      id: 3,
      sabor: 'Xis Salada',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: '/images/xsalada.png',
      preco: 7.0,
    }, {
      id: 4,
      sabor: 'Xis Carne',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: '/images/xsalada.png',
      preco: 7.0,
    },
  ];
  
  const findAllXisService = () =>{
      return xis;
  }

const findByIdXisService = (idParametro) => {
  return xis.find((xis) => xis.id === idParametro);

};

const createXisService =  (novoXis) =>{
    const newId = xis.length +1;
    
    novoXis.id = newId;
    xis.push(novoXis);
    return novoXis;
}

const updateXisService = (id, xisEdited) =>{
    xisEdited['id'] = id;
    const xisIndex = xis.findIndex((oXis)=>{oXis.id == id})
    xis[xisIndex] = xisEdited;
    return xisEdited;
}

const deleteXisService = (id) => {
    const xisIndex = xis.findIndex((oXis)=>{oXis.id == id})
    return xis.splice(xisIndex, 1);
}
  module.exports = {
        findAllXisService,
        findByIdXisService,
        createXisService,
        updateXisService,
        deleteXisService
  }
