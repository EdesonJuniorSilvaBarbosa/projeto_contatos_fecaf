/****************************************************************
 * Objetivo: Arquivo responsável pela manipulação do Banco de dados
 * Data: 22/02/2024
 * Autor: Edeson Barbosa
 * Version: 1.0
 *****************************************************************/ 

// import do arquivo DAO ou seja arquivos de dados
const { json } = require('body-parser');
const contatoDao = require('../model/DAO/contatoDAO.js')

// retorna todos os contatos do banco de dados
const getContatos = async function(){
    
    // cria um objeto do tipo Json
    let jsonContatos = {};

    // solicita os dados do Banco de dados na model
    let dadosContatos = await contatoDao.selectAllContatos();

    // Valida o retorno dos dados
    if(dadosContatos){
        jsonContatos.count = dadosContatos.length;
        jsonContatos.contatos = dadosContatos;

        return jsonContatos
    }else{
        return false;
    }
}

module.exports = {
    getContatos
}