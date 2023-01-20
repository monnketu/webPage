import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import SearchResult from './pages/SearchResult';
import ErrorPage from './pages/404'
function App() {
  return (
    <BrowserRouter>
      <>
      
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/how_to_use' element={<HowToUse />} />
          <Route index path='/search_result' element={<SearchResult />} />
          <Route path = '*' element={<ErrorPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
