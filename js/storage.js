const Storage = {
    getParticipantes() {
        return JSON.parse(localStorage.getItem('participantes')) || [];
    },

    saveParticipantes(lista) {
        localStorage.setItem('participantes', JSON.stringify(lista));
    }
};
