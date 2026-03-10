const Storage = {
    getParticipantes() {
        return JSON.parse(localStorage.getItem('participantes')) || [];
    },

    saveParticipantes(lista) {
        localStorage.setItem('participantes', JSON.stringify(lista));
    },

    getUltimoSorteio() {
        return JSON.parse(localStorage.getItem('ultimoSorteio')) || null;
    },

    saveUltimoSorteio(resultado) {
        localStorage.setItem('ultimoSorteio', JSON.stringify(resultado));
    },

    limparUltimoSorteio() {
        localStorage.removeItem('ultimoSorteio');
    }
};
