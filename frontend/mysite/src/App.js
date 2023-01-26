import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import SearchResult from './pages/SearchResult';
import Favorite from './pages/Favorite';
import ErrorPage from './pages/404';
import Login from './pages/Login';
import Detail from './pages/Detail';
function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route exact path='/how_to_use' element={<HowToUse />} />
          <Route exact path='/search_result' element={<SearchResult />} />
          <Route exact path='/detail' element={<Detail />} />
          <Route exact path='/favorite' element={<Favorite />} />
          <Route path='/login' element={<Login />} />
          <Route path = '*' element={<ErrorPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
