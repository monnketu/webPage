import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/how_to_use' element={<HowToUse />} />
          <Route render={() => <h4>not found...</h4>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
