# 🎯 Sorteio de Vagas

Aplicação web para automatização de sorteios de vagas, desenvolvida como Projeto de Extensão (PEX V) do curso de Análise e Desenvolvimento de Sistemas da UniAmérica Descomplica.

---

## 📌 Sobre o Projeto

A A empresa solicitante realizava sorteios de vagas de forma manual, utilizando planilhas eletrônicas. Esse processo apresentava problemas como falta de transparência, lentidão e risco de erros operacionais.

Este aplicativo resolve esses problemas ao automatizar todo o processo de sorteio diretamente no navegador, sem necessidade de servidor ou infraestrutura adicional.

---

## ✨ Funcionalidades

- ✅ Cadastro manual de participantes
- ✅ Remoção individual de participantes
- ✅ Validação de nomes duplicados
- ✅ Sorteio aleatório sem repetição
- ✅ Persistência de dados via LocalStorage
- 🔄 Importação de participantes via arquivo CSV *(em desenvolvimento)*
- 🔄 Sorteio de múltiplas vagas *(em desenvolvimento)*
- 🔄 Exportação do resultado em `.txt` *(em desenvolvimento)*

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da interface |
| CSS3 | Estilização e responsividade |
| JavaScript (ES6+) | Lógica da aplicação |
| LocalStorage | Persistência de dados no navegador |

> A aplicação segue os princípios **KISS**, **SRP** e **DRY**, sendo uma **Single Page Application (SPA)** executada inteiramente no cliente, sem backend.

---

## 📁 Estrutura do Projeto

```
sorteio-app/
├── index.html          # Estrutura principal da aplicação
├── css/
│   └── style.css       # Estilização da interface
└── js/
    ├── app.js          # Controlador principal
    ├── participantes.js # Gerenciamento dos participantes
    ├── sorteio.js      # Algoritmo de sorteio aleatório
    └── storage.js      # Persistência via LocalStorage
```

---

## 🚀 Como Usar

1. Clone ou baixe o repositório:
   ```bash
   git clone https://github.com/PhelipeSilvestre/sorteio-vaga.git
   ```

2. Abra o arquivo `index.html` diretamente no navegador.

> Não é necessário instalar dependências ou configurar servidor.

---

## 🗂️ Modelo de Dados

Cada participante é armazenado no seguinte formato JSON:

```json
{
  "id": 1741478400000,
  "nome": "João Silva",
  "dataCadastro": "2026-03-09T00:00:00.000Z"
}
```

---

## 📋 Requisitos Funcionais

| ID | Descrição | Status |
|---|---|---|
| RF01 | Cadastrar participante manualmente | ✅ Concluído |
| RF02 | Remover participante | ✅ Concluído |
| RF03 | Importar participantes via CSV | 🔄 Em desenvolvimento |
| RF04 | Realizar sorteio aleatório sem repetição | ✅ Concluído |
| RF05 | Exibir resultado imediatamente na interface | ✅ Concluído |
| RF06 | Exportar resultado em formato texto | 🔄 Em desenvolvimento |

---

## 🎓 Contexto Acadêmico

| Campo | Informação |
|---|---|
| Aluno | Phelipe Silvestre Martins |
| RA | 2342140 |
| Curso | Análise e Desenvolvimento de Sistemas |
| Instituição | UniAmérica Descomplica |
| Semestre | 2026 |

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos.
