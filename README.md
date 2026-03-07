# 🌐 Projeto: Legally Designers

Landing page institucional desenvolvida para a **Legally Designers**, uma agência criativa focada em **design, marketing e desenvolvimento de sites**.
O site apresenta os serviços da agência, exibe projetos realizados e permite que visitantes entrem em contato diretamente através de um **formulário integrado ao backend**.

---

## 📌 Sobre o Projeto

Aplicação **fullstack** composta por:

* **Frontend:** React + Vite + TypeScript
* **Backend:** PHP
* **Banco de Dados:** MySQL
* **Estilização:** Bootstrap e Sass

O objetivo do projeto é criar uma **landing page moderna, responsiva e focada em conversão**, destacando os serviços da agência e facilitando o contato com potenciais clientes.
Para o desenvolvimento do frontend, foi utilizado o **React**, visando **maior organização do código e melhor escalabilidade para futuras melhorias e expansões do projeto**.

---

## 👤 Área do Visitante

* Navegação pelas seções da landing page
* Visualização de serviços oferecidos
* Apresentação de projetos realizados
* Envio de formulário de contato para o backend e WhatsApp

---

## 🚀 Funcionalidades

* Landing page institucional
* Envio de formulário de contato para o backend e WhatsApp
* Interface moderna e responsiva

---

## 🛠 Tecnologias Utilizadas

### Front-end

* **React** — construção da interface
* **TypeScript** — tipagem estática
* **Vite** — ferramenta de build rápida
* **Bootstrap** — estruturação de layout responsivo e componentes de interface
* **Sass** — organização e escalabilidade de estilos

### Back-end

* **PHP** — processamento do formulário de contato
* **API simples** para comunicação entre frontend e backend

---

## 🗄 Banco de Dados

O projeto possui um script SQL pronto localizado em:

```
server/db/script.sql

```

Esse arquivo contém toda a estrutura necessária para a criação do banco local.

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar repositório

```bash
git clone https://github.com/seu-usuario/legally-designers.git

```

### 2️⃣ Instalar dependências

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

### 3️⃣ Configurar variáveis de ambiente

Criar um arquivo `.env` dentro da pasta **server** com suas credenciais de banco de dados e chaves necessárias.

### 4️⃣ Rodar aplicação

**Back-end**
Certifique-se de que seu servidor local (Apache/MySQL) está ativo e apontando para a pasta `server`.

**Front-end**

```bash
cd client
npm run dev

```

---

## 📸 Landing page
<img src="./client/public/images/landing-page.gif" width="400px">

---

## 🤝 Créditos do Projeto

Projeto acadêmico desenvolvido em equipe, com divisão de responsabilidades.

* 💻 **UI Design, Desenvolvimento e Implementação:** Julia Gomes
* 🎨 **Designer:** Samara Duarte
* 🔎 **UX Research:** Camila Bonilha

---

## 📄 Licença

Este projeto está sob a licença **MIT**.
