import React from 'react';
import { Header } from './components/header';
import { CompanyProvider } from './context/company';
import { Solicitations } from './pages/solicitations';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <CompanyProvider>
        <GlobalStyles />
        <Header />
        <Solicitations />
    </CompanyProvider>
  );
}

export default App;
