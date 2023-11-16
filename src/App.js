import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-bootstrap/Button';
import Login from './Components/Login';
import BasePage from './Components/BasePage';
import TablePage from './Components/TablePage';
import CardsPage from './Components/CardsPage';
import RegisterPage from './Components/RegisterPage';
import ForgetPasswordPage from './Components/ForgetPasswordPage';
import ChartsPage from './Components/ChartsPage';
import ErrorPage from './Components/ErrorPage';
import BlankPage from './Components/BlankPage';
import ColorsPage from './Components/ColorsPage';
import BordersPage from './Components/BordersPage';
import AnimationsPage from './Components/AnimationsPage';
import Others from './Components/OtherPage';
import ButtonsPage from './Components/ButtonsPage';
import DashBoardPage from './Components/DashBoardPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/' element={<BasePage />}>
          <Route path='dashboard' element={<DashBoardPage />} />
          <Route path='charts' element={<ChartsPage />} />
          <Route path='cards' element={<CardsPage />} />
          <Route path='colors' element={<ColorsPage />} />
          <Route path='borders' element={<BordersPage />} />
          <Route path='animations' element={<AnimationsPage />} />
          <Route path='others' element={<Others />} />
          <Route path='buttons' element={<ButtonsPage />} />
          <Route path='table' element={<TablePage />} />
          <Route path='error-page' element={<ErrorPage />} />
          <Route path='blank-page' element={<BlankPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgot-password' element={<ForgetPasswordPage />} />
      </Routes>

    </div>
  );
}

export default App;