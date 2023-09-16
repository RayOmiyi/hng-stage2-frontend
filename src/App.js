import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Layout from './components/dashboard/Layout.jsx'
import MovieDetails from './components/dashboard/Layout.jsx'
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="" element={<Layout />}>
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App