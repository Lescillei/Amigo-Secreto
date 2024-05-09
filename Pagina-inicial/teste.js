function startRaffle() {
    const amigoSecretoInput = document.getElementById('amigo_secreto');
    const amigosSecreto = amigoSecretoInput.value.split(',').map(amigo => amigo.trim());
    const resultDiv = document.getElementById('result');
  
    // Validar se o número de participantes é par
    if (amigosSecreto.length % 2 !== 0) {
      alert('O número de participantes deve ser par.');
      return;
    }
  
    // Embaralhar a lista de amigos secreto para criar uma ordem aleatória
    const shuffledAmigosSecreto = shuffleArray(amigosSecreto.slice());
  
    let amigosSecretos = {};
  
    for (let i = 0; i < shuffledAmigosSecreto.length; i++) {
      const currentAmigoSecreto = shuffledAmigosSecreto[i];
      let amigoSecreto = null;
  
      // Remover o amigo atual da lista de participantes
      const amigosRestantes = shuffledAmigosSecreto.filter(amigo => amigo !== currentAmigoSecreto);
  
      // Embaralhar a lista de participantes restantes para evitar que o amigo secreto seja previsível
      const amigosRestantesEmbaralhados = shuffleArray(amigosRestantes);
  
      amigoSecreto = amigosRestantesEmbaralhados[0]; // Pegar o primeiro amigo da lista embaralhada
  
      amigosSecretos[currentAmigoSecreto] = amigoSecreto;
    }
  
    // Exibir o resultado
    resultDiv.innerHTML = '<h2>Resultado:</h2>';
    for (const amigoSecreto in amigosSecretos) {
      const amigo = amigosSecretos[amigoSecreto];
      resultDiv.innerHTML += `<p>${amigoSecreto} tirou ${amigo} como amigo secreto.</p>`;
    }
  }
  
  // Função para embaralhar um array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }