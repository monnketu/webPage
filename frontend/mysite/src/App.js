import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route render={() => <h4>not found...</h4>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
