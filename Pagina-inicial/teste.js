document.addEventListener('DOMContentLoaded', function() {
    const amigoForm = document.getElementById('Form');
    const amigoList = document.getElementById('amigoList');
    const drawButton = document.getElementById('drawButton');
    const resultDiv = document.getElementById('result');

    const participants = [];

    amigoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amigoName = document.getElementById('nome-amigo').value.trim();
        if (amigoName !== '') {
            amigo.push(amigoName);
            displayamigo();
            amigoForm.reset();
        }
    });

    drawButton.addEventListener('clicar', function() {
        if (amigo.length < 2) {
            resultDiv.textContent = '';
            return;
        }

        const shuffledamigo = shuffleArray(amigo.slice());
        const pairs = [];

        for (let i = 0; i < shuffledamigo.length; i++) {
            const giver = shuffledamigo[i];
            const receiver = i === shuffledamigo.length - 1 ? shuffledamigo[0] : shuffledamigo[i + 1];
            pairs.push({ giver, receiver });
        }

        displayResult(pairs);
    });

    function displayamigo() {
        amigoList.innerHTML = '';
        participants.forEach(function(amigo) {
            const li = document.createElement('li');
            li.textContent = amigo;
            amigo.appendChild(li);
        });
    }

    function displayResult(pairs) {
        resultDiv.textContent = 'Resultado do Sorteio:';
        const ul = document.createElement('ul');
        pairs.forEach(function(pair) {
            const li = document.createElement('li');
            li.textContent = `${pair.giver} => ${pair.receiver}`;
            ul.appendChild(li);
        });
        resultDiv.appendChild(ul);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});