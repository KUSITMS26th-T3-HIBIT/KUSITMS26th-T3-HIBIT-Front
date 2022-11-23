import './App.css';
import Main from './Global/Main/Main';
import { Routes, Route} from 'react-router-dom';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import MatchingMain from './Matching/MatchingMain';
import ExhibitReview from './Community/ExhibitReview';
import ExhibitInfo from './ExhibitInfo/ExhibitInfo';
import Mypage from './Global/User/Mypage/Mypage';
import Login from './Global/User/Login';
import SignupAgreement from './Global/User/SignupAgreement';
import SignupInfo from './Global/User/SignupInfo';
import MatchDetail from './Matching_Detail/MatchDetail';
import UserGreeting from './Global/Nav/UserGreeting';
import GuestGreeting from './Global/Nav/GuestGreeting';
import MatchNewPost from './Matching/MatchNewPost';
import MatchEvaluate from './Matching/MatchEvaluate';
import axios from 'axios';

function App() {
  const isNull = (val) => (val===undefined || val===null) ? true : false;
  let token = localStorage.getItem('accessToken');
  
  axios.defaults.baseURL = "http://54.248.93.203:8080";
  return (
    <div className="App">
      <div className='Container'>
        <div className="nav-bar">
          {isNull(token) && <GuestGreeting hasToken={!isNull(token)}/>}
          {!isNull(token) && <UserGreeting hasToken={!isNull(token)}/>}
        </div>
        <div width="0px"></div>

        {/* <div className='Footer-container'>
          <img className='footer-img' src='/footer.png' />
        </div> */}

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/service' element={<ServiceInfo />} />
          <Route path='/match' element={<MatchingMain />} />
          <Route path='/community' element={<ExhibitReview />} />
          <Route path='/exhibitinfo' element={<ExhibitInfo />} />
          <Route path='/match/detail/:id' element={<MatchDetail />} />
          <Route path='/match/newpost' element={<MatchNewPost/>}/>
          <Route path='/match/eval' element={<MatchEvaluate/>}/>
          
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup_agree' element={<SignupAgreement />} />
          <Route path='/signup_info' element={<SignupInfo />} />
        </Routes>
        
      </div>

    </div>
  );
}

export default App;
