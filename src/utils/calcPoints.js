export function calcularPontos(
  freqRespiratoria,
  freqCardiaca,
  pressaoArterial,
  temperaturaCorporal,
  estadoConsciencia
) {
  let pontos = 0;

  console.log('teste', freqRespiratoria,
  freqCardiaca,
  pressaoArterial,
  temperaturaCorporal,
  estadoConsciencia)

  // Frequência Respiratória
  if (freqRespiratoria >= 8 && freqRespiratoria <= 20) {
    pontos += 0;
  } else if (freqRespiratoria >= 21 && freqRespiratoria <= 24) {
    pontos += 1;
  } else if (freqRespiratoria >= 25) {
    pontos += 2;
  }

  // Frequência Cardíaca
  if (freqCardiaca >= 51 && freqCardiaca <= 90) {
    pontos += 0;
  } else if (freqCardiaca >= 91 && freqCardiaca <= 110) {
    pontos += 1;
  } else if (freqCardiaca >= 111 && freqCardiaca <= 130) {
    pontos += 2;
  } else if (freqCardiaca >= 131) {
    pontos += 3;
  }

  // Pressão Arterial Sistólica
  if (pressaoArterial >= 111) {
    pontos += 0;
  } else if (pressaoArterial >= 101 && pressaoArterial <= 110) {
    pontos += 1;
  } else if (pressaoArterial >= 91 && pressaoArterial <= 100) {
    pontos += 2;
  } else if (pressaoArterial <= 90) {
    pontos += 3;
  }

  // Temperatura Corporal
  if (temperaturaCorporal >= 36.1 && temperaturaCorporal <= 38.0) {
    pontos += 0;
  } else if (
    (temperaturaCorporal >= 35.1 && temperaturaCorporal <= 36.0) ||
    (temperaturaCorporal >= 38.1 && temperaturaCorporal <= 39.0)
  ) {
    pontos += 1;
  } else if (temperaturaCorporal <= 35.0 || temperaturaCorporal >= 39.1) {
    pontos += 3;
  }


  // Estado de Consciência
  if (estadoConsciencia === 'alerta') {
    pontos += 0;
  } else if (estadoConsciencia === 'confuso') {
    pontos += 1;
  }else if (estadoConsciencia === 'dor') {
    pontos += 2;
  }else if (estadoConsciencia === 'coma') {
    pontos += 3;
  }

  return pontos;
}

