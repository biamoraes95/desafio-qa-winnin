# 🧪 Desafio QA - Winnin

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de QA Sênior na Winnin. O objetivo é automatizar testes para o site [ge.globo.com](https://ge.globo.com) utilizando o framework [Playwright](https://playwright.dev/), seguindo boas práticas como Page Object e critérios de aceite em formato BDD.

---

## ✅ Critérios de Aceite (formato BDD)

## ✅ Critérios de Aceite (formato BDD)

### 🔹 Cenário 1: Exibição de notícias na home
**Dado** que o usuário acessa a página principal do site `ge.globo.com`  
**Quando** a página for totalmente carregada  
**Então** deve exibir pelo menos 10 notícias contendo título, imagem e resumo

### 🔹 Cenário 2: Redirecionamento para matéria completa
**Dado** que o usuário está na página inicial  
**Quando** clicar em uma das notícias  
**Então** deve ser redirecionado para a página da matéria completa

### 🔹 Cenário 3: Estrutura da notícia individual
**Dado** que o usuário acessa uma página de matéria completa  
**Quando** a página terminar de carregar  
**Então** deve exibir o título da matéria, a data de publicação e o conteúdo principal

### 🔹 Cenário 4: Navegação até página de time da Série A
**Dado** que o usuário está na página inicial  
**Quando** clicar em um dos escudos de times da Série A  
**Então** deve ser redirecionado para a página do clube com notícias relacionadas a ele

> ℹ️ *Observação: atualmente, ao clicar nos escudos dos times da Série A na home do site `ge.globo.com`, o usuário é redirecionado para a tabela de classificação do campeonato, e não para a página do clube com notícias específicas. Por esse motivo, esse cenário foi documentado, mas não implementado na automação.*


---

## 🛠️ Como executar

### Pré-requisitos
- Node.js 18+
- Git
- Playwright instalado (localmente ou via `npm install`)

### Instalação
```bash
npm install
npx playwright install
# desafio-qa-winnin
