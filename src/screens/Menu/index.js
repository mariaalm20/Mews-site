/* eslint-disable */
import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../utils/assets/icons/Menu/logoUem.jpg';
import uem from '../../utils/assets/icons/Menu/uem.jpg';
import profurg from '../../utils/assets/icons/Menu/profurg.png';

function Menu() {
  const location = useLocation();
  const isInformacoesAtiva = location.pathname === '/informacoes';
  const isEnfermariaAtiva = location.pathname === '/';

  return (
    <div class="flex h-screen flex-col justify-between font-poppins">
      <div class="pr-10 py-6">
        <div class="sticky inset-x-0 bottom-0">
          <a href="#" class="flex items-center gap-2 hover:bg-gray-50">
            <img alt="" src={logo} class="size-10 rounded-full object-cover" />

            <div>
              <strong class="font-regular text-[#fff]">Admin</strong>
              <span className="font-regular text-[#fff]">
                {' '}
                admin@admin.com{' '}
              </span>
            </div>
          </a>
        </div>

        <ul class="mt-[100px] space-y-1">
          <li>
            <a
              href="uti"
              class="block rounded-lg  text-[16px] font-medium text-[#9197B3] ">
              UTI
            </a>
          </li>

          <li>
            <a
              href="/"
              class={`${
                isEnfermariaAtiva ? 'text-[#eee]' : 'text-[#9197B3]'
              } mt-4 block rounded-lgtext-[16px] font-medium hover:text-gray-700`}>
              Enfermaria
            </a>
          </li>

          <li>
            <a
              href="informacoes"
              class={`${
                isInformacoesAtiva ? 'text-[#eee]' : 'text-[#9197B3]'
              } mt-4 block rounded-lgtext-[16px] font-medium hover:text-gray-700`}>
              Tabela - MEWS
            </a>
          </li>
        </ul>
      </div>

      <div className="flex">
        <img src={uem} className="w-[80px] mr-3 rounded-[10px]" />
        <img src={profurg} className="w-[80px] rounded-[10px]" />
      </div>
    </div>
  );
}

export default Menu;
