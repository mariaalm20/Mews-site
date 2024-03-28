import React from 'react';
import tableSVG from '../../utils/assets/icons/MewsTable/table.svg';
import { CardCriticalStatus } from '../../components/CardCriticalStatus';
import { useNavigate } from 'react-router-dom';

function MewsTable() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#fff] w-[90%] pb-10 rounded-[20px] pl-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col font-poppins">
          <h1 className="text-[28px] text-[#1d1d1d] font-medium mt-5">
            Escore de Alerta Precoce Modificado (MEWS)
          </h1>
          <img className="mt-8" src={tableSVG} />
        </div>

        <CardCriticalStatus navigate={navigate} />
      </div>
    </div>
  );
}

export default MewsTable;
