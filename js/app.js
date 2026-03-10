document.addEventListener('DOMContentLoaded', () => {

    Participantes.init();
    renderLista();
    restaurarUltimoSorteio();

    // ─── RF01 – Cadastro manual ───────────────────────────────────────────────
    const nomeInput = document.getElementById('nomeInput');

    document.getElementById('addBtn').addEventListener('click', () => adicionarParticipante());

    nomeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') adicionarParticipante();
    });

    function adicionarParticipante() {
        const nome = nomeInput.value.trim();
        const sucesso = Participantes.adicionar(nome);

        if (!sucesso) {
            mostrarFeedback('feedbackCadastro', nome ? '⚠️ Participante já cadastrado.' : '⚠️ Digite um nome válido.', 'erro');
            return;
        }

        nomeInput.value = '';
        nomeInput.focus();
        renderLista();
        mostrarFeedback('feedbackCadastro', `✅ "${nome}" adicionado com sucesso!`, 'sucesso');
    }

    // ─── RF03 – Importação via CSV ────────────────────────────────────────────
    const csvInput = document.getElementById('csvInput');

    csvInput.addEventListener('change', (e) => {
        const arquivo = e.target.files[0];
        if (!arquivo) return;

        document.getElementById('csvFileName').textContent = arquivo.name;

        const reader = new FileReader();
        reader.onload = (ev) => {
            const resultado = Participantes.importarCSV(ev.target.result);
            renderLista();

            const msg = `✅ ${resultado.adicionados} participante(s) importado(s).` +
                (resultado.duplicatas > 0 ? ` (${resultado.duplicatas} duplicata(s) ignorada(s))` : '');
            mostrarFeedback('feedbackCSV', msg, resultado.adicionados > 0 ? 'sucesso' : 'erro');
        };
        reader.readAsText(arquivo, 'UTF-8');
        csvInput.value = '';
    });

    // ─── RF02 – Limpar lista com confirmação ─────────────────────────────────
    document.getElementById('limparListaBtn').addEventListener('click', () => {
        if (Participantes.lista.length === 0) return;
        document.getElementById('modalConfirmacao').classList.remove('hidden');
    });

    document.getElementById('modalConfirmarBtn').addEventListener('click', () => {
        Participantes.limparTodos();
        Storage.limparUltimoSorteio();
        esconderResultado();
        renderLista();
        document.getElementById('modalConfirmacao').classList.add('hidden');
    });

    document.getElementById('modalCancelarBtn').addEventListener('click', () => {
        document.getElementById('modalConfirmacao').classList.add('hidden');
    });

    // ─── RF04 + RF05 – Sorteio de múltiplas vagas ────────────────────────────
    document.getElementById('sortearBtn').addEventListener('click', () => {
        const numVagas = parseInt(document.getElementById('numVagas').value) || 1;
        const erroEl = document.getElementById('resultadoErro');

        if (Participantes.lista.length === 0) {
            erroEl.textContent = '⚠️ Nenhum participante cadastrado.';
            esconderResultado();
            return;
        }

        if (numVagas < 1) {
            erroEl.textContent = '⚠️ O número de vagas deve ser pelo menos 1.';
            return;
        }

        erroEl.textContent = '';
        const resultado = Sorteio.sortear(Participantes.lista, numVagas);
        Storage.saveUltimoSorteio(resultado);
        renderResultado(resultado);
    });

    // ─── RF06 – Exportar resultado em .txt ───────────────────────────────────
    document.getElementById('exportarBtn').addEventListener('click', () => {
        const resultado = Storage.getUltimoSorteio();
        if (!resultado) return;

        const dataHora = new Date(resultado.dataHora).toLocaleString('pt-BR');
        const linhas = [
            '=== RESULTADO DO SORTEIO DE VAGAS ===',
            `Data/Hora: ${dataHora}`,
            `Vagas sorteadas: ${resultado.vagas}`,
            `Total de participantes: ${resultado.totalParticipantes}`,
            '',
            '--- SORTEADOS ---',
            ...resultado.sorteados.map((p, i) => `${i + 1}. ${p.nome}`),
            '',
            '=====================================',
            'Gerado por: Aplicativo Sorteio de Vagas'
        ];

        const conteudo = linhas.join('\n');
        const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `sorteio_${new Date(resultado.dataHora).toISOString().slice(0, 10)}.txt`;
        link.click();
        URL.revokeObjectURL(url);
    });

    // ─── Funções auxiliares ───────────────────────────────────────────────────

    function renderLista() {
        const ul = document.getElementById('listaParticipantes');
        const listaVazia = document.getElementById('listaVazia');
        const contagem = document.getElementById('contagem');

        ul.innerHTML = '';
        contagem.textContent = Participantes.lista.length;

        if (Participantes.lista.length === 0) {
            listaVazia.classList.remove('hidden');
            return;
        }

        listaVazia.classList.add('hidden');

        Participantes.lista.forEach(p => {
            const li = document.createElement('li');

            const info = document.createElement('div');
            info.className = 'participante-info';

            const nome = document.createElement('span');
            nome.className = 'participante-nome';
            nome.textContent = p.nome;

            const data = document.createElement('span');
            data.className = 'participante-data';
            data.textContent = new Date(p.dataCadastro).toLocaleDateString('pt-BR');

            info.appendChild(nome);
            info.appendChild(data);

            const btn = document.createElement('button');
            btn.textContent = 'Remover';
            btn.className = 'btn btn-danger btn-sm';
            btn.onclick = () => {
                Participantes.remover(p.id);
                renderLista();
            };

            li.appendChild(info);
            li.appendChild(btn);
            ul.appendChild(li);
        });
    }

    function renderResultado(resultado) {
        const container = document.getElementById('resultadoContainer');
        const info = document.getElementById('resultadoInfo');
        const lista = document.getElementById('listaResultado');

        info.textContent = `${resultado.vagas} vaga(s) sorteada(s) entre ${resultado.totalParticipantes} participante(s)`;
        lista.innerHTML = '';

        resultado.sorteados.forEach((p, i) => {
            const li = document.createElement('li');
            li.className = 'sorteado-item';
            li.innerHTML = `<span class="sorteado-pos">${i + 1}º</span> <span class="sorteado-nome">${p.nome}</span>`;
            lista.appendChild(li);

            // Animação em cascata
            setTimeout(() => li.classList.add('visivel'), i * 150);
        });

        container.classList.remove('hidden');
        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function restaurarUltimoSorteio() {
        const resultado = Storage.getUltimoSorteio();
        if (resultado) renderResultado(resultado);
    }

    function esconderResultado() {
        document.getElementById('resultadoContainer').classList.add('hidden');
    }

    function mostrarFeedback(elementId, mensagem, tipo) {
        const el = document.getElementById(elementId);
        el.textContent = mensagem;
        el.className = `feedback feedback-${tipo}`;
        clearTimeout(el._timeout);
        el._timeout = setTimeout(() => {
            el.textContent = '';
            el.className = 'feedback';
        }, 4000);
    }

});
