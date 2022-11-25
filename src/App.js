import './App.css';
import Main from './Global/Main/Main';
import { Routes, Route} from 'react-router-dom';
import MatchingMain from './Matching/MatchingMain';
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
import EditMypage from './Global/User/Mypage/EditMypage';
import CommunityMain from './Community/CommunityMain';
import ExhibitInfoMain from './ExhibitInfo/ExhibitInfoMain';

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
          <Route path='/match' element={<MatchingMain />} />
          <Route path='/community' element={<CommunityMain />} />
          <Route path='/exhibitinfo' element={<ExhibitInfoMain />} />
          <Route path='/match/detail/:id' element={<MatchDetail/>} />
          <Route path='/match/newpost' element={<MatchNewPost/>}/>
          <Route path='/match/eval/:id' element={<MatchEvaluate/>}/>
          
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/mypage/edit' element={<EditMypage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup_agree' element={<SignupAgreement />} />
          <Route path='/signup_info' element={<SignupInfo />} />
        </Routes>
        
      </div>

    </div>
  );
}
export default App;
