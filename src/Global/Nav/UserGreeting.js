import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/token";
import Modal from "react-modal";

const UserGreeting = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('accessToken')}`

    const [modalIsOpen, setModalIsOpen] = useState(false);


    return (
        <div className="nav-user-section">
            <div className="nav-user-container">

                <div className='nav-user-left-section'>
                    <img className='nav-user-hibit-logo' src='/hibit_logo_w.png' onClick={() => { navigate('/') }} />
                    <div className='nav-user-left-menus'>
                        <div className='nav-user-item' onClick={() => {  navigate('/'); window.scrollTo(0, 2600); }}>서비스 소개</div>
                        <div 
                            className='nav-user-item' 
                            onClick={() => {navigate('/match');}}
                        >매칭</div>
                        <div className='nav-user-item' onClick={() => { navigate('/community') }}>커뮤니티</div>
                        <div className='nav-user-item' onClick={() => { navigate('/exhibitinfo') }}>전시회 정보</div>
                    </div>
                </div>

                <div className='nav-user-right-section'>
                    <div className="nav-user-right-components">
                        <div className='nav-user-mypage' onClick={() => { navigate('/mypage') }}>마이페이지</div>
                        <hr className='nav-user-vertical-line' />
                        <img className='nav-user-profile-icon' src='/profile_frame.png' onClick={() => setModalIsOpen(true)} />
                        <Modal 
                            isOpen={modalIsOpen}
                            onRequestClose={()=>setModalIsOpen(false)}
                            style={{
                                overlay: {
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: '#5E1EC7',
                                    opacity: 0.9
                                  },
                                  content: {
                                    width: '300px',
                                    height: '200px',
                                    position: 'absolute',
                                    top: '130px',
                                    left: '1400px',
                                    border: '1px solid #ccc',
                                    background: '#fff',
                                    overflow: 'auto',
                                    WebkitOverflowScrolling: 'touch',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    padding: '20px'
                                  }
                            }}
                        />
                        <img
                            className='nav-user-logout-icon'
                            src='/logout.png'
                            onClick={() => { // 로그아웃
                                localStorage.clear();
                                dispatch(login({token: null, isLogin: false}));
                                alert('로그아웃 되었습니다');
                                window.location.replace('/')
                                navigate('/');
                            }}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default UserGreeting;
// 마이페이지, 세로 바, 프로필 아이콘, 로그아웃 버튼