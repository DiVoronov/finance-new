import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<>first</>} />
          <Route path="/favorite" element={<></>} />
          <Route path="*" element={<></>} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
