import React from 'react';
import { useState } from 'react';
import { useMewsCalculator } from '../../modules/useMewsCalculator';
import { useNavigate } from 'react-router-dom';

import { CardRecommendation } from '../../components/CardRecommendation';
import { CardCriticalStatus } from '../../components/CardCriticalStatus';
import { Form } from '../../components/Form';

function MewsCalculator() {
  const navigate = useNavigate();
  const {
    state: { points, recommendation },
    dispatch: { getPoints, setPoints },
  } = useMewsCalculator();
  const [loading, setLoading] = useState(false);

  const color = recommendation.status;

  const [formValues, setFormValues] = useState({
    freqRespiratoria: 0,
    freqCardiaca: 0,
    pressaoArterial: 0,
    temperaturaCorporal: 0,
    estadoConsciencia: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    getPoints(formValues);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="shadow-2xl flex flex-col bg-[#ffff] w-[90%] pb-10 rounded-[20px] pl-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col font-poppins">
          <h1 className="text-[28px] text-[#1d1d1d] font-medium mt-5">
            Cálculo do MEWS
          </h1>
          {recommendation && points !== undefined && !loading ? (
            <CardRecommendation
              color={color}
              recommendation={recommendation}
              points={points}
              setPoints={setPoints}
            />
          ) : (
            <Form
              formValues={formValues}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          )}
        </div>
        <CardCriticalStatus navigate={navigate} />
      </div>
    </div>
  );
}

export default MewsCalculator;
