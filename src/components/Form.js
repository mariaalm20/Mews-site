import React from 'react';
/* eslint-disable */
function empty(dados) {
  return (
    Object.values(dados).some((valor) => valor === '') ||
    Object.values(dados).some((valor) => valor === 0)
  );
}

export const Form = ({ formValues, handleChange, handleSubmit, loading }) => {
  return (
    <form
      action="#"
      method="POST"
      className="mt-8 max-w-xl  bg-[#fff] px-6 py-6 rounded-[16px]  drop-shadow-2xl">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            for="freqCardiaca"
            className="block text-sm font-medium leading-6 text-gray-900">
            Frequência cardíaca
          </label>
          <div className="mt-2.5">
            <input
              value={
                formValues.freqCardiaca == '0' ? '' : formValues.freqCardiaca
              }
              onChange={handleChange}
              type="text"
              name="freqCardiaca"
              id="freqCardiaca"
              placeholder="112bpm"
              className="focus:outline focus:outline-[#287F87] block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="pressaoArterial"
            className="block text-sm font-medium leading-6 text-gray-900">
            Pressão arterial sistólica
          </label>
          <div className="mt-2.5">
            <input
              value={
                formValues.pressaoArterial == '0'
                  ? ''
                  : formValues.pressaoArterial
              }
              onChange={handleChange}
              type="text"
              name="pressaoArterial"
              id="pressaoArterial"
              placeholder="90mmHg"
              className="focus:outline focus:outline-[#287F87] w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="temperaturaCorporal"
            className="block text-sm font-medium leading-6 text-gray-900">
            Temperatura
          </label>
          <div className="mt-2.5">
            <input
              value={
                formValues.temperaturaCorporal == '0'
                  ? ''
                  : formValues.temperaturaCorporal
              }
              onChange={handleChange}
              type="text"
              name="temperaturaCorporal"
              id="temperaturaCorporal"
              placeholder="36.5 ◦C"
              className="focus:outline focus:outline-[#287F87] block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            for="freqRespiratoria"
            className="block text-sm font-medium leading-6 text-gray-900">
            Frequência respiratória
          </label>
          <div className="mt-2.5">
            <input
              value={
                formValues.freqRespiratoria == '0'
                  ? ''
                  : formValues.freqRespiratoria
              }
              onChange={handleChange}
              type="text"
              name="freqRespiratoria"
              id="freqRespiratoria"
              placeholder="18rpm"
              className="focus:outline focus:outline-[#287F87] block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="estadoConsciencia"
            className="block text-sm font-medium leading-6 text-gray-900">
            Nível de consciência
          </label>
          <div className="mt-2.5">
            <select
              value={formValues.estadoConsciencia}
              onChange={handleChange}
              name="estadoConsciencia"
              id="estadoConsciencia"
              className="focus:outline focus:outline-[#287F87] block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
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
          className={`block rounded-md ${
            empty(formValues) ? 'bg-[#ccc]' : 'bg-[#1d1d1d] hover:bg-[#287F87] '
          }  px-3.5 py-2.5 text-center  text-sm font-semibold  text-white shadow-sm   focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287F87]  w-[40%] self-center`}>
          {loading ? (
            <div className="flex flex-row justify-center">
              <div
                className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"></div>
              <span className="ml-2">Calculando...</span>
            </div>
          ) : (
            <span>Calcular</span>
          )}
        </button>
      </div>
    </form>
  );
};
