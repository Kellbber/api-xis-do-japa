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
        'Pão, 2 Bifes de Hamb., 2 Queijos, Calabresa, Cebola Picada, Alface, Tomate, Milho verde e Batata Palha.',
      foto: '/images/xcalabresa.png',
      preco: 10.0,
    },
    {
      id: 3,
      sabor: 'Xis Salada',
      descricao:
        'Pão, Bife de Hamb., Queijo, Alface, Tomate, Milho Verde e Batata Palha.',
      foto: '/images/xsalada.png',
      preco: 7.0,
    }, {
      id: 4,
      sabor: 'Xis Filé',
      descricao:
        'Pão, Filet Mignon, Frango Desfiado com Ovo, Queijo, Presunto, Bacon, Alface, Tomate, Milho Verde e Batata Palha.',
      foto: '/images/xcarne.png',
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
    const xisIndex = xis.findIndex((oXis) => oXis.id == id)
    xis[xisIndex] = xisEdited;
    console.log(xis)
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
