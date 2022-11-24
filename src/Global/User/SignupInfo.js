import axios from "axios";
import { useEffect, useState } from "react";
import exhibitStyleData from "../Data/exhibit_style_data"
import myStyleData from "../Data/my_style_data"
import myInterestData from "../Data/my_interest_data"
import { useNavigate } from "react-router-dom";

let SignupInfo = () => {
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
    }, [pw, repw])

    useEffect(()=>{
        setEmail(emailPrefix + '@' + emailSuffix); //  이메일 (prefix) + @ + (suffix)
    }, [emailPrefix, emailSuffix]);

    useEffect(()=>{
        setHome(homePrefix + " " + homeSuffix); // 주소 (시/도) + (구/군)
    }, [homePrefix, homeSuffix]);

    return (
        <div className="Signup-info-container">
            <div className="Signup-info-header">
                <div className="Signup-info-header-title">
                    회원 정보 입력
                </div>
            </div>
            <div className="Signup-info-section">
                <div className="Signup-info-profile-img">
                    <img
                        className="Signup-info-img"
                        src="/myprofile.png"
                    />
                    <img
                        className="Signup-info-add"
                        src="/AddImgBtn.png"
                        onClick={() => navigate()}
                    />
                </div>

                <div className="Signup-require-profile-container">
                    <div className="Signup-title-require">기본 프로필</div>
                    <div className="Signup-require-profile">
                        <div className="Signup-input-form">
                            

                            <div className="Signup-id">
                                <div className="Signup-column">아이디</div>
                                <input
                                    className="Signup-id-input"
                                    value={id}
                                    placeholder="아이디 입력 (6~20자)"
                                    onChange={(e) => setId(e.target.value)}
                                />
                                <img
                                    className="Signup-id-check"
                                    src="/duplicate.png"
                                    onClick={() => {
                                        console.log('id', id);
                                        axios.get(`user/sign-up/${id}`, {
                                            params: {id: id}
                                        })
                                        .then((res)=>{
                                            console.log('response', res);
                                            console.log('data', res.data);
                                            console.log('status', res.status);
                                            console.log('result', res.data.result)
                                            if(res.data.result === 'FAIL'){
                                                alert('이미 존재하는 아이디이거나, 유효하지 않은 아이디입니다.');
                                            }
                                            else{
                                                alert('사용 가능한 아이디입니다.');
                                            }
                                        })
                                        .catch((err)=>{
                                            console.log('err', err);
                                            console.log('status', err.response.status);
                                            alert('서버와 통신이 원활하지 않습니다.\n잠시 후에 시도 해 주세요.');
                                        });
                                        // 중복 검사 get 요청
                                    }}
                                />
                                
                            </div>

                            <hr className="Signup-hr"/>

                            <div className="Signup-pw">
                                <div className="Signup-pw-row">
                                    <div className="Signup-column">비밀번호</div>
                                    <div className="Signup-row-col">
                                        <input
                                            className="Signup-pw-input"
                                            type="password"
                                            value={pw}
                                            placeholder="비밀번호 입력 (문자, 숫자, 특수 문자 포함 8~20자)"
                                            onChange={(e) => {
                                                console.log('pw', e.target.value);
                                                setPw(e.target.value);
                                            }}
                                        />
                                        {
                                            !isPw && <div>비밀번호는 문자, 숫자, 특수문자를 포함 8~20자여야 합니다.</div>
                                        }
                                    </div>
                                    
                                </div>
                                <div className="Signup-pw-re-row">
                                    <div className="Signup-column"></div>
                                    <div className="Signup-row-col">
                                        <input
                                            className="Signup-pw-re-input"
                                            type="password"
                                            value={repw}
                                            placeholder="비밀번호 재입력 (문자, 숫자, 특수 문자 포함 8~20자)"
                                            onChange={(e) => {
                                                console.log('repw', e.target.value);
                                                setRepw(e.target.value);
                                            }}
                                        />
                                        {
                                            repw.length > 0 && !isRePw && <div className="Signup-pw-not-equal">비밀번호가 일치하지 않습니다.</div>
                                        }
                                    </div>
                                </div>
                            </div>

                            <hr className="Signup-hr"/>

                            <div className="Signup-name-gender-row">
                                <div className="Signup-name">
                                    <div className="Signup-column">이름</div>
                                    <input
                                        className="Signup-name-input"
                                        value={name}
                                        placeholder="이름 입력"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                
                            </div>

                            <hr className="Signup-hr"/>

                            <div className="Signup-nickname">
                                <div className="Signup-column">닉네임</div>
                                <input
                                    className="Signup-nickname-input"
                                    value={nickname}
                                    placeholder="닉네임 입력 (6~20자)"
                                    onChange={(e) => setNickname(e.target.value)}
                                />
                                <img
                                    className="Signup-nickname-check"
                                    src="/duplicate.png"
                                    onClick={() => {
                                        console.log('nickname', nickname);
                                        axios.get(`user/sign-up/exists/${nickname}`, {
                                            params: {nickname: nickname}
                                        })
                                        .then((res)=>{
                                            console.log('response', res);
                                            console.log('data', res.data);
                                            console.log('status', res.data.result);
                                            if(res.data.result === 'FAIL'){
                                                alert('이미 존재하는 닉네임이거나, 유효하지 않은 닉네임입니다.');
                                            }
                                            else{
                                                alert('사용 가능한 닉네임입니다.');
                                            }
                                        })
                                        .catch((err)=>{
                                            console.log('err', err);
                                            console.log('status', err.response.status);
                                            alert('서버와 통신이 원활하지 않습니다.\n잠시 후에 시도 해 주세요.');
                                        });
                                        // 중복 검사 get 요청
                                    }}
                                />
                            </div>
                            
                            <hr className="Signup-hr"/>

                            <div
                                className="Signup-gender"
                                onChange={(e) => setSelectedGender(e.target.value)}>
                                <div className="Signup-column">성별</div>
                                <select
                                    className="Signup-selected-gender"
                                    onChange={(e) => {
                                        if (e.target.value === 'male')
                                            setGender(true);
                                        else
                                            setGender(false);
                                    }}
                                >
                                    <option key='male' value='male'>남자</option>
                                    <option key='female' value='female'>여자</option>
                                </select>
                            </div>

                            <hr className="Signup-hr"/>

                            <div className="Signup-birth">
                                <div className="Signup-column">생년월일</div>
                                <div className="Signup-birth-grid">
                                    <input
                                        className="Signup-birth-year"
                                        type='number'
                                        placeholder="년 (4자)"
                                        onChange={(e) => setYear(e.target.value)}
                                    />
                                    <input
                                        className="Signup-birth-month"
                                        type='number'
                                        placeholder="월 (2자)"
                                        onChange={(e) => setMonth(e.target.value)}
                                    />
                                    <input
                                        className="Signup-birth-day"
                                        type='number'
                                        placeholder="일 (2자)"
                                        onChange={(e) => setDay(e.target.value)}
                                    />
                                </div>
                            </div>

                            <hr className="Signup-hr"/>

                            <div className="Signup-home">
                                <div className="Signup-column">주소</div>
                                <select className="Signup-home-prefix" name='city' onChange={(e)=>{setHomePrefix(e.target.value)}}>
                                    <option value=''>시/도</option> 
                                    <option value='서울'>서울특별시</option>
                                    <option value='부산'>부산광역시</option>
                                    <option value='대구'>대구광역시</option>
                                    <option value='인천'>인천광역시</option>
                                    <option value='광주'>광주광역시</option>
                                    <option value='대전'>대전광역시</option>
                                    <option value='울산'>울산광역시</option>
                                    <option value='경기'>경기도</option>
                                    <option value='강원'>강원도</option>
                                    <option value='충북'>충청북도</option>
                                    <option value='충남'>충청남도</option>
                                    <option value='전북'>전라북도</option>
                                    <option value='전남'>전라남도</option>
                                    <option value='경북'>경상북도</option>
                                    <option value='경남'>경상남도</option>
                                    <option value='제주'>제주도</option>
                                </select>
                                <select className="Signup-home-suffix" name='gu' onChange={(e)=>{setHomeSuffix(e.target.value)}}>
                                    <option value=''>시/군/구</option>
                                    <option value='강남구'>강남구</option>
                                    <option value='강동구'>강동구</option>
                                    <option value='강서구'>강서구</option>
                                    <option value='강북구'>강북구</option>
                                    <option value='관악구'>관악구</option>
                                    <option value='광진구'>광진구</option>
                                    <option value='구로구'>구로구</option>
                                    <option value='금천구'>금천구</option>
                                    <option value='노원구'>노원구</option>
                                    <option value='동대문구'>동대문구</option>
                                    <option value='도봉구'>도봉구</option>
                                    <option value='동작구'>동작구</option>
                                    <option value='마포구'>마포구</option>
                                    <option value='서대문구'>서대문구</option>
                                    <option value='성동구'>성동구</option>
                                    <option value='성북구'>성북구</option>
                                    <option value='서초구'>서초구</option>
                                    <option value='송파구'>송파구</option>
                                    <option value='영등포구'>영등포구</option>
                                    <option value='용산구'>용산구</option>
                                    <option value='양천구'>양천구</option>
                                    <option value='은평구'>은평구</option>
                                    <option value='종로구'>종로구</option>
                                    <option value='중구'>중구</option>
                                    <option value='중랑구'>중랑구</option>
                                </select>
                                
                            </div>

                            <hr className="Signup-hr"/>

                            <div className="Signup-email">
                                <div className="Signup-column">이메일</div>
                                <div>
                                    <input
                                        className="Signup-email-input"
                                        placeholder="이메일 주소"
                                        value={emailPrefix}
                                        onChange={(e) => setEmailPrefix(e.target.value)}
                                    />
                                    <b className="Signup-at-symbol"> @ </b>
                                    <select
                                        className="Signup-email-addr-select"
                                        defaultValue='@gmail.com'
                                        onChange={(e) => setEmailSuffix(e.target.value)}
                                    >
                                        <option key='gmail' value='@gmail.com'>gmail.com</option>
                                        <option key='naver' value='@naver.com'>naver.com</option>
                                    </select>
                                </div>
                            </div>

                            <hr className="Signup-hr"/>

                            <div className="Signup-phone">
                                <div className="Signup-column">휴대폰 번호</div>
                                    <input
                                        className="Signup-phone-input"
                                        placeholder="휴대폰 번호 입력('-'제외 11자리 입력)"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                            </div>
                            <div className="Signup-phone-auth">
                                <div className="Signup-column">{" "}</div>
                                <div className="Signup-phone-auth-row">
                                    <input
                                        className="Signup-phone-auth-input"
                                        placeholder="인증번호"
                                        value={phoneAuth}
                                        onChange={(e) => setPhoneAuth(e.target.value)}
                                    />
                                    <img
                                        className="Signup-phone-validate"
                                        src="/phoneAuth.png"
                                        onClick={() => {
                                            alert('인증 번호 전송 완료')
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="Signup-optional-profile-container">
                    <div className="Signup-optianal-title">추가 프로필</div>
                    <div className="Signup-optional-profile">

                        <div className="Signup-exhibit-style">
                            <div className="Signup-optional-column">본인의 전시 관람 스타일을 골라주세요.</div>
                            <div className="Signup-exhibit-style-list-container">
                                <div className="Signup-exhibit-style-list">
                                    {
                                        exhibitStyleData.map((d, i) => {
                                            return (
                                                <button
                                                    className={`Signup-exhibit-stlye-item${(i === exhibitStyle ? "Active" : "")}`}
                                                    onClick={() => {
                                                        setExhibitStyle(i);
                                                    }}
                                                >{exhibitStyleData[i].value}
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>

                        <div className="Signup-my-style">
                            <div className="Signup-optional-column">본인의 성격을 골라주세요. (최대 3개)</div>
                            <div className="Signup-my-style-list-container">
                                <div className="Signup-my-style-list">
                                    {
                                        myStyleData.map((d, i) => {
                                            return (
                                                <button
                                                    className={`Signup-my-style-item${(myStyle.includes(i)) ? "Active" : ""}`}
                                                    onClick={() => {
                                                        let copy = [...myStyle];
                                                        if(myStyle.length > 2){ 
                                                            if(copy.includes(i)) {
                                                                copy = myStyle.filter((element)=>{
                                                                    console.log(element);
                                                                    return element !== i;
                                                                });
                                                                setMyStyle(copy);
                                                            }
                                                        }
                                                        else{
                                                            if(copy.includes(i)) {
                                                                copy = myStyle.filter((element)=>{
                                                                    console.log(element);
                                                                    return element !== i;
                                                                });
                                                                setMyStyle(copy);
                                                            }
                                                            else setMyStyle([...myStyle, i]);
                                                            
                                                        }
                                                        console.log(myStyle);
                                                    }}
                                                >{myStyleData[i].value}</button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="Signup-interest">
                            <div className="Signup-optional-column">본인의 관심사(취미)를 작성해주세요. (최대 3개)</div>
                            <div className="Signup-interest-list-container">
                                <div className="Signup-interest-list">
                                {
                                        myInterestData.map((d, i) => {
                                            return (
                                                <button
                                                    className={`Signup-interest-item${(myInterest.includes(i)) ? "Active" : ""}`}
                                                    onClick={() => {
                                                        let copy = [...myInterest];
                                                        if(myInterest.length > 2){ 
                                                            if(copy.includes(i)) {
                                                                copy = myInterest.filter((element)=>{
                                                                    console.log(element);
                                                                    return element !== i;
                                                                });
                                                                setMyInterest(copy);
                                                            }
                                                        }
                                                        else{
                                                            if(copy.includes(i)) {
                                                                copy = myInterest.filter((element)=>{
                                                                    console.log(element);
                                                                    return element !== i;
                                                                });
                                                                setMyInterest(copy);
                                                            }
                                                            else setMyInterest([...myInterest, i]);
                                                            
                                                        }
                                                    }}
                                                >{myInterestData[i].value}</button>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            
                        </div>
                        <div className="Signup-introduce">
                            <div className="Signup-optional-column">메이트에게 자신을 소개해주세요</div>
                            <div className="Signup-introduce-container">

                            <textarea className="Signup-introduce-input" value={introduce} onChange={(e)=>setIntroduce(e.target.value)}/>
                            </div>
                        </div>
                    </div>

                    <div className="Signup-button-container">
                        <button className="Signup-button"
                            onClick={() => {
                                console.log('id', id);
                                console.log('password', pw);
                                console.log('nickname', nickname);
                                console.log('phone_number', phone);
                                console.log('birth', year + month + day);
                                console.log('gender', gender);
                                console.log('home', home);
                                console.log('introduce', introduce);
                                console.log('style', exhibitStyle);
                                console.log('personality', myStyle);
                                console.log('hobby', myInterest);

                                axios.post('http://54.248.93.203:8080/user/sign-up', {
                                    id: id,
                                    password: pw,
                                    nickname: nickname,
                                    name: name,
                                    phone_number: phone,
                                    birth: year + month + day,
                                    gender: gender,
                                    home: home,
                                    email: email,
                                    introduce: introduce,
                                    style: exhibitStyle,
                                    personality: myStyle,
                                    hobby: myInterest
                                })
                                    .then((res) => {
                                        console.log(res.data);
                                        console.log(res.status);
                                        alert("회원가입이 완료되었습니다.");
                                        navigate('/');
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    })
                            }}
                        >가입하기</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SignupInfo;