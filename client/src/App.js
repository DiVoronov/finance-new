import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { AllTickerListPage } from './pages/allTickerListPage/allTickerListPage';
import { FavoritePage } from './pages/favoritePage/favoritePage';
import { Navbar } from './components/navbar/navbar';
import { TickerProvider } from './app/context/tickerContext';

function App() {
  return (
    <Box className="App">
      <TickerProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<AllTickerListPage/>} />
            <Route path="/favorite" element={<FavoritePage/>} />
            <Route path="*" element={<AllTickerListPage/>} />
          </Routes>
        </BrowserRouter>
      </TickerProvider>
    </Box>
  );
};

export default App;
