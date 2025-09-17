const btn = document.getElementById('modoOscuroBtn');
const body = document.body;

  btn.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');

    // Cambia el texto del botón
    if (body.classList.contains('modo-oscuro')) {
      btn.textContent = '☀️ Modo Claro';
    } else {
      btn.textContent = '🌙 Modo Nocturno';
    }
});
