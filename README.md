# 🌐 Legally Designers

**Landing page institucional da Legally Designers**, uma agência fictícia focada em **design, marketing e desenvolvimento de sites**. O site apresenta os serviços da agência, exibe projetos realizados e permite que visitantes entrem em contato diretamente através de um **formulário integrado ao backend**.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-green?style=flat-square)

[Landing page](#-landing-page) · [Sobre](#-sobre-o-projeto) · [Funcionalidades](#-funcionalidades) · [Tecnologias](#-tecnologias-utilizadas) · [Como executar](#%EF%B8%8F-como-executar-o-projeto) · [Créditos](#-créditos-do-projeto)

---

## Em resumo

| | |
| --- | --- |
| **O que é** | Landing page institucional de uma agência fictícia de design, marketing e sites |
| **Objetivo** | Ser moderna, responsiva e focada em conversão |
| **Frontend** | React + Vite + TypeScript, estilizado com Bootstrap e Sass |
| **Backend** | PHP com uma API simples para o formulário de contato |
| **Banco de dados** | MySQL |
| **Tipo** | Projeto acadêmico feito em equipe |

---

## 📸 Landing page

<img src="./client/public/images/landing-page.gif" alt="Demonstração da landing page da Legally Designers" width="400px">

---

## 📌 Sobre o projeto

O objetivo do projeto é criar uma **landing page moderna, responsiva e focada em conversão**, destacando os serviços da agência e facilitando o contato com potenciais clientes.

Para o desenvolvimento do frontend, foi utilizado o **React**, visando **maior organização do código e melhor escalabilidade para futuras melhorias e expansões do projeto**.

A aplicação é composta por:

| Camada | Tecnologia |
| --- | --- |
| Frontend | React + Vite + TypeScript |
| Backend | PHP |
| Banco de dados | MySQL |
| Estilização | Bootstrap e Sass |

---

## 🚀 Funcionalidades

- Landing page institucional
- Envio de formulário de contato para o backend e WhatsApp
- Interface moderna e responsiva

### 👤 Área do visitante

O que quem acessa o site pode fazer:

- Navegar pelas seções da landing page
- Visualizar os serviços oferecidos
- Ver a apresentação dos projetos realizados
- Enviar o formulário de contato para o backend e WhatsApp

---

## 🛠 Tecnologias utilizadas

### Front-end

| Tecnologia | Para que serve |
| --- | --- |
| **React** | Construção da interface |
| **TypeScript** | Tipagem estática |
| **Vite** | Ferramenta de build rápida |
| **Bootstrap** | Estruturação de layout responsivo e componentes de interface |
| **Sass** | Organização e escalabilidade de estilos |

### Back-end

| Tecnologia | Para que serve |
| --- | --- |
| **PHP** | Processamento do formulário de contato |
| **API simples** | Comunicação entre frontend e backend |

---

## 🗄 Banco de dados

O projeto possui um script SQL pronto localizado em:

```
server/db/script.sql
```

Esse arquivo contém toda a estrutura necessária para a criação do banco local: ele cria o banco `legally_designers` e a tabela `contatos`, onde ficam salvos os envios do formulário.

---

## ⚙️ Como executar o projeto

**Pré-requisitos:** Node.js, PHP com Composer e um servidor local com Apache e MySQL.

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/lunajulia107/legally-designers.git
```

### 2️⃣ Instalar as dependências

**Client (React)**

```bash
cd client
npm install
```

**Server (PHP/Composer)**

```bash
cd server
composer install
```

### 3️⃣ Configurar as variáveis de ambiente

Criar um arquivo `.env` dentro da pasta **server** com suas credenciais de banco de dados e chaves necessárias. As variáveis usadas pela conexão são:

```env
DB_HOST=localhost
DB_NAME=legally_designers
DB_USER=seu_usuario
DB_PASS=sua_senha
```

### 4️⃣ Rodar a aplicação

**Back-end**

Certifique-se de que seu servidor local (Apache/MySQL) está ativo e apontando para a pasta `server`.

**Front-end**

```bash
cd client
npm run dev
```

> [!NOTE]
> O formulário envia os dados para `http://localhost:8000/api/contato.php`, e a API aceita requisições vindas de `http://localhost:5173`, que é o endereço padrão do Vite.

---

## 📁 Estrutura do projeto

```
legally-designers/
├── client/                 → frontend
│   ├── public/
│   │   ├── images/         → logo, imagens da home e projetos
│   │   └── sass/           → estilos em Sass
│   └── src/
│       ├── components/     → Header, Footer, carrossel, popup do WhatsApp
│       └── pages/          → página Home
└── server/                 → backend
    ├── api/                → endpoint do formulário de contato
    ├── config/             → conexão com o banco
    ├── controllers/        → regras do contato
    ├── models/             → modelo de contato
    └── db/                 → script SQL
```

---

## 🤝 Créditos do projeto

Projeto acadêmico desenvolvido em equipe, com divisão de responsabilidades.

| Área | Responsável |
| --- | --- |
| 💻 UI Design, Desenvolvimento e Implementação | Julia Gomes |
| 🎨 Designer (Identidade Visual) | Samara Duarte |
| 🔎 UX Research | Camila Bonilha |

---

## 📄 Licença

Este projeto está sob a licença **MIT**.
