
import './App.css'
// import MovieCard from './components/MovieCard'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favourites from './pages/Favourites';

function App() {
  let movieNumber = 2;

  return (
    <>
    <main className='container'>
      <h1>Moviespidia</h1>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='fav' element={<Favourites/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App
