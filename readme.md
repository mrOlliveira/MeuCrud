# CRUD de Gerenciamento de Pessoas 🚀

Este projeto consiste em um aplicativo móvel desenvolvido com **React Native** que permite o gerenciamento completo de uma lista de contatos (CRUD: Create, Read, Update, Delete). O aplicativo consome uma API simulada via **JSON Server**.

## 📝 Descrição do Projeto

O objetivo deste projeto é fornecer uma interface fluida para o cadastro e controle de pessoas. 
As principais funcionalidades incluem:
* **Listagem em Tempo Real**: Visualização de todos os usuários cadastrados no banco de dados.
* **Criação e Edição**: Uma tela única (`AddEditScreen`) que identifica se o usuário deseja adicionar um novo registro ou editar um existente através de parâmetros de rota.
* **Remoção**: Exclusão de registros diretamente do card de exibição.
* **Persistência**: Integração com uma API REST para garantir que os dados não sejam perdidos ao fechar o app.

## 🛠️ Tecnologias Utilizadas

* **React Native**: Framework para a construção da interface nativa.
* **React Navigation**: Gerenciamento de pilhas de telas e passagem de parâmetros.
* **Fetch API**: Utilizada para realizar as requisições HTTP (GET, POST, PUT e DELETE).
* **JSON Server**: Ferramenta para simular um backend completo a partir de um arquivo `.json`.

---

## ⚙️ Configuração do Ambiente

### 1. Pré-requisitos
* **Node.js** instalado em sua máquina.
* **Expo Go** instalado no seu dispositivo móvel ou um emulador configurado.
* **JSON Server** instalado globalmente ou executado via npx.

### 2. Configuração do Endpoint
Para que o aplicativo se comunique com o servidor, você deve configurar o endereço IP da sua máquina no arquivo de configuração:

Arquivo: `src/servers/configApi.js`
```javascript
// Substitua pelo IP da sua rede local (ex: 192.168.x.x)
export const API_URL = 'http://SEU_IP_AQUI:3000';