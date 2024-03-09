import logo from './logo.svg';
//import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MewsCalculator from './screens/MewsCalculator'
import Menu from './screens/Menu'
import MewsTable from './screens/MewsTable'

function App() {
  return (
    <div className="bg-[#287F87] h-[100%] flex py-4 pl-10 px-3">

      <BrowserRouter>
      <Menu />

      <Routes>
          <Route path="informacoes" element={<MewsTable />} />
          <Route path="enfermaria" element={<MewsCalculator />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
