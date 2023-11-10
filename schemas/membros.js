// schemas/membros.js
//schemaTypes.js

export default ({
    name: 'membros',
    type: 'document',
    title: 'Membros',
    fields: [
          {
            name: 'nome',
            type: 'string',
            title: 'Nome'
          },
          {
            name: 'cargo',
            type: 'string',
            title: 'Cargo'
          },
          {
            name: 'bio',
            type: 'text',
            title: 'Biografia'
          },
          {
            name: 'imagem',
            type: 'image',
            title: 'Imagem'
          },
    ]
})