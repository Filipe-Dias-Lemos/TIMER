function relogio() {
  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
    });
  }

  console.log(getTimeFromSeconds(10));

  const relogio = document.querySelector('.relogio');
  const iniciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const zerar = document.querySelector('.zerar');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('iniciar')) {
      clearInterval(timer);
      relogio.classList.remove('pausado');
      iniciaRelogio();
    }
    if (el.classList.contains('pausar')) {
      relogio.classList.add('pausado');
      clearInterval(timer);
    }
    if (el.classList.contains('zerar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      segundos = 0;
      relogio.innerHTML = '00:00:00';
    }
  });
}

relogio();
