/****************************************************************
 * Objetivo: API para realizar requisição de contatos da UniFECAF
 * Data: 20/02/2024
 * Autor: Edeson Barbosa
 * Version: 1.0
 *****************************************************************/ 
 /****************************************************************
 * MVC - (model, view, controller)
 * 
 * Model -> Modelagem dos dados (BD)
 * Controller -> É responsável pela regra de negócio do projeto
 * View -> É responsável pela interação com o Cliente (usuário)
 * 
 * Dependências para acesso a banco de dados:
 * - Sequelize
 * - Prisma - será usado neste projeto.
 * - Fastfy
 * 
 *  Comandos de instalação e configuração do Prisma: 
 *      * Instalação: npm install prisma --save
 *      * Inicialização do prisma: npx prisma init
 *      * Instalação do prisma client: npm install @prisma/client --save
 * 
 *  Criando uma tabela teste no mysql através do prisma
 *      * npx prisma migrate dev
 ****************************************************************/

// Import das dependências
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Criando um objeto do tipo express
const app = express()

// Implementação do cors
app.use((request, response, next) => {
    // configuração de quem poderá acessar a API (IP ou * (todos) )
    response.header('Access-Control-Allow-Origin', '*')

    // configuração de quais métodos serão aceitos na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    
    app.use(cors())
    next()
}) 

const controllerContatos = require('./controller/controllerContato.js')

// EndPoints: GET retornar todos os contatos do Banco de dados
app.get('/v1/fecaf/contatos', cors(), async function(request, response, next){
    
    let dadosContatos = await controllerContatos.getContatos();

    if(dadosContatos){
        response.status(200);
        response.json(dadosContatos);
    }else{
        response.status(404);
    }
})

// Executa a API
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições...')
})






























