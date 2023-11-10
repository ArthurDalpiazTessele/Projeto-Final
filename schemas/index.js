//Home
import qrCode from "../schemas/qrcode.js"
import objetivo from "../schemas/objetivos.js"
import pontosPositivos from "../schemas/pontosPositivos.js"
import diretrizcard from "../schemas/diretrizesCards.js"

//Comissão Avaliadora
import professor from "../schemas/professor.js"
import membros from "../schemas/membros.js"

//Termos e Regulações
import estatutocpa from "../schemas/estatutocpa.js"
import pilares from "../schemas/pilares.js"

//Resultados
import satisfacaoInfraestrutura from './satisfacaoInfraestrutura'
import satisfacaoCurso from './satisfacaoCurso'
import satisfacaoBiopark from './satisfacaoBiopark'

//FAQ
import perguntas from "../schemas/perguntas.js"

export const schemaTypes = [perguntas, qrCode, objetivo, pontosPositivos, diretrizcard, professor, membros, estatutocpa, pilares, satisfacaoInfraestrutura, satisfacaoCurso, satisfacaoBiopark]
