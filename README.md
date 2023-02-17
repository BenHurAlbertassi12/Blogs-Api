
# Blogs-API
Este repositório contém uma API para gerenciamento de blogs criada com Node.js e MongoDB. A API permite que usuários criem, leiam, atualizem e excluam postagens de blog, bem como façam comentários em postagens existentes.

## Instalação
Para usar a API, siga as instruções abaixo:

### Clone este repositório:
`git clone https://github.com/BenHurAlbertassi12/Blogs-Api.git`

### Instale as dependências:
`npm install`

## Uso
A API possui os seguintes endpoints:

`GET /posts:` retorna todas as postagens de blog.

`GET /posts/:id:` retorna uma postagem de blog pelo ID.

`POST /posts:` cria uma nova postagem de blog.

`PUT /posts/:id:` atualiza uma postagem de blog pelo ID.

`DELETE /posts/:id:` exclui uma postagem de blog pelo ID.

`POST /posts/:id/comments:` adiciona um comentário a uma postagem existente.

`POST /auth/register:` registra um novo usuário.

`POST /auth/login:` autentica um usuário e retorna um token JWT.

