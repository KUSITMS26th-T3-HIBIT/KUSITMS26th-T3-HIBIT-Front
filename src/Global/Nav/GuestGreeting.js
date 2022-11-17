import { useNavigate } from "react-router-dom";

//로그인 되지 않은 상태
const GuestGreeting = ({hasToken}) => {
    let navigate = useNavigate();
    return (
        <div className="nav-guest-section">
            <div className='nav-guest-container'>

                <div className='nav-guest-left-section'>
                    <img className='nav-guest-hibit-logo' src='/hibit_logo_w.png' onClick={() => { navigate('/') }} />
                    <div className='nav-guest-left-menus'>
                        <div className='nav-guest-item' onClick={() => { navigate('/service') }}>서비스 소개</div>
                        <div 
                            className='nav-guest-item'
                            onClick={() => {
                                if(hasToken) navigate('/match');
                                else {
                                    alert('로그인이 필요한 서비스입니다');
                                    navigate('login');
                                }
                            }}
                        >매칭</div>
                        <div className='nav-guest-item' onClick={() => { navigate('/community') }}>커뮤니티</div>
                        <div className='nav-guest-item' onClick={() => { navigate('/exhibitinfo') }}>전시회 정보</div>
                    </div>
                </div>

                <div className="nav-guest-right-section">
                    <img className='nav-guest-share-icon' src='/share.png' onClick={() => { }} />
                    <img className='nav-guest-login-btn' src='/login.png' onClick={() => { navigate('/login'); }} />
                </div>
            </div>
        </div>

    )
}

export default GuestGreeting;
// 공유 아이콘, 로그인 버튼