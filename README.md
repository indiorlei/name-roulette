# Roleta de Nomes

A **Roleta de Nomes** é uma aplicação web simples que realiza sorteios diários de nomes. É possível adicionar nomes ou passar valores diretamente através dos parâmetros de consulta (query params) na URL. Ideal para sorteios rápidos e divertidos entre grupos de pessoas, amigos ou colegas de trabalho.

## URL do Projeto

Acesse a roleta de nomes clicando no seguinte link:  
[https://daily-name.vercel.app/](https://daily-name.vercel.app/)

## Funcionalidades

- **Sorteio Diário**: A roleta realiza um sorteio de nome todo dia.
- **Adicionar Nomes**: É possível passar uma lista personalizada de nomes utilizando o parâmetro `names` na URL. A roleta fará o sorteio com base nesses nomes.
- **Parâmetro Query**: Você pode passar os nomes diretamente pela URL. Exemplo:  
  `https://daily-name.vercel.app/?names=Alice,Bob,Charlie`

## Como Usar

1. Abra o [link do projeto](https://daily-name.vercel.app/) no navegador.
2. A roleta irá automaticamente realizar o sorteio diário.
3. Para customizar os nomes que serão sorteados, adicione o parâmetro `names` na URL. Exemplo:  
   `https://daily-name.vercel.app/?names=Maria,João,Pedro`
4. O nome sorteado será exibido após o sorteio.

## Instalação e Execução Local

Se você quiser rodar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

- **Node.js** (recomenda-se a versão LTS)
- **NPM** ou **Yarn**

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/indiorlei/name-roulette roleta-de-nomes
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd roleta-de-nomes
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o projeto localmente:

   ```bash
   npm run dev
   ```

5. Acesse a aplicação no seu navegador em `http://localhost:3000`.

## Tecnologias Utilizadas

- **Next.js**: Framework React utilizado para o desenvolvimento da aplicação.
- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **Vercel**: Plataforma de deploy utilizada para hospedar a aplicação.

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou quiser corrigir algum bug, fique à vontade para abrir uma _issue_ ou enviar um _pull request_.

1. Faça o _fork_ deste repositório.
2. Crie uma nova branch para sua modificação (`git checkout -b minha-modificacao`).
3. Faça as modificações necessárias e adicione os arquivos alterados (`git add .`).
4. Realize o commit das suas alterações (`git commit -m 'Adiciona uma nova funcionalidade'`).
5. Envie a branch para o repositório remoto (`git push origin minha-modificacao`).
6. Abra um pull request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
