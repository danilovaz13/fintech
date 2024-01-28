import React from 'react';
import './Style.css';
import Resumo from './Pages/Resumo';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import { DatacContextProvider } from './Context/DataContext';
import Vendas from './Pages/Vendas';

const App = () => {
  return (
    <DatacContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
          <Vendas />
        </main>
      </div>
    </DatacContextProvider>
  );
};

export default App;
