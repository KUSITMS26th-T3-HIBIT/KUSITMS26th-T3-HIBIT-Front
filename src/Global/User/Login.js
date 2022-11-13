import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";


let Login = () => {
    let navigate = useNavigate();
    let [id, setId] = useState('');
    let [pw, setPw] = useState('');

    return (
        <div className="LoginSection">
            <img className="LoginHibitIcon" src="/hibit_logo_c.png"/>
            <div className="LoginInput">
                <input className="LoginIdInput" placeholder="아이디" value={id} onChange={(e)=>{setId(e.target.value)}}/>
                <input className="LoginPwInput" placeholder="비밀번호" value={pw} onChange={(e)=>{setPw(e.target.value)}}/>

                <div className="LoginCheckbox">
                    <input className="LoginAuto" type="checkbox" id="autoLogin" />
                    <label htmlFor="autoLogin">로그인 상태 유지</label>
                </div>
            </div>
            <button
                className="LoginButton"
                onClick={() => {
                    console.log(id, pw);
                    // axios.post('url', {id: id, pw: pw}).then(...);
                }}
            >로그인</button>
            <button 
                className="toSignUp"
                onClick={()=>{
                    navigate('/signup_agree');
                }}
            >
            회원 가입</button>
        </div>
    )
}

export default Login;