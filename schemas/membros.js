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
            title: 'nome'
          },
          {
            name: 'cargo',
            type: 'string',
            title: 'cargo'
          },
          {
            name: 'bio',
            type: 'text',
            title: 'biografia'
          },
          {
            name: 'imagem',
            type: 'image',
            title: 'imagem'
          },
          {
            name: 'subtitulo',
            type: 'string',
            title: 'subtitulo',
          },
          {
            name: 'titulo',
            type: 'string',
            title: 'titulo',
          },
    ]
})