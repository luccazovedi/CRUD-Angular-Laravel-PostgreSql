# Projeto de CRUD com Angular, Laravel e PostgreSQL

Este é um projeto de CRUD (Create, Read, Update, Delete) desenvolvido com as seguintes tecnologias: Angular, Laravel e PostgreSQL. Ele fornece uma aplicação web para gerenciar dados em um banco de dados PostgreSQL usando operações CRUD.

## Funcionalidades

- Criação, leitura, atualização e exclusão de registros no banco de dados.
- Interface de usuário intuitiva e responsiva para facilitar a interação com os dados.
- Validação de entrada para garantir a integridade dos dados.
- Comunicação assíncrona entre o front-end (Angular) e o back-end (Laravel) usando API RESTful.

## Requisitos do sistema

Certifique-se de ter as seguintes tecnologias instaladas em sua máquina de desenvolvimento:

- Node.js: [https://nodejs.org](https://nodejs.org)
- Angular CLI: Execute `npm install -g @angular/cli` para instalar globalmente.
- PHP: [https://www.php.net](https://www.php.net)
- Composer: [https://getcomposer.org](https://getcomposer.org)
- Laravel: Execute `composer global require laravel/installer` para instalar globalmente.
- PostgreSQL: [https://www.postgresql.org](https://www.postgresql.org)

## Configuração

1. Clone este repositório para sua máquina local usando o seguinte comando:

```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Navegue até o diretório raiz do projeto:

```
cd nome-do-repositorio
```

3. Instale as dependências do front-end (Angular):

```
cd frontend
npm install
```

4. Configure as variáveis de ambiente do front-end (Angular). No arquivo `environment.ts`, defina a URL da API fornecida pelo back-end:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api' // Substitua pelo endereço correto da API
};
```

5. Volte para o diretório raiz do projeto:

```
cd ..
```

6. Instale as dependências do back-end (Laravel):

```
cd backend
composer install
```

7. Configure as variáveis de ambiente do back-end (Laravel). Copie o arquivo `.env.example` para `.env`:

```
cp .env.example .env
```

Edite o arquivo `.env` e configure as informações do banco de dados PostgreSQL:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=nome-do-banco
DB_USERNAME=seu-usuario
DB_PASSWORD=sua-senha
```

8. Gere a chave de criptografia do aplicativo Laravel:

```
php artisan key:generate
```

9. Execute as migrações para criar as tabelas no banco de dados:

```
php artisan migrate
```

## Executando o aplicativo

1. Inicie o servidor back-end (Laravel) executando o seguinte comando no diretório raiz do projeto:

```
cd backend
php artisan serve
```

2. Em outra janela do terminal, inicie o servidor front-end (Angular) executando o seguinte comando no diretório raiz do projeto:

```
cd frontend
ng serve
```

3. Acesse o aplicativo em seu navegador através do seguinte endereço:

```
http://localhost:

4200
```

Agora você pode usar o aplicativo para realizar operações CRUD no banco de dados PostgreSQL!

## Contribuição

Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Faça as alterações necessárias e faça commit delas: `git commit -m 'Minha nova feature'`.
4. Envie para o repositório original: `git push origin minha-feature`.
5. Aguarde a análise e aceitação da sua contribuição.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
