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
          name: 'Cargo',
          type: 'string',
          title: 'Cargo'
        },
        {
          name: 'Bio',
          type: 'text',
          title: 'Biografia Professor'
        },
        {
          name: 'Imagem',
          type: 'image',
          title: 'Imagem'
        },
  ] 
})