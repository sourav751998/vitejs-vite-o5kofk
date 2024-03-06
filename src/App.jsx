import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './components/First';
import Second from './components/Second';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
