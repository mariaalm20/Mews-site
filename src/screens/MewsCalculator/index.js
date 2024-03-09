import { useState } from 'react'
import { useCalcMews } from '../../modules/calcMews';
import alertSVG from '../../utils/assets/icons/MewsCalculator/alertSVG.svg';
import batimentoSVG from '../../utils/assets/icons/MewsCalculator/batimentoSVG.svg';
import freqRespSVG from '../../utils/assets/icons/MewsCalculator/freqRespSVG.svg';
import pressaoSVG from '../../utils/assets/icons/MewsCalculator/pressaoSVG.svg';
import temperaturaSVG from '../../utils/assets/icons/MewsCalculator/temperaturaSVG.svg';
import conscienciaSVG from '../../utils/assets/icons/MewsCalculator/conscienciaSVG.svg';
import { useNavigate } from 'react-router-dom';

function empty(dados) {
  return Object.values(dados).some(valor => valor === '');
}

function MewsCalculator() {
  const { state: { points, recommendation, statusColor }, dispatch: { getPoints, setPoints } } = useCalcMews()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    freqRespiratoria: 0,
    freqCardiaca: 0,
    pressaoArterial: 0,
    temperaturaCorporal: 0,
    estadoConsciencia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    console.log('Valores do formulário:', formValues);
    getPoints(formValues)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  console.log('POINTS', points, recommendation, statusColor)


  const colorClass = statusColor || 'bg-gray-200';

  return (
    <div className='flex flex-col bg-[#fff] w-[90%] pb-10 rounded-[20px] pl-10'>
      <div className='flex flex-row justify-between'>

        <div className='flex flex-col font-poppins'>
          <h1 className="text-[28px] text-[#262A41] font-medium mt-5">
            Cálculo do MEWS
          </h1>
          {recommendation && points !== undefined && !loading ? (
            <div className='mt-8 bg-[#fff] px-6  max-w-[95%] py-6 rounded-[16px]  drop-shadow-2xl'>
              <div className=' flex justify-between items-center'>
                <h1 className='text-[#292D32] font-medium text-[24px] self-center'>Estado: {recommendation.status}</h1>
                {recommendation.status == 'Normal' && (
                  <div className={`bg-[#B6FFC1] px-2 rounded-[4px] h-[28px]`}>
                    <span className='font-medium text-[#292D32] text-[13px]'>Pontuação: {points}</span>
                  </div>
                )}

                {recommendation.status == 'Moderado' && (
                  <div className={`bg-[#FFF7AE] px-2 rounded-[4px] h-[28px]`}>
                    <span className='font-medium text-[#292D32] text-[13px]'>Pontuação: {points}</span>
                  </div>
                )}

                {recommendation.status == 'Alterado' && (
                  <div className={`bg-[#F8DEBD] px-2 rounded-[4px] h-[28px]`}>
                    <span className='font-medium text-[#292D32] text-[13px]'>Pontuação: {points}</span>
                  </div>
                )}

                {recommendation.status == 'Crítico' && (
                  <div className={`bg-[#CA6B6E] px-2 rounded-[4px] h-[28px]`}>
                    <span className='font-medium text-[#292D32] text-[13px]'>Pontuação: {points}</span>
                  </div>
                )}

              </div>
              {recommendation.recommendation.map(
                item => (
                  <li className='mt-5 ml-4'>
                    <ul>
                      <span className='text-[14px] text-[#404852] font-regular'>{item}</span>
                    </ul>
                  </li>
                )
              )}

              <div className="flex mt-10 justify-center">
                <button
                  onClick={() => setPoints(undefined)}
                  type="submit"
                  className="block rounded-md bg-[#287F87]  px-3.5 py-2.5 text-center  text-sm font-semibold  text-white shadow-sm   hover:bg-[#287F87]  focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287F87]  w-[40%] self-center"
                >
                  <span>Calcular novamente</span>
                </button>
              </div>


            </div>
          ) : (
            <form action="#" method="POST" className="mt-8 max-w-xl  bg-[#fff] px-6 py-6 rounded-[16px]  drop-shadow-2xl">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label for="freqCardiaca"
                    className="block text-sm font-medium leading-6 text-gray-900">Frequência cardíaca</label>
                  <div className="mt-2.5">
                    <input
                      value={formValues.freqCardiaca == '0' ? '' : formValues.freqCardiaca}
                      onChange={handleChange}
                      type="text"
                      name="freqCardiaca"
                      id="freqCardiaca"
                      placeholder='112bpm'
                      className="focus:outline focus:outline-[#287F87] block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div>
                  <label for="pressaoArterial" className="block text-sm font-medium leading-6 text-gray-900">Pressão arterial</label>
                  <div className="mt-2.5">
                    <input
                      value={formValues.pressaoArterial == '0' ? '' : formValues.pressaoArterial}
                      onChange={handleChange}
                      type="text"
                      name="pressaoArterial"
                      id="pressaoArterial"
                      placeholder='90mmHg'
                      className="focus:outline focus:outline-[#287F87] w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div>
                  <label for="temperaturaCorporal" className="block text-sm font-medium leading-6 text-gray-900">Temperatura</label>
                  <div className="mt-2.5">
                    <input
                      value={formValues.temperaturaCorporal == '0' ? '' : formValues.temperaturaCorporal}
                      onChange={handleChange}
                      type="text"
                      name="temperaturaCorporal"
                      id="temperaturaCorporal"
                      placeholder='36.5 ◦C'
                      className="focus:outline focus:outline-[#287F87] block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <label for="freqRespiratoria" className="block text-sm font-medium leading-6 text-gray-900">Frequência respiratória</label>
                  <div className="mt-2.5">
                    <input
                      value={formValues.freqRespiratoria == '0' ? '' : formValues.freqRespiratoria}
                      onChange={handleChange}
                      type="text"
                      name="freqRespiratoria"
                      id="freqRespiratoria"
                      placeholder='18rpm'
                      className="focus:outline focus:outline-[#287F87] block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div>
                  <label for="estadoConsciencia" className="block text-sm font-medium leading-6 text-gray-900">Nível de consciência</label>
                  <div className="mt-2.5">
                    <select
                      value={formValues.estadoConsciencia}
                      onChange={handleChange}
                      name="estadoConsciencia"
                      id="estadoConsciencia"
                      className="focus:outline focus:outline-[#287F87] block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    >
                      <option value="">Selecione</option>
                      <option value="alerta">Alerta</option>
                      <option value="confuso">Confuso</option>
                      <option value="dor">Resposta à dor</option>
                      <option value="coma">Inconsciente</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex mt-10 justify-center">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  disabled={empty(formValues)}
                  className={`block rounded-md ${empty(formValues) ? 'bg-[#ccc]' : 'bg-[#287F87] hover:bg-[#287F87] '}  px-3.5 py-2.5 text-center  text-sm font-semibold  text-white shadow-sm   focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287F87]  w-[40%] self-center`}>
                  {loading ? (
                    <div className='flex flex-row justify-center'>
                      <div
                        className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                      </div>
                      <span
                        className="ml-2"
                      >Calculando...</span>
                    </div>
                  ) : (
                    <span>Calcular</span>
                  )}

                </button>
              </div>
            </form>

          )}

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
                    onClick={() => navigate('/informacoes')}
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

export default MewsCalculator
