import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'; 
import Enterprise from './Pages/Enterprise/Enterprise';
import Platform from './Pages/Platform/Platform';
function App() { 
return ( 
<> 
  <Router> 
    <Routes> 
      <Route path="/" element={<Enterprise />} /> 
      {/* <Route path="/platform" element={<Platform />} /> */} 
      <Route path="/platform" element={<Platform/>} />
    </Routes> 
  </Router> 
</> 
); 
} 
export default App;

