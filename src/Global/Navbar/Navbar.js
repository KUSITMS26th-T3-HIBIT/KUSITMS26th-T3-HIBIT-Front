import { Routes, Route, useNavigate } from 'react-router-dom';
import MatchingMain from '../../Matching/MatchingMain';
import ServiceInfo  from './../../ServiceInfo/ServiceInfo.js';
import ExhibitReview from '../../Community/ExhibitReview.js';
import ExhibitInfo from '../../ExhibitInfo/ExhibitInfo.js';
import Mypage from '../User/Mypage/Mypage.js';
let Navbar = () => {
    let navigate = useNavigate();

    return (
        <div className="Navbar">

            <div className='NavContainer'>
                <div className='NavLeft'>
                    <img className='Hibit_logo' width='156' height='34' src='/hibit_logo.png' onClick={() => { navigate('/') }} />
                    <div className='NavLeft_menu'>
                        <div className='NavItem' onClick={() => { navigate('/service') }}>서비스 소개</div>
                        <div className='NavItem' onClick={() => { navigate('/match') }}>매칭</div>
                        <div className='NavItem' onClick={() => { navigate('/community') }}>커뮤니티</div>
                        <div className='NavItem' onClick={()=>{navigate('/exhibitinfo')}}>전시회 정보</div>
                    </div>

                </div>
                <div className='NavRight'>
                    <div className='NavMypage' onClick={() => { navigate('/mypage') }}>마이페이지</div> 
                    <hr className='NavVerticalLine'/>
                    <div className='NavRight_icon'>
                        <img className='ShareIcon' width='28' height='34' src='/share.png' onClick={() => { }} />
                        <img className='ProfileIcon' width='44' height='44' src='/profileImg.png' onClick={() => { }} />
                    </div>
                </div>
 
            </div>

            <Routes>
                <Route path='/' element={<div>대문페이지</div>}/>
                <Route path='/service' element={<ServiceInfo/>}/>
                <Route path='/match' element={<MatchingMain/>}/>
                <Route path='/community' element={<ExhibitReview/>}/>
                <Route path='/exhibitinfo' element={<ExhibitInfo/>}/>

                <Route path='/mypage' element={<Mypage/>}/>
            </Routes>
        </div>
    )
}

export default Navbar;