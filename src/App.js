import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Login from './components/Form/login';
// import Quiz from './components/Questions/questions';
// import Questions from './components/Questions/questions';
import Success from './Pages/success/Success.jsx'
import NotFound from './Pages/NotFound/NotFound';
import TimeStamp from './components/TimeStamp/TimeStamp';
import SingleQuestions from './Pages/Questions/singlQuestion';
import RootLayout from './layout/RootLayout';
import AnimateProvider from './components/AnimateProvider/AnimatePovider';
import Apps from './apps';
import Question from './components/Questions/questions';
// import RegisterForm from './components/Form/register';
import Login from './components/Form/login'



function App() {
  return (
    <div className="App">
      <AnimateProvider>

      <Router>
        <Routes>
          <Route path="/" element = {<Login/>}/>
          <Route path="/quest" element = {<Question />}/>
          <Route path="/start" element = {<Apps />}/>
          <Route path="/finish" element={<Success/>}/>
          <Route path="/nav" element={<RootLayout/>}/>
          <Route path='/question' element={<SingleQuestions/>}/>
          <Route path="/not" element={<NotFound/>}/>
          <Route path='/time' element={<TimeStamp/>}/>
        </Routes>
      </Router>

      </AnimateProvider>


    </div>
  );
}

export default App;
