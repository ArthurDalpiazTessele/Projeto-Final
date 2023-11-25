// schemas/professor.js
//schemaTypes.js

export default ({
  name: 'membrodestaque',
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
          title: 'Biografia'
        },
        {
          name: 'imagem',
          type: 'image',
          title: 'Imagem'
        },
        {
          name: 'titulo',
          type: 'string',
          title: 'Imagem'
        },
        {
          name: 'subtitulo',
          type: 'image',
          title: 'SubTitulo'
        },
  ] 
})