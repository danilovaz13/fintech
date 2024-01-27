import React from 'react';
import './Style.css';
import Resumo from './Pages/Resumo';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import { DatacContextProvider } from './Context/DataContext';

const App = () => {
  return (
    <DatacContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DatacContextProvider>
  );
};

export default App;
