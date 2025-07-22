import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/login/Login';
import SignupPage from './components/signup/signup';

const App = () => (
  <Router>
    <Routes>
      {/* <Route path='/' element={<Login/>}/> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/signup" element={<SignupPage />}/>
    </Routes>
  </Router>
);


export default App;
