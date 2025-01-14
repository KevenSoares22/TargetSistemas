import { Routes, Route, Navigate } from 'react-router-dom'; 
import Home from './pages/Home/Home.jsx'; // Importando a tela inicial
import Question1 from './pages/Question1/Question1.jsx'; 
import Question2 from './pages/Question2/Question2.jsx';
import Question3 from './pages/Question3/Question3.jsx'; 
import Question4 from './pages/Question4/Question4.jsx';
import Question5 from './pages/Question5/Question5.jsx';

const App = () => {
  return (   
    <Routes>
      <Route path="/" element={<Home />} />  {/* Rota inicial com os cards */}
      <Route path="/question1" element={<Question1 />} />
      <Route path="/question2" element={<Question2 />} />
      <Route path="/question3" element={<Question3 />} />
      <Route path="/question4" element={<Question4 />} />
      <Route path="/question5" element={<Question5 />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
