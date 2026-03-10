const Sorteio = {
    sortear(lista) {
        if (lista.length === 0) return null;
        const indice = Math.floor(Math.random() * lista.length);
        return lista[indice];
    }
};
