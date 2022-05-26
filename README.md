# Projeto Cadastro Usuário

### Objetivo 

Criar uma aplicação com um formulário onde o usuário possa realizar um cadastro com nome e e-mail, onde os dados são salvos no backend no casa o arquivo db.json. A aplicação tem duas telas onde o usuário vai poder navegar, onde a primeira tela é a Início e a outra é do usuário. 

### Descrição 

O backend desta aplicação é baseado no json server que vai  ler o arquivo db.json e  as dependências.
O frontend contém quase toda a aplicação e as interações.   
Na tela de Início  tem uma mensagem e como navegar entre as páginas.
Na tela dos usuários mantém a navegação e o formulário de cadastro, abaixo ele busca as informações no arquivo db.json que contém os dados dos usuários e carrega na tela. E permite que exclua ou altere os cadastros.

### Dependências 

No terminal dentro da pasta backend digitar o comando `npm init -y` e depois `npm i –save json-server@0.13.0 -E`.
No terminal dentro do arquivo da aplicação pode digitar o comando npx create-react-app frontend, além das que o Create React vem por padrão foi adicionado mais umas dependências, a axios, bootstrap, font-awesome, react-router e react-router-dom é possível ver as versões utilizadas no arquivo package.json dentro da pasta frontend da aplicação . Depois é só rodar o comando `npm i` no terminal dentro da pasta frontend.


#### Para iniciar o server 
O  dentro no terminal backend : `npm start`
Ao rodar o comando vai iniciar a aplicação http://localhost:3001

O  dentro no terminal frontend : `npm start`
Ao rodar o comando vai iniciar a aplicação http://localhost:3000
