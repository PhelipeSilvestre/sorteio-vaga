const Participantes = {
    lista: [],

    init() {
        this.lista = Storage.getParticipantes();
    },

    adicionar(nome) {
        if (!nome) return false;

        const existe = this.lista.some(p => p.nome.toLowerCase() === nome.toLowerCase());
        if (existe) return false;

        const participante = {
            id: Date.now(),
            nome: nome,
            dataCadastro: new Date().toISOString()
        };

        this.lista.push(participante);
        Storage.saveParticipantes(this.lista);
        return true;
    },

    remover(id) {
        this.lista = this.lista.filter(p => p.id !== id);
        Storage.saveParticipantes(this.lista);
    },

    limparTodos() {
        this.lista = [];
        Storage.saveParticipantes(this.lista);
    },

    // RF03 – Importação via CSV
    importarCSV(conteudo) {
        const linhas = conteudo
            .split(/\r?\n/)
            .map(l => l.trim())
            .filter(l => l.length > 0);

        let adicionados = 0;
        let duplicatas = 0;

        linhas.forEach(nome => {
            const resultado = this.adicionar(nome);
            if (resultado) {
                adicionados++;
            } else {
                duplicatas++;
            }
        });

        return { adicionados, duplicatas, total: linhas.length };
    }
};
