// schemas/perguntas.js
//schemaTypes.js

export default({
    name: 'perguntas',
    type: 'document',
    title: 'Perguntas FAQ',
    fields:[
        {
            name: 'Pergunta',
            type: 'string',
            title: 'Pergunta'
          },
          {
            name: "Resposta",
            type: "string",
            title: "Resposta"
          }
    ]
})