import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CountryPage } from './pages/CountryPage';
import { HomePage } from './pages/HomePage';
import { Page404 } from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home">
          <Route index element={<HomePage />} />
          <Route path="country/:countryId" element={<CountryPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
