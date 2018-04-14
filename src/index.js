'use strict'

/**
 * Estúdio Digital Bocca - edb-response
 *
 * @file index.js
 * @namespace src
 * @description Middleware de resposta HTTP.
 * @since v0.1.0
 *
 * @copyright (c)2018 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @version v1.0.1
 */

/**
 * @todo Separar metodos em outros arquivos e importar aqui.
 */

const edbResponse = {
  // preparar (req) {
  //   req.edb = {}
  // },
  enviar (req, res) {
    const resposta = req.edb.config
    res.status(resposta.status).json({
      status: resposta.status,
      msg: resposta.msg,
      dados: resposta.dados,
      apiVersion: process.env.VER,
      backend: process.env.BACK,
      copyright: '(c)2018 - Estúdio Digital Bocca'
    })
  },
  resposta (st, ms, dd, req, res) {
    req.edb = {}
    req.edb.config = {status: st, msg: ms, dados: dd}
    this.enviar(req, res)
  }
}
module.exports = edbResponse
