// schemas/membrodestaque.js
//schemaTypes.js

export default ({
  name: 'membrodestaque',
  type: 'document',
  title: 'MembroDestaque',
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