<p align="center">
  <img src="https://estudiodigitalbocca.com.br/edb-logo.svg" width="200px">
  <p align="center">Ultima Atualização na v0.15.0</p>
  <h1 align="center">edb-response</h1>
  <h4 align="center">
    Formatação padrão EDB para resposta de API Rest
  </h4>
  <p align="center">
    <img src="https://badgen.net/badge/version/v0.15.0/orange">
    <a href="https://codeclimate.com/github/digitalbocca/edb-response/maintainability">
      <img src="https://api.codeclimate.com/v1/badges/099992aed09bb6cb59e9/maintainability">
    </a>
    <a href="https://estudiodigitalbocca.com.br">
      <img src="https://badgen.net/badge/produto/EDB/f19b2c">
    </a>
    <a href="https://standardjs.com">
      <img src="https://badgen.net/badge/code%20style/standard/yellow">
    </a>
    <a href="https://www.npmjs.com/package/edb-response">
      <img src="https://badgen.net/npm/v/edb-response">
    </a>
    <a href="https://www.npmjs.com/package/edb-response">
      <img src="https://badgen.net/npm/license/edb-response">
    </a>
    <a href="https://www.npmjs.com/package/edb-response">
      <img src="https://badgen.net/npm/dt/edb-response">
    </a>
    <a href="https://github.com/digitalbocca/edb-response">
      <img src="https://badgen.net/github/tag/digitalbocca/edb-response">
    </a>
    <a href="https://www.npmjs.com/package/edb-response">
      <img src="https://badgen.net/david/dep/digitalbocca/edb-response">
    </a>
    <a href="https://www.npmjs.com/package/edb-response">
      <img src="https://badgen.net/david/dev/digitalbocca/edb-response">
    </a>
    <a href="https://www.npmjs.com/package/edb-response">
      <img src="https://badgen.net/packagephobia/install/edb-response">
    </a>
    <a href="https://www.npmjs.com/package/edb-response">
      <img src="https://badgen.net/packagephobia/publish/edb-response">
    </a>
    <a href="https://www.npmjs.com/package/edb-response">
      <img src="https://badgen.net/bundlephobia/min/edb-response">
    </a>
    <a href="https://www.npmjs.com/package/edb-response">
      <img src="https://badgen.net/bundlephobia/minzip/edb-response">
    </a>
  </p>
  <p align="center">
    <a href="https://github.com/standard/standard">
      <img src="https://cdn.rawgit.com/standard/standard/master/badge.svg">
    </a>
  </p>
  <p align="center">(c)2020 - Estúdio Digital Bocca</p>
</p>

---

# edb-response - README

---

## ATENÇÃO

Este modulo não é um middleware. Ele formata e envia a resposta e deverá ser utilizado no ultimo estágio da API, apenas para enviar a resposta.

## EXEMPLO DE USO

- Adicione a Dependência:

```bash
npm install --save edb-response
```

- Importe no arquivo que vai enviar a resposta:

```js
const edbResponse = require('edb-response')
```

- Monte a resposta e faça o envio:

```js
edbResponse.resposta(200, 'Título da Resposta', { msg: 'Tudo OK' }, req, res)
```

- Parâmetros Comentados:

```js
edbResponse.resposta(
  200,                  // http status code
  'Título da Resposta', // Um título descritivo da resposta
  {
    msg: 'Tudo OK'      // Objeto de resposta
  },                    // (response.data.dados contém este objeto)
  req,                  // Objeto de request do express
  res                   // Objeto de response do express
)
```

- Resposta para este exemplo:

```json
{
  "status":200,
  "msg":"Título da Resposta",
  "dados": {
    "msg": "Tudo OK"
  },
  "apiVersion": "v0.15.0",
  "backend": "Nome do Sistema",
  "copyright": "(c)2020 Estúdio Digital Bocca"
}
```

> OBS: **apiVersion** pega os dados da env process.env.VER
>
> OBS: **backend** pega os dados da env process.env.BACK

## REGISTRO DE ALTERAÇÕES

- Veja no arquivo [CHANGELOG](CHANGELOG.md)

## LICENÇA

- MIT

> (c)2018-2020 - Estúdio Digital Bocca - <https://estudiodigitalbocca.com.br>
