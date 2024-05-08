function addName() {
    const input = document.getElementById('nameInput');
    const name = input.value.trim();
  
    if (name) {
      let names = JSON.parse(localStorage.getItem('secretSantaNames')) || [];
  
      if (!names.includes(name)) {
        names.push(name);
        localStorage.setItem('secretSantaNames', JSON.stringify(names));
        input.value = '';  // Limpa o campo de texto
        updateNamesList();  // Atualiza a lista na página
      } else {
        alert('Nome já existe!');
      }
    }
  }
  
  function updateNamesList() {
    const names = JSON.parse(localStorage.getItem('secretSantaNames')) || [];
    const list = document.getElementById('namesList');
  
    list.innerHTML = '';  // Limpa a lista atual
    names.forEach(name => {
      const listItem = document.createElement('li');
      listItem.textContent = name;
      list.appendChild(listItem);
    });
  }
  
  function goToSortPage() {
    if (JSON.parse(localStorage.getItem('secretSantaNames')).length > 1) {
      window.location.href = 'sortPage.html';  // Direciona para a página de sorteio
    } else {
      alert('Adicione pelo menos dois nomes para continuar.');
    }
  }
  
  // Atualiza a lista de nomes quando a página carrega
  window.onload = updateNamesList;
  