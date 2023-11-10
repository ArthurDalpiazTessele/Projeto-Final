// schemas/pilares.js
//schemaTypes.js

export default ({
    name: 'pilares',
    type: 'document',
    title: 'Pilares dos IES no SINAES',
    fields: [
          {
            name: 'pilarestitulo',
            type: 'string',
            title: 'Pilares dos IES no SINAES',
            description:'texto'
          },
          {
            name: 'itensAvaliacao',
            type: 'string',
            title: 'pilar-1',
            description:'texto'
          },
          {
            name: 'itensAvaliacao2',
            type: 'string',
            title: 'pilar-2',
            description:'texto'
          },
          {
            name: 'itensAvaliacao3',
            type: 'string',
            title: 'pilar-3',
            description:'texto'
          },
    ] 
})