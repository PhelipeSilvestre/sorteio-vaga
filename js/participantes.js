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
    }
};
