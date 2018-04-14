# Estúdio Digital Bocca

## edb-response

### v0.3.0

> Formatação Padrão EDB para respostas de api.

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
  "apiVersion": "v0.11.0",
  "backend": "Nome do Sistema",
  "copyright": "(c)2018 - Estúdio Digital Bocca"
}
```

> OBS: **apiVersion** pega os dados da env process.env.VER
>
> OBS: **backend** pega os dados da env process.env.BACK

## MUDANÇAS

- Veja no arquivo CHANGELOG.md

## LICENÇA

- MIT

> (c)2018 - Estúdio Digital Bocca - <https://estudiodigitalbocca.com.br>