/****************************************************************
 * Objetivo: Arquivo responsável pela manipulação do Banco de dados
 * Data: 20/02/2024
 * Autor: Edeson Barbosa
 * Version: 1.0
 *****************************************************************/ 

// Import do Prisma Client
const { PrismaClient } = require('@prisma/client')

// Instanciação do Objeto
const prisma = new PrismaClient()

// Função de trazer dados do banco
const selectAllContatos = async function(){
    
    let sql = 'select * from tbl_contatos';

    //$queryRawUnsafe() => é quando temos o script sql numa variável para que haja a interpretação
    // exemplo: let rsContatos = await prisma.$queryRawUnsafe(sql);

    //$queryRaw() => quando mandamos o script direto
    // exemplo: " let rsContatos = await prisma.$queryRaw('select * from tbl_contatos'); " 

    // Executa no banco de dados o script sql de select
    let rsContatos = await prisma.$queryRawUnsafe(sql);

    if(rsContatos.length > 0){
        return rsContatos
    }else{
        return false
    }
}

const insertContatos = async function(contato){
    let sql = `insert into tbl_contatos (nome, cpf, email) values ('${contato.nome}', '${contato.cpf}', '${contato.email}')`;

    //executeRawUnsafe
    //executeRaw

    let result = await prisma.$executeRawUnsafe(sql);

    if(result){
        return true;
    }else{
        return false;
    }
}

module.exports = { 
    selectAllContatos,
    insertContatos
};