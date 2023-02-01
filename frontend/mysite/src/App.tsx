import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import SearchResult from './pages/SearchResult';
import Favorite from './pages/Favorite';
import ErrorPage from './pages/404';
import Detail from './pages/Detail';
function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/how_to_use' element={<HowToUse />} />
          <Route path='/search_result' element={<SearchResult />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path = '*' element={<ErrorPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
