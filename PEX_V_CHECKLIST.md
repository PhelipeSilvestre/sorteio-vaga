# PEX V – Checklist de Desenvolvimento
**Aplicativo de Sorteio de Vagas**
**Aluno:** Phelipe Silvestre Martins | **Curso:** ADS | **Semestre:** 2026

---

## 📁 Estrutura do Projeto

- [x] Criar estrutura de pastas (`/sorteio-app`, `css/`, `js/`)
- [x] Criar `index.html` com estrutura base da SPA
- [x] Criar `css/style.css` com estilização inicial
- [x] Criar `js/app.js` – controlador principal
- [x] Criar `js/participantes.js` – módulo de participantes
- [x] Criar `js/sorteio.js` – módulo de sorteio
- [x] Criar `js/storage.js` – módulo de persistência via LocalStorage

---

## ✅ Requisitos Funcionais

### RF01 – Cadastrar participante manualmente
- [x] Campo de input para nome do participante
- [x] Botão "Adicionar"
- [x] Validação de nome vazio
- [x] Validação de nome duplicado (case-insensitive)
- [x] Salvar participante no LocalStorage com `id` (timestamp), `nome` e `dataCadastro`

### RF02 – Remover participante
- [x] Botão "Remover" por item na lista
- [x] Atualizar LocalStorage após remoção
- [x] Re-renderizar lista após remoção

### RF03 – Importar participantes via CSV
- [x] Adicionar input do tipo `file` aceitando `.csv`
- [x] Implementar função de leitura e parsing do CSV
- [x] Ignorar linhas em branco e duplicatas durante a importação
- [x] Feedback ao usuário sobre quantos participantes foram importados
- [x] Salvar participantes importados no LocalStorage

### RF04 – Realizar sorteio aleatório sem repetição
- [x] Algoritmo de sorteio aleatório implementado em `sorteio.js`
- [x] Suporte a sorteio de **múltiplas vagas** (ex.: sortear N ganhadores sem repetição)
- [x] Garantir que um mesmo participante não seja sorteado duas vezes no mesmo sorteio

### RF05 – Exibir resultado imediatamente na interface
- [x] Exibir nome do vencedor na tela após o sorteio
- [x] Exibir lista completa dos sorteados quando houver múltiplas vagas
- [x] Destacar visualmente o(s) vencedor(es) (animação ou estilo diferenciado)

### RF06 – Exportar resultado em formato texto
- [x] Botão "Exportar Resultado"
- [x] Gerar arquivo `.txt` com os nomes dos sorteados e data/hora do sorteio
- [x] Permitir download do arquivo diretamente pelo navegador

---

## ✅ Requisitos Não Funcionais

### Interface responsiva e intuitiva
- [x] Layout base com cards e espaçamento adequado
- [x] Tornar layout totalmente responsivo (mobile-first / media queries)
- [x] Melhorar feedback visual para ações (cores, ícones, mensagens de sucesso/erro)
- [x] Adicionar contagem de participantes cadastrados na interface

### Tempo de resposta inferior a 2 segundos
- [x] Operações realizadas localmente (sem rede), dentro do limite esperado

### Compatibilidade com navegadores modernos
- [ ] Testar no Chrome, Firefox e Edge
- [ ] Validar funcionamento correto do LocalStorage nos três navegadores

### Código organizado e modularizado
- [x] Módulos separados por responsabilidade (SRP)
- [x] Sem repetição de lógica entre módulos (DRY)
- [x] Código simples e de fácil manutenção (KISS)

---

## 🔄 Fluxo de Funcionamento

- [x] 1. Cadastro dos participantes
- [x] 2. Armazenamento local das informações (LocalStorage)
- [x] 3. Acionamento da função de sorteio
- [x] 4. Execução do algoritmo aleatório
- [x] 5. Exibição imediata do resultado na interface
- [ ] 6. Exportação do resultado em `.txt`

---

## 🎨 Interface e UX

- [x] Estrutura base com seções: Cadastro, Lista e Sorteio
- [x] Número de vagas configurável pelo usuário antes do sorteio
- [x] Mensagem de confirmação antes de limpar toda a lista
- [x] Botão "Limpar lista" para remover todos os participantes de uma vez
- [x] Exibir data de cadastro de cada participante na lista
- [x] Estilização aprimorada (paleta de cores, hover nos botões, transições)

---

## 📄 Documentação e Entrega (PEX V)

- [x] PEX IV entregue com definição de arquitetura e modelagem de dados
- [x] Implementar todas as funcionalidades pendentes listadas acima
- [ ] Realizar testes funcionais manuais com casos de uso reais
- [x] Documentar instruções de uso (README.md)
- [ ] Preparar demonstração da aplicação para a empresa parceira
- [ ] Redigir relatório final da PEX V com evidências de funcionamento

---

## 📊 Resumo do Status

| Categoria | Total | Concluído | Pendente |
|---|---|---|---|
| Estrutura do Projeto | 7 | 7 | 0 |
| RF01 – Cadastro manual | 5 | 5 | 0 |
| RF02 – Remoção | 3 | 3 | 0 |
| RF03 – Importação CSV | 5 | 5 | 0 |
| RF04 – Sorteio múltiplas vagas | 4 | 4 | 0 |
| RF05 – Exibir resultado | 3 | 3 | 0 |
| RF06 – Exportar resultado | 3 | 3 | 0 |
| Req. Não Funcionais | 8 | 6 | 2 |
| Interface / UX | 7 | 7 | 0 |
| Documentação/Entrega | 6 | 3 | 3 |
| **Total** | **51** | **46** | **5** |
