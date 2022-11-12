import axios from "axios";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";


let Login = () => {
    let navigate = useNavigate();
    let [id, setId] = useState('');
    let [pw, setPw] = useState('');

    // let [nickname, setNickname] = useState('');
    // let [phone, setPhone] = useState('');
    // let [age, setAge] = useState('');
    // let [gender, setGender] = useState('');
    // let [temperature, setTemperature] = useState(36.5);
    // let [home, setHome] = useState('');
    // let [introduce, setIntroduce] = useState('');





    return (
        <div className="LoginSection">
            <img className="LoginHibitIcon" src="/hibit_logo_c.png"/>
            <div className="LoginInput">
                <input className="LoginIdInput" placeholder="아이디" value={id} onChange={(e)=>{setId(e.target.value)}}/>
                <input className="LoginPwInput" placeholder="비밀번호" value={pw} onChange={(e)=>{setPw(e.target.value)}}/>

                {/* <input className="LoginIdInput" placeholder="닉네임" value={nickname} onChange={(e)=>{setNickname(e.target.value)}}/>
                <input className="LoginPwInput" placeholder="전화번호" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                <input className="LoginIdInput" placeholder="나이" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                <input className="LoginPwInput" placeholder="성별" value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
                <input className="LoginIdInput" placeholder="거주지" value={home} onChange={(e)=>{setHome(e.target.value)}}/>
                <input className="LoginPwInput" placeholder="자기소개" value={introduce} onChange={(e)=>{setIntroduce(e.target.value)}}/>
    

                <button
                    onClick={()=>{
                        axios.post('http://54.248.93.203:8080/user/sign-up', {
                            id: id,
                            password: pw,
                            nickname: nickname,
                            phone_number: phone,
                            age: age,
                            gender: "True",
                            home: home,
                            introduce: introduce
                        })
                            .then((res)=>console.log(res.data))
                            .catch((err)=>console.log(err))
                    }}    
                >누르면 데이터 post 요청</button> */}



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