document.addEventListener('DOMContentLoaded', () => {

    Participantes.init();
    renderLista();

    document.getElementById('addBtn').addEventListener('click', () => {
        const nomeInput = document.getElementById('nomeInput');
        const sucesso = Participantes.adicionar(nomeInput.value.trim());

        if (!sucesso) {
            alert('Nome inválido ou já cadastrado.');
            return;
        }

        nomeInput.value = '';
        renderLista();
    });

    document.getElementById('sortearBtn').addEventListener('click', () => {
        const vencedor = Sorteio.sortear(Participantes.lista);
        const resultado = document.getElementById('resultado');

        if (!vencedor) {
            resultado.textContent = 'Nenhum participante cadastrado.';
            return;
        }

        resultado.textContent = `Vencedor: ${vencedor.nome}`;
    });

    function renderLista() {
        const ul = document.getElementById('listaParticipantes');
        ul.innerHTML = '';

        Participantes.lista.forEach(p => {
            const li = document.createElement('li');
            li.textContent = p.nome;

            const btn = document.createElement('button');
            btn.textContent = 'Remover';
            btn.onclick = () => {
                Participantes.remover(p.id);
                renderLista();
            };

            li.appendChild(btn);
            ul.appendChild(li);
        });
    }

});
