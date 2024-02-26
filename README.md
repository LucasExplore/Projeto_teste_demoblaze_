Projeto Cypress Demoblaze

Este é um projeto configurado com o framework de teste end-to-end Cypress, usando npm como gerenciador de pacotes.

Pré-requisitos
Antes de começar, verifique se você tem o Node.js e npm instalados. Você pode baixá-los e instalá-los a partir do site oficial do Node.js.

Instalação
Clone este repositório para o seu ambiente local:

git clone https://github.com/LucasExplore/Projeto_teste_demoblaze_

Navegue até o diretorio do projeto:
cd Projeto_teste_demoblaze_

Instale as dependências do projeto
npm install

Execução dos Testes
Para executar os testes Cypress, você pode usar o seguinte comando:

Caso queria rodar o cypress sem abrir o navegador, via comando:
npx cypress run --headless 

Caso queira rodar projeto no mode visual:
npx cypress open

Estrutura do Projeto
cypress/integration: Este diretório contém todos os arquivos de teste Cypress. Você pode adicionar, modificar ou excluir testes aqui.
cypress/plugins: Este diretório contém arquivos de plugins do Cypress, se necessário.
cypress/support: Este diretório contém arquivos de suporte, como comandos personalizados do Cypress.