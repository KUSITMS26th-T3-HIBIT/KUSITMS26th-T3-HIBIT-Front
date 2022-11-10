import './App.css';
// import Navbar from './Global/Navbar/Navbar';
import Main from './Global/Main/Main';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import MatchingMain from './Matching/MatchingMain';
import ExhibitReview from './Community/ExhibitReview';
import ExhibitInfo from './ExhibitInfo/ExhibitInfo';
import Mypage from './Global/User/Mypage/Mypage';

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <div className="Navbar">
        <div className='NavContainer'>
          <div className='NavLeft'>
            <img className='Hibit_logo' width='156' height='34' src='/hibit_logo.png' onClick={() => { navigate('/') }} />
            <div className='NavLeft_menu'>
              <div className='NavItem' onClick={() => { navigate('/service') }}>서비스 소개</div>
              <div className='NavItem' onClick={() => { navigate('/match') }}>매칭</div>
              <div className='NavItem' onClick={() => { navigate('/community') }}>커뮤니티</div>
              <div className='NavItem' onClick={() => { navigate('/exhibitinfo') }}>전시회 정보</div>
            </div>
          </div>
          <div className='NavRight'>
            <div className='NavMypage' onClick={() => { navigate('/mypage') }}>마이페이지</div>
            <hr className='NavVerticalLine' />
            <div className='NavRight_icon'>
              <img className='ShareIcon' width='28' height='34' src='/share.png' onClick={() => { }} />
              <img className='ProfileIcon' width='44' height='44' src='/profileImg.png' onClick={() => { }} />
            </div>
          </div>
        </div>
      </div>

      <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/service' element={<ServiceInfo />} />
          <Route path='/match' element={<MatchingMain />} />
          <Route path='/community' element={<ExhibitReview />} />
          <Route path='/exhibitinfo' element={<ExhibitInfo />} />

          <Route path='/mypage' element={<Mypage />} />
      </Routes>


      {/* <Main></Main> */}
    </div>
  );
}
// Github branch commit test !!
export default App;
