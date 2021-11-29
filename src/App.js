import { Routes,Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog';
import Albums from './components/Albums'
import Login from './components/Login';
import Register from './components/Register';

function App() {
  
  return (
    <div className="App">
    
      <div className="loader_bg">
        <div className="loader"><img src="images/loading.gif" alt="#" /></div>
      </div>

      <Header />


      {/* <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes> */}



                           
    </div>
  );
}

export default App;