import { useLocation } from 'react-router-dom';
function Menu() {
  const location = useLocation();
  const isInformacoesAtiva = location.pathname === '/informacoes';
  const isEnfermariaAtiva = location.pathname === '/enfermaria';

  return (
    <div class="flex h-screen flex-col justify-between font-poppins">
      <div class="pr-10 py-6">
      <div class="sticky inset-x-0 bottom-0">
        <a href="#" class="flex items-center gap-2 hover:bg-gray-50">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="size-10 rounded-full object-cover"
          />

          <div>
            <p class="text-xs">
              <strong class="block font-medium">Admin</strong>

              <span> admin@admin.com </span>
            </p>
          </div>
        </a>
      </div>

        <ul class="mt-[100px] space-y-1">
          <li>
            <a
              href="#"
              class="block rounded-lg  text-[16px] font-medium text-gray-700 "
            >
              UTI
            </a>
          </li>

          
          <li className='mt-3'>
            <a
              href="enfermaria"
              class={`${isEnfermariaAtiva ? 'text-[#eee]' : 'text-gray-700'} mt-4 block rounded-lgtext-[16px] font-medium hover:text-gray-700`}
            >
              Enfermaria
            </a>
          </li>

          <li>
            <a
              href="informacoes"
              class={`${isInformacoesAtiva ? 'text-[#eee]' : 'text-gray-700'} mt-4 block rounded-lgtext-[16px] font-medium hover:text-gray-700`}
            >
              Tabela - MEWS
            </a>
          </li>
        </ul>
      </div>

     
    </div>

  )
}


export default Menu