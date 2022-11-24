import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let EditMypage = () => {
    let regExp_pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/; // 비밀번호 정규표현식 : 문자, 숫자, 특수 문자 포함 8~20자
    let navigate = useNavigate();
    /*기본 프로필*/
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [repw, setRepw] = useState('');
    const [isPw, setIsPw] = useState(false);
    const [isRePw, setIsRePw] = useState(false); // 비밀번호 입력 - 재입력 일치 여부
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [homePrefix, setHomePrefix] = useState('');
    const [homeSuffix, setHomeSuffix] = useState('');
    const [home, setHome] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [gender, setGender] = useState(true);
    const [day, setDay] = useState('');
    const [email, setEmail] = useState('');
    const [emailPrefix, setEmailPrefix] = useState('');
    const [emailSuffix, setEmailSuffix] = useState('@gmail.com');
    const [phone, setPhone] = useState('');
    const [phoneAuth, setPhoneAuth] = useState(''); // 휴대폰 인증 번호
    const [selectedGender, setSelectedGender] = useState('');
    const [introduce, setIntroduce] = useState('');

    /*추가 프로필*/
    const [exhibitStyle, setExhibitStyle] = useState(-1); // 전시 관람 스타일
    const [myStyle, setMyStyle] = useState([]);
    const [myInterest, setMyInterest] = useState([]);

    useEffect(()=>{
        if(pw.match(regExp_pw) === null) // 정규표현식과 불일치
            setIsPw(false);
        else 
            setIsPw(true);
    }, [pw]);

    useEffect(()=>{
        if(pw===repw) setIsRePw(true); // 비밀번호 <-> 비밀번호 재입력 일치
        else setIsRePw(false);
    }, [pw, repw]);

    useEffect(()=>{
        setEmail(emailPrefix + '@' + emailSuffix); //  이메일 (prefix) + @ + (suffix)
    }, [emailPrefix, emailSuffix]);

    useEffect(()=>{
        setHome(homePrefix + " " + homeSuffix); // 주소 (시/도) + (구/군)
    }, [homePrefix, homeSuffix]);



    return (
        <div className="mypage-edit-container">
            <div className="mypage-edit-section">

                <div className="mypage-edit-img-area">
                    <img
                        className="mypage-info-img"
                        src="/myprofile.png"
                    />
                    <img
                        className="mypage-info-edit"
                        src="/myprofile-edit.png"
                    />
                </div>



                <div className="mypage-edit-require-profile-container">
                    <div className="mypage-edit-require-profile-title">기본 프로필</div>
                    <div className="mypage-edit-require-profile">
                        <div className="mypage-edit-require-id">
                            <div className="mypage-edit-require-column">아이디</div>
                            <div className="mypage-edit-require-value-id">

                            </div>
                        </div>
                    </div>
                </div>



                <div className="mypage-edit-optional-profile-container">

                </div>
            </div>
        </div>
    )
}

export default EditMypage;