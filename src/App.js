import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Form/login';
// import Quiz from './components/Questions/questions';
// import Questions from './components/Questions/questions';
import { QuizProvider } from './contexts/quiz';
import Success from './Pages/success/Success.jsx'
import Navbar from './components/Navbar/Navbar';
import NotFound from './Pages/NotFound/NotFound';
import TimeStamp from './components/TimeStamp/TimeStamp';
// import Question from './Pages/Questions/Question';
import SingleQuestion from './Pages/Questions/singleQuestion';
// import Quiz from './contexts/quiz';

function App() {
  return (
    <div className="App">
      <QuizProvider>

      <Router>
        <Routes>
          <Route path="/" element = {<Login />}/>
          <Route path="/query" element={<SingleQuestion/>}/>
          <Route path="/finish" element={<Success/>}/>
          <Route path="/nav" element={<Navbar/>}/>
          <Route path="/not" element={<NotFound/>}/>
          <Route path='/time' element={<TimeStamp/>}/>
        </Routes>
      </Router>

      </QuizProvider>


    </div>
  );
}

export default App;
