// schemas/pontosPositivos.js
//schemaTypes.js

export default({
    name: 'pontosPositivos',
    type: 'document',
    title: 'pontosPositivos',
    fields:[
        {
            name: 'titulo',
            type: 'string',
            title: 'Título'
          },
          {
            name: 'descricao',
            type: 'string',
            title: 'Descrição'
          }
    ]
})