import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home'
import GlobalStyles from './components/GlobalStyles'

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </GlobalStyles>
    </div>
  )
}

export default App
