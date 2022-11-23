import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/token";

let Login = () => {
    let navigate = useNavigate();
    let [id, setId] = useState('');
    let [pw, setPw] = useState('');

    const dispatch = useDispatch();

    return (
        <div className="LoginSection">
            <img
                className="LoginHibitIcon" 
                src="/hibit_logo_c.png"
                onClick={()=>navigate('/')}
            />
            <div className="LoginInput">
                <input className="LoginIdInput" placeholder="아이디" value={id} onChange={(e)=>{setId(e.target.value)}}/>
                <input className="LoginPwInput" type="password" placeholder="비밀번호" value={pw} onChange={(e)=>{setPw(e.target.value)}}/>
            </div>

            <div className="LoginHelper">
                <div className="LoginCheckbox">
                    <input className="LoginAuto" type="checkbox" id="autoLogin" />
                    <label htmlFor="autoLogin">로그인 상태 유지</label>
                </div>

                <div className="LoginHelp">
                    <div className="Login-findId">아이디 찾기</div>
                    <tr className="Login-tr" />
                    <div className="Login-findPw">비밀번호 찾기</div>
                    <tr className="Login-tr" />
                    <div
                        className="Login-to-signup"
                        onClick={() => {
                            navigate('/signup_agree');
                        }}
                    >회원가입</div>
                </div>
            </div>


            <img
                className="LoginButton"
                src="/LoginBtn.png"
                onClick={() => {
                    axios.post('/user/login', {
                        id: id,
                        password: pw
                    })
                    .then((res)=>{
                        localStorage.setItem('accessToken', res.data);
                        axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('accessToken')}`
                        console.log(res);
                        dispatch(login({token: res.data, isLogin: true}));
                        navigate('/');
                        window.location.reload('/');
                    })
                    .catch((err)=>{
                        console.log(err);
                        console.log(err.response.status);
                        alert('회원 정보를 다시 확인 해 주세요');
                    });

                }}
            />
        </div>
    )
}

export default Login;