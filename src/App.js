import Layout from './components/Layout';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ResourcesContent from './components/ResourcesContent';
import ContactUs from './components/ContactUs';
import Career from './components/Career';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/resources' element={<ResourcesContent />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/career' element={<Career />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
