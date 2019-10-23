# Estúdio Digital Bocca

## edb-response

### v0.13.0

> Formatação Padrão EDB para respostas de api.

[![Maintainability](https://api.codeclimate.com/v1/badges/099992aed09bb6cb59e9/maintainability)](https://codeclimate.com/github/digitalbocca/edb-response/maintainability)
[![EDB](https://badgen.net/badge/produto/EDB/f19b2c)](https://estudiodigitalbocca.com.br)
[![JavaScript Style Guide](https://badgen.net/badge/code%20style/standard/yellow)](https://standardjs.com)
[![NPMv](https://badgen.net/npm/v/edb-response)](https://www.npmjs.com/package/edb-response)
[![NPMlicense](https://badgen.net/npm/license/edb-response)](https://www.npmjs.com/package/edb-response)
[![NPMdownloads](https://badgen.net/npm/dt/edb-response)](https://www.npmjs.com/package/edb-response)
[![GHv](https://badgen.net/github/tag/digitalbocca/edb-response)](https://github.com/digitalbocca/edb-response)
[![DVdep](https://badgen.net/david/dep/digitalbocca/edb-response)](https://www.npmjs.com/package/edb-response)
[![DVdev](https://badgen.net/david/dev/digitalbocca/edb-response)](https://www.npmjs.com/package/edb-response)
[![PPi](https://badgen.net/packagephobia/install/edb-response)](https://www.npmjs.com/package/edb-response)
[![PPp](https://badgen.net/packagephobia/publish/edb-response)](https://www.npmjs.com/package/edb-response)
[![BPp](https://badgen.net/bundlephobia/min/edb-response)](https://www.npmjs.com/package/edb-response)
[![BPp](https://badgen.net/bundlephobia/minzip/edb-response)](https://www.npmjs.com/package/edb-response)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

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
  "apiVersion": "v0.13.0",
  "backend": "Nome do Sistema",
  "copyright": "(c)2019 Estúdio Digital Bocca"
}
```

> OBS: **apiVersion** pega os dados da env process.env.VER
>
> OBS: **backend** pega os dados da env process.env.BACK

## MUDANÇAS

- Veja no arquivo CHANGELOG.md

## LICENÇA

- MIT

> (c)2018-2019 - Estúdio Digital Bocca - <https://estudiodigitalbocca.com.br>
