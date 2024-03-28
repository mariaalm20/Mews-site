import alertSVG from '../utils/assets/icons/MewsCalculator/alertSVG.svg';
import profileSVG from '../utils/assets/icons/MewsCalculator/profile-2user.svg';
import React from 'react';

export const CardRecommendation = ({
  color,
  recommendation,
  points,
  setPoints,
}) => (
  <div className="relative mt-8 bg-[#fff] w-[100%] mr-3 pb-6 rounded-[16px]  drop-shadow-2xl">
    <div
      className={`${
        color == 'Normal'
          ? 'bg-[#0597F2]'
          : color == 'Alterado'
          ? 'bg-[#32D94B]'
          : color == 'Moderado'
          ? 'bg-[#F28B0C]'
          : 'bg-[#D93636]'
      } px-6 py-1 rounded-t-[16px] flex bg-[#D0004B] justify-between items-center`}>
      <h1 className="text-[#fff] font-medium text-[24px] self-center">
        {recommendation.status}
      </h1>
      <div className={`flex items-center px-2 rounded-[4px] h-[28px]`}>
        <span className="font-medium text-[#fff] text-[14px]">
          Pontuação: {points}
        </span>
      </div>
    </div>

    <div className="flex justify-around mt-[20px] px-6 ">
      <div className="flex">
        <div className="flex items-center justify-center bg-[#f4f4f4] w-[40px] rounded-[50px] mr-2">
          <img src={profileSVG} className="w-[20px] h-[20px]" />
        </div>
        <div className="flex flex-col">
          <span className="text-[#ACACAC] font-regular text-[12px]">
            Avaliação enfermaria
          </span>
          <span className="text-[#333333] font-medium text-[16px]">
            {recommendation.sinais}
          </span>
        </div>
      </div>

      <div className="flex ml-10">
        <div className="flex items-center justify-center bg-[#f4f4f4] w-[40px] rounded-[50px] mr-2">
          <img src={profileSVG} className="w-[20px] h-[20px]" />
        </div>
        <div className="flex flex-col">
          <span className="text-[#ACACAC] font-regular text-[12px]">
            Avaliação médica
          </span>
          <span className="text-[#333333] font-medium text-[16px]">
            {recommendation.medico}
          </span>
        </div>
      </div>
    </div>

    <div className="h-[30px]" />

    <div className="px-6">
      {(recommendation.status == 'Moderado' ||
        recommendation.status == 'Crítico') && (
        <div className="mb-4 flex items-center">
          <img className="w-[30px] self-end" src={alertSVG} />
          <span className="text-[14px] text-[#404852] font-medium">
            Considerar abertura do relatório SEPSE.
          </span>
        </div>
      )}

      {recommendation.recommendation.map((item) => (
        <li className="ml-4">
          <ul className="list-none">
            <span className="text-[14px] text-[#404852] font-regular">
              {item}
            </span>
          </ul>
        </li>
      ))}
    </div>

    <div className="flex mt-10 justify-center">
      <button
        onClick={() => setPoints(undefined)}
        type="submit"
        className="block rounded-md bg-[#1d1d1d]  px-3.5 py-2.5 text-center  text-sm font-semibold  text-white shadow-sm   hover:bg-[#287F87]  focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287F87] self-center">
        <span>Calcular novamente</span>
      </button>
    </div>
  </div>
);
