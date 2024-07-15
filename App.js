import About from './components/About'
import Home from './components/Home'

import './App.css'
function App() {
  const pathname = window.location.pathname;

  if (pathname === '/about.js') {
    return <About />;
  } else {
    return <Home />;
  }
  
}
export default App;