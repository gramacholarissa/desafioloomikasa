# Desafio Loomi – Automação de Testes com Playwright

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como parte de um desafio técnico com o objetivo de automatizar cenários críticos do site **Kasa.live**, utilizando **Playwright** com **TypeScript**.

A automação cobre fluxos essenciais da aplicação, como:

* Login de usuário
* Busca de partidas utilizando filtro por time

A estrutura do projeto segue o padrão **Page Object Model (POM)** para melhorar a organização, manutenção e reutilização de código.

---

# 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando:

* **Node.js**
* **Playwright**
* **TypeScript**
* **VS Code**
* **Git / GitHub**

---

# 📋 Pré-requisitos

Para executar o projeto é necessário ter instalado:

* **Node.js (versão 18 ou superior)**
* **npm ou npx**
* **Git**
* **Visual Studio Code** (recomendado)

Também é necessário ter acesso à internet para acessar o site:

```
https://www.kasa.live/
```

---

# 🔧 Instalação

Clone o repositório:

```
git clone https://github.com/gramacholarissa/desafioloomikasa.git
```

Entre na pasta do projeto:

```
cd desafioloomikasa
```

Instale as dependências do projeto:

```
npm install
```

Instale os navegadores utilizados pelo Playwright:

```
npx playwright install
```

---

# ▶️ Executando os testes

Para executar todos os testes:

```
npx playwright test
```

Para executar os testes com o navegador visível:

```
npx playwright test --headed
```

Para executar um teste específico:

```
npx playwright test tests/login.spec.ts
```

ou

```
npx playwright test tests/filtro-time.spec.ts
```

---

# 📂 Estrutura do Projeto

```
desafioloomikasa
│
├── fixtures
│   └── user.ts
│
├── pages
│   └── login.page.ts
│
├── screenshots
│
├── tests
│   ├── login.spec.ts
│   └── filtro-time.spec.ts
│
├── playwright.config.ts
└── README.md
```

### 📁 fixtures

Contém dados reutilizáveis utilizados nos testes, como credenciais de usuário.

### 📁 pages

Implementação do **Page Object Model**, contendo métodos responsáveis por interagir com as páginas da aplicação.

### 📁 tests

Contém os cenários de testes automatizados.

### 📁 screenshots

Armazena evidências geradas durante a execução dos testes.

---

# 🧪 Cenários Automatizados

## Login com credenciais válidas

Valida que um usuário previamente cadastrado consegue acessar o sistema informando email e senha válidos.

Fluxo testado:

1. Acessar o site
2. Clicar em **Entrar**
3. Informar email e senha
4. Submeter o login
5. Validar que o usuário foi autenticado com sucesso

---

## Busca de partidas utilizando filtro por time

Valida que o usuário consegue buscar partidas filtrando por um time específico.

Fluxo testado:

1. Acessar o site
2. Clicar no campo **Qual time?**
3. Digitar o nome do time
4. Selecionar uma sugestão do dropdown
5. Realizar a busca
6. Validar os resultados retornados

---

# 📸 Evidências

Durante a execução dos testes são geradas capturas de tela automaticamente para evidenciar o resultado da automação.

As imagens ficam armazenadas na pasta:

```
screenshots/
```

---

# 🛠️ Boas práticas aplicadas

* Page Object Model (POM)
* Separação entre **dados**, **ações de página** e **testes**
* Uso de **locators semânticos**
* Geração de **evidências de execução**
* Estrutura organizada para manutenção futura

---

# ✒️ Autora

**Larissa Gramacho**
QA Engineer

GitHub:
https://github.com/gramacholarissa
