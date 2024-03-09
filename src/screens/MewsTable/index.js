import alertSVG from '../../utils/assets/icons/MewsCalculator/alertSVG.svg';
import batimentoSVG from '../../utils/assets/icons/MewsCalculator/batimentoSVG.svg';
import freqRespSVG from '../../utils/assets/icons/MewsCalculator/freqRespSVG.svg';
import pressaoSVG from '../../utils/assets/icons/MewsCalculator/pressaoSVG.svg';
import temperaturaSVG from '../../utils/assets/icons/MewsCalculator/temperaturaSVG.svg';
import conscienciaSVG from '../../utils/assets/icons/MewsCalculator/conscienciaSVG.svg';
import tableSVG from '../../utils/assets/icons/MewsTable/table.svg';


function MewsTable() {

  return (
    <div className='flex flex-col bg-[#fff] w-[90%] pb-10 rounded-[20px] pl-10'>
      <div className='flex flex-row justify-between'>

        <div className='flex flex-col font-poppins'>
          <h1 className="text-[28px] text-[#262A41] font-medium mt-5">
            Escore de Alerta Precoce Modificado (MEWS)
          </h1>
          <img className='mt-8' src={tableSVG}/>
        </div>


        <div className='flex bg-[#F9FAFC] max-w-[36%] flex-col rounded-[16px] font-poppins'>
          <h1 className='text-[#292D32] font-medium text-[24px] self-center pt-4'>Estados críticos</h1>

          <li className='mt-6 list-none mx-5'>
            <ul>
              <div className='flex items-center'>
                <img src={pressaoSVG} />
                <div className='flex flex-col ml-2'>
                  <span className='font-medium text-[16px] text-[#292D32]'>Pressão arterial</span>
                  <span className='font-regular text-[13px] text-[#292D32]'>&le; 70</span>
                </div>
              </div>

              <div className='flex items-center mt-6'>
                <img src={batimentoSVG} />
                <div className='flex flex-col ml-2'>
                  <span className='font-medium text-[16px] text-[#292D32]'>Batimento cardíaco</span>
                  <span className='font-regular text-[13px] text-[#292D32]'>&ge; 130</span>
                </div>
              </div>

              <div className='flex items-center mt-6'>
                <img src={freqRespSVG} />
                <div className='flex flex-col ml-2'>
                  <span className='font-medium text-[16px] text-[#292D32]'>Frequência respiratória</span>
                  <span className='font-regular text-[13px] text-[#292D32]'>&le; 8 ou &ge; 30</span>
                </div>
              </div>

              <div className='flex items-center mt-6'>
                <img src={temperaturaSVG} />
                <div className='flex flex-col ml-2'>
                  <span className='font-medium text-[16px] text-[#292D32]'>Temperatura</span>
                  <span className='font-regular text-[13px] text-[#292D32]'>&le; 34.5 ou &ge; 39</span>
                </div>
              </div>

              <div className='flex items-center mt-6'>
                <img src={conscienciaSVG} />
                <div className='flex flex-col ml-2'>
                  <span className='font-medium text-[16px] text-[#292D32]'>Nível de consciência</span>
                  <span className='font-regular text-[13px] text-[#292D32]'>Inconsciente</span>
                </div>
              </div>




              <div className='flex flex-col relative bg-[#EDF0F6] px-3 py-4 rounded-[16px] mt-16'>
                <div className='absolute right-0 top-[-30px]' >
                  <img className='w-[80px] self-end' src={alertSVG} />
                </div>

                <h1 className='font-bold text-[16px] text-[#292D32]'>Alerta</h1>
                <span className='font-regular text-[12px] text-[#404852]'>Manter o paciente em monitorização constante e assistência multiprofissional</span>

                <div className="flex mt-5 justify-center">
                  <button
                    type="submit"
                    className="block rounded-md bg-[#292D32] px-3.5 py-2.5 text-center  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  w-[100%] self-center">
                    Mais informações
                  </button>
                </div>
              </div>

            </ul>
          </li>
        </div>

      </div>

    </div>

  );
}

export default MewsTable
