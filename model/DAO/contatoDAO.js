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

    // Executa no banco de dados o script sql de select
    let rsContatos = await prisma.$queryRawUnsafe(sql);

    if(rsContatos.length > 0){
        return rsContatos
    }else{
        return false
    }
}

module.exports = { 
    selectAllContatos
};