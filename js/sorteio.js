const Sorteio = {
    // RF04 – Sorteia N participantes sem repetição
    sortear(lista, numVagas = 1) {
        if (lista.length === 0) return null;

        const vagas = Math.min(numVagas, lista.length);
        const copia = [...lista];
        const sorteados = [];

        for (let i = 0; i < vagas; i++) {
            const indice = Math.floor(Math.random() * copia.length);
            sorteados.push(copia[indice]);
            copia.splice(indice, 1);
        }

        return {
            sorteados,
            vagas,
            totalParticipantes: lista.length,
            dataHora: new Date().toISOString()
        };
    }
};
