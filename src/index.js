'use strict'

/**
 * Estúdio Digital Bocca - edb-response
 *
 * @module edbResponse
 * @description Formatação Padrão EDB para respostas de API.
 * @since v0.1.0
 *
 * @copyright (c)2018 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @version v3.0.0
 */

const edbResponse = {
  /**
   * Envia a resposta da API.
   *
   * @function enviar
   *
   * @param {object} req - Objeto de request do express.
   * @param {object} res - Objeto de response do express.
   *
   * @version 1.0.0
   * @since 0.1.0
   */
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

  /**
   * Recebe os dados da resposta.
   *
   * @function resposta
   *
   * @param {int} st - Status Code da resposta.
   * @param {string} ms - Título descritivo da resposta.
   * @param {object} dd - Objeto com os valores da resposta.
   * @param {object} req - Objeto de request do express.
   * @param {object} res - Objeto de response do express.
   *
   * @version 1.0.0
   * @since 0.1.0
   */
  resposta (st, ms, dd, req, res) {
    req.edb = {}
    req.edb.config = { status: st, msg: ms, dados: dd }
    this.enviar(req, res)
  }
}
module.exports = edbResponse
