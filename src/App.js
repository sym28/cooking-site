import { BrowserRouter, Route, Routes } from 'react-router-dom';

// styles
import './App.css'

// page components
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

import { useTheme } from './hooks/useTheme';

function App() {
  const {mode} = useTheme()

  return (
    <div className={`App ${mode}`}>

        <BrowserRouter>

          <Navbar />
          <ThemeSelector />
          
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/search/:searchText' element={<Search />} />
            <Route path='/recipes/:id' element={<Recipe />} />
            
          </Routes>

        </BrowserRouter>
      
    </div>
  );
}

export default App
