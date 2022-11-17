import './App.css';
// import Navbar from './Global/Navbar/Navbar';
import Main from './Global/Main/Main';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import MatchingMain from './Matching/MatchingMain';
import ExhibitReview from './Community/ExhibitReview';
import ExhibitInfo from './ExhibitInfo/ExhibitInfo';
import Mypage from './Global/User/Mypage/Mypage';
import { useEffect, useState } from 'react';
import Login from './Global/User/Login';
import SignupAgreement from './Global/User/SignupAgreement';
import SignupInfo from './Global/User/SignupInfo';
import CreateMatch from './Matching/Match/CreateMatch';
import MatchDetail from './Matching_Detail/MatchDetail';

function App() {
  let navigate = useNavigate();
  let [isLogin, setIsLogin] = useState(false);
  let ACCESS_TOKEN = localStorage.getItem('accessToken');
  console.log(ACCESS_TOKEN)
  if(ACCESS_TOKEN === null) {setIsLogin(false);}
  // else {setIsLogin(true);}

  useEffect(()=>{
    if(ACCESS_TOKEN===null) setIsLogin(false);
    else setIsLogin(true);
  }, [ACCESS_TOKEN])

  return (
    <div className="App">
      <div className='Container'>
        <div className="Navbar">
          <div className='NavContainer'>
            <div className='NavLeft'>
              <img className='Hibit_logo' src='/hibit_logo_w.png' onClick={() => { navigate('/') }} />
              <div className='NavLeft_menu'>
                <div className='NavItem' onClick={() => { navigate('/service') }}>서비스 소개</div>
                <div className='NavItem' onClick={() => { navigate('/match') }}>매칭</div>
                <div className='NavItem' onClick={() => { navigate('/community') }}>커뮤니티</div>
                <div className='NavItem' onClick={() => { navigate('/exhibitinfo') }}>전시회 정보</div>
              </div>
            </div>
            <div className='NavRight'>
              {
                isLogin && <div className='NavMypage' onClick={() => { navigate('/mypage') }}>마이페이지</div>
              }
              {
                isLogin && <hr className='NavVerticalLine' />
              }
              <div className='NavRight_icon'>
                <img className='ShareIcon' width='28' height='34' src='/share.png' onClick={() => { }} />
                {
                  isLogin && <img className='ProfileIcon' width='44' height='44' src='/profileImg.png' onClick={() => { }} />
                }
                {
                  !isLogin &&
                  <img
                    className='LoginIcon'
                    src='/login.png'
                    onClick={() => { navigate('/login'); setIsLogin(!isLogin) }}
                  />
                }
                {
                  isLogin &&
                  <img
                    className='LogoutIcon'
                    src='/logout.png'
                    onClick={() => {
                      setIsLogin(!isLogin);
                      navigate('/');
                    }}
                  />
                }
              </div>
            </div>
          </div>
        </div>

        <div className='Footer-container'>
          <img className='footer-img' src='/footer.png' />
        </div>

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/service' element={<ServiceInfo />} />
          <Route path='/match' element={<MatchingMain />} />
          <Route path='/match/publish' element={<CreateMatch />} />
          <Route path='/community' element={<ExhibitReview />} />
          <Route path='/exhibitinfo' element={<ExhibitInfo />} />
          <Route path='/match/detail' element={<MatchDetail />} />

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
