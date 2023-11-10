// schemas/estatutocpa.js
//schemaTypes.js

export default ({
    name: 'estatutocpa',
    type: 'document',
    title: 'Estatuto CPA',
    fields: [
          {
            name: 'estatutocpa',
            type: 'string',
            title: 'Estatuto C.P.A'
          },
          {
            name: 'conteudoavaliado',
            type: 'string',
            title: 'Contéudo Avaliado'
          },
          {
            name: 'importanciaemavaliar',
            type: 'string',
            title: 'Importância em Avaliar'
          },
    ] 
})