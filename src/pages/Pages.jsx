import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Recipe from './Recipe'
import FavouritePage from './favourite'
import SearchedPage from './Searched'

const Pages = () => {
  const location = useLocation()
  return (
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/favourite' element={<FavouritePage />} />
        <Route path='/single-recipy/:id' element={<Recipe />} />
        <Route path='/searched/:name' element={<SearchedPage />} />

      </Routes>
  )
}

export default Pages
