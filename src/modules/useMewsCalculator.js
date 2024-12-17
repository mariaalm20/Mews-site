import { useState } from 'react';
import { calcularPontos } from '../utils/getPoints';
import { recommendations } from '../utils/getRecommendation';
import { getStatusColor } from '../utils/getStatusColor';
/* eslint-disable */
export const useMewsCalculator = () => {
  const [points, setPoints] = useState(0);
  const [recommendation, setRecommendation] = useState(0);
  const [statusColor, setStatusColor] = useState('');

  const getPoints = ({
    freqRespiratoria,
    freqCardiaca,
    pressaoArterial,
    temperaturaCorporal,
    estadoConsciencia,
  }) => {
    const points = calcularPontos(
      Number(freqRespiratoria),
      Number(freqCardiaca),
      Number(pressaoArterial),
      Number(temperaturaCorporal),
      estadoConsciencia,
    );
    setPoints(points);
    const recommend = getRecommendation(points);
    const color = getStatusColor(recommend.status);
    console.log('COLOR', color);
    setStatusColor(`bg-[${color}]`);
    setRecommendation(recommend);
  };

  const getRecommendation = (points) => {
    if (points <= 1) {
      return recommendations[0];
    }

    if (points >= 2 && points <= 3) {
      return recommendations[1];
    }

    if (points >= 4 && points <= 6) {
      return recommendations[2];
    }

    if (points >= 7) {
      return recommendations[3];
    }
  };

  return {
    state: { points, recommendation, statusColor },
    dispatch: { getPoints, setPoints },
  };
};
