import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MewsCalculator from './screens/MewsCalculator';
import Menu from './screens/Menu';
import MewsTable from './screens/MewsTable';
import React from 'react';

function App() {
  return (
    <div className="bg-[#1d1d1d] h-[100%] flex py-4 pl-10 px-3">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route index path="informacoes" element={<MewsTable />} />
          <Route path="/" element={<MewsCalculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
