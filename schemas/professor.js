// schemas/professor.js
//schemaTypes.js

export default ({
  name: 'professor',
  type: 'document',
  title: 'Professor',
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
          title: 'Biografia Professor'
        },
        {
          name: 'imagem',
          type: 'image',
          title: 'Imagem'
        },
  ] 
})