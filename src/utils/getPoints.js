export function calcularPontos(
  freqRespiratoria,
  freqCardiaca,
  pressaoArterial,
  temperaturaCorporal,
  estadoConsciencia,
) {
  let pontos = 0;

  // Frequência Respiratória
  if (freqRespiratoria >= 12 && freqRespiratoria <= 20) {
    pontos += 0;
  } else if (freqRespiratoria >= 9 && freqRespiratoria <= 11) {
    pontos += 1;
  } else if (freqRespiratoria >= 21 && freqRespiratoria <= 29) {
    pontos += 2;
  } else {
    pontos += 3;
  }

  // Frequência Cardíaca
  if (freqCardiaca >= 51 && freqCardiaca <= 90) {
    pontos += 0;
  } else if (
    (freqCardiaca >= 41 && freqCardiaca <= 50) ||
    (freqCardiaca >= 101 && freqCardiaca <= 110)
  ) {
    pontos += 1;
  } else if (
    freqCardiaca <= 40 ||
    (freqCardiaca >= 111 && freqCardiaca <= 129)
  ) {
    pontos += 2;
  } else if (freqCardiaca >= 130) {
    pontos += 3;
  }

  // Pressão Arterial Sistólica
  if (pressaoArterial >= 101 && pressaoArterial <= 199) {
    pontos += 0;
  } else if (pressaoArterial >= 81 && pressaoArterial <= 100) {
    pontos += 1;
  } else if (
    (pressaoArterial >= 71 && pressaoArterial <= 80) ||
    pressaoArterial >= 200
  ) {
    pontos += 2;
  } else if (pressaoArterial <= 70) {
    pontos += 3;
  }

  // Temperatura Corporal
  if (temperaturaCorporal >= 35 && temperaturaCorporal <= 38.4) {
    pontos += 0;
  } else if (temperaturaCorporal <= 34.9 || temperaturaCorporal >= 38.5) {
    pontos += 2;
  }

  // Estado de Consciência
  if (estadoConsciencia === 'alerta') {
    pontos += 0;
  } else if (estadoConsciencia === 'confuso') {
    pontos += 1;
  } else if (estadoConsciencia === 'dor') {
    pontos += 2;
  } else if (estadoConsciencia === 'coma') {
    pontos += 3;
  }

  return pontos;
}

///STATUS NORMAL
// {
// 	"freqRespiratoria": 8,
// 	"freqCardiaca": 87,
// 	"pressaoArterial": 200,
// 	"temperaturaCorporal": 37.5,
// 	"estadoConsciencia": "Alerta"
// }

///STATUS MODERADO
// {
// 	"freqRespiratoria": 21,
// 	"freqCardiaca": 87,
// 	"pressaoArterial": 200,
// 	"temperaturaCorporal": 37.5,
// 	"estadoConsciencia": "Alerta"
// }

///STATUS ALTERADO
// {
// 	"freqRespiratoria": 21,
// 	"freqCardiaca": 91,
// 	"pressaoArterial": 101,
// 	"temperaturaCorporal": 38.5,
// 	"estadoConsciencia": "Responde a estímulos"
// }

///STATUS CRÍTICO
// {
// 	"freqRespiratoria": 21,
// 	"freqCardiaca": 91,
// 	"pressaoArterial": 101,
// 	"temperaturaCorporal": 39.1,
// 	"estadoConsciencia": "Responde a estímulos"
// }
