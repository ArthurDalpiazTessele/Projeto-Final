// schemas/home.js
//schemaTypes.js

// Exportar o objeto que representa a página Satisfação
export default {
    // Satisfação da Infraestrutura
    name: 'satisfacaoInfraestrutura',
    type: 'document',
    title: 'Satisfação com a Infraestrutura',
    fields: [
        {
            name: 'ano',
            type: 'number',
            title: 'Ano (2020-2023)',
            validation: (Rule) => Rule.required().min(2020).max(2023)
        },
        {
            name: 'sala',
            type: 'string',
            title: 'Sala'
        },
        {
            name: 'porcentagem',
            type: 'number',
            title: 'Porcentagem',
            validation: (Rule) => Rule.required().max(100)
        }
    ]
}