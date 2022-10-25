# Desafio - Desenvolvedor Fullstack - Estágio

---

- **Nome:** Eduardo Henrique Santos Chaves

- **Email:** [henriqueduardo2002@gmail.com](mailto:henriqueduardo2002@gmail.com)

- **Nome do Projeto:** Loca Auto (crud-locadora)

- **Link para o Deploy:** [https://crud-locadora.eduardochaves.me](https://crud-locadora.eduardochaves.me)

- Link Secundário: [https://crud-locadora.pages.dev/](https://crud-locadora.pages.dev/)

![desktop](https://i.imgur.com/NcEKReR.png)

- Versão mobile nesta foto: [https://i.imgur.com/Db5ziUH.png](https://i.imgur.com/Db5ziUH.png)

- **OBS.:** Os carros que aparecem nessas imagens são apenas de exemplo, pois ao entrar no site não hávera carro algum até que sejam adicionados pelo usuário.

---

## Sobre o Back-End

Neste projeto não cheguei a fazer um back-end por parte de servidor (com node.js ou php) pois neste exato momento, ainda estou finalizando meus estudos fundamentares a cerca de front-end para adentrar nesses conteúdos.

O que me dei o trabalho de fazer foi de ao menos criar um **object map** no próprio `sript.js` onde guardei como chaves cada carro que fosse adicionado ao catálogo (usando o número de chassi do mesmo).

Onde o valor dessa chave seria um objeto contendo as chaves/valores a cerca dos dados do carro que foi captado do formulário de cadastro. Onde inclusive deixei de propósito alguns `console.log` no código para mostrar a mudança deste **object map** a medida que ele é modificado.

Inclusive utilizei a chave deste **object map** como forma de verificação de erro para os formulários em caso de um usuário tentar editar/remover um carro que não foi cadastrado ainda, ou de adicionar um carro que já está cadastrado. Dando um alerta de erro ao usuário e impedindo qualquer ação indesejada na aplicação.

Vale lembrar que dessa forma, sempre que o usuário atualizar a página, qualquer cadastro que ele fez no catálogo será perdido.

![console](https://i.imgur.com/6TFXVAq.png)

## Sobre o Front-End

Sobre o Front-End não há muito o que falar, é simplesmente entrar na página e testar os formulários e ir adicionando, removendo e editando os posts para ver como tudo ficou.

Quanto aos formulários eu poderia ter colocado atributos `pattern` em alguns dos *inputs* para validar o valor colocado, principalmente no caso do número do chassi e do link para a foto do carro. Mas não coloquei para facilitar os testes das funcionalidades, se isto fosse um probjeto real eu teria colocado.

Também fiz um pouco de estilização para garantir que tudo funcionasse adequadamente em diferentes tamanhos de tela e de resto é o que vocês verão na página mesmo.
