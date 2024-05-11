function adicionarNome() {
  const nomeInput = document.getElementById("nome");
  const nome = nomeInput.value.trim(); // Pega o nome do input

  //Verifica se campo estiver vazio
  if (nome === ""){
      alert("Insira o nome dos seu amigos!")
      return;
  }

  //Função para impedir nomes repetidos
  const listaNomes = document.getElementById("listaNomes");
  const nomesExistentes = Array.from(listaNomes.children).map(li => li.textContent); //Pega nomes já existentes
  //listaNomes.children significa pegar o li que é "children" do ol

  //Verifica se tem nomes repetidos
  if (nomesExistentes.includes(nome)) {
      alert("Nome já foi adicionado à lista.");
      return;
  }
  
  //Cria o li
  const item = document.createElement("li");

  //Coloca nome no li
  item.textContent = nome;
  //Add no final da lista da ol
  listaNomes.appendChild(item);

  //Limpa o campo após adicionar nome
  nomeInput.value = "";
}

//Embaralha a lista
//Pega lista, começa do valor máximo do array [0,1,...]
//Percorre do maior até o 1 (> 0)

//Const i vai do tamanho da lista até 1
//Const j recebe um nome aleatório (Math.random) (Math.floor => arredonda pra cima) depois pega o aleatório e multiplica por i + 1
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i --) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

//Sorteia e armazena no localStorage
function sortear() {
  const listaNomes = document.getElementById("listaNomes").getElementsByTagName("li");
  const nomes = [];

  

  //Obtém todos os nomes => coleta o nome de cada li [0=a,1=b,..]
  for (let item of listaNomes) {
      nomes.push(item.textContent);
  }

  //Faz ter pelo menos 2 nomes na lista
  if (nomes.length < 2) {
      alert("Insira nome de pelo menos 2 amigos!");
      return;
  }

  //Ativa função embaralhar passando o parâmetro nomes
  embaralhar(nomes);

  //Gera as combinações
  const sorteio = {}; //Definida como JSON => chave:valor

  //Define o primeiro item da lista já embaralhada como 0
  /*exemplo: o nome da posição 0 irá receber o nome da posição seguinte; ao chegar no final da lista o nome da posição final receberá % (resto da divisão dele com o total),
  ou seja se tamanho total for 2 será feito 2%2 = 0, sendo assim o nome da posição 2 receberá o nome da posição 0 */
  
  for (let i = 0; i < nomes.length; i++) {
      sorteio[nomes[i]] = nomes[(i + 1) % nomes.length];
  }

  //Add resultados no localStorage
  localStorage.setItem("sorteio", JSON.stringify(sorteio));

  //Redireciona para a página de resultado
  window.location.href = "resultado.html";
}

