# Platforma de Email Marketing

## TODO

Usuario Cadastrado
Login: ruan@gmail.com
Senha: ruan123

### Tecnologias Utilizadas

1.React
2.Laravel
3.Typescript
4.Sanctum

# Como Rodar

## Laravel - /api

1. Rode o comando [composer install]
2. Habilie o env-example
3. Criei o database
   3.1. No terminal Rode:
   // coloquei o -p se tiver credencial no local
   3.1.1 mysql -u root
   3.1.2 create database emailreal;
   3.1.2 exit;
   4.Rode a migrations:
   4.1 php artisan migrate --seed
   4.Levante a aplicação:
   4.1 php artisan serve
5. Disparo de email
5.1 Coloque um conta de gmail no env
5.2 Abra gerenciamento de contas na plataforma de gmail do google
habilite Acesso a app menos seguro -> em Seguranca 
https://myaccount.google.com/security?hl=pt_BR

## React - /client

1. Rode o comando [yarn install]/[npm install]
2. Habilie o env-example, dentro src
3. Levante a aplicação:
   4.1. yarn start/ npm run start

## Error
1. Primeira vez que loga, primeiro request das dashboard da nao autorizado -> F5
## Melhorias
1. Validação nos forms
2. Loading para os requests
3. Pagina 'Em desenvolvimento'
4. Pagina de not found

### Depencias Utilizadas Front end

1.React-icons
2.React-modal
3.React-input-chip

## Obrigado Pessoal, por terem me passodo um projetinho dahora de mais
