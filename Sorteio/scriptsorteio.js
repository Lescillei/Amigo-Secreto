document.getElementById('spinButton').addEventListener('click', function() {
    var roleta = document.querySelector('.slices');
    
    // Girar a roleta por um número aleatório de graus
    var randomAngle = Math.floor(Math.random() * 3600) + 360; // Gira entre 360 e 3960 graus
    roleta.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)'; // Transição suave
    roleta.style.transform = `rotate(${randomAngle}deg)`; // Aplicar a rotação
  });
  