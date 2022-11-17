import axios from "axios";
import { useEffect, useState } from "react";

const exhibitStyleData = [
    {id: 0, value: "남는건 사진밖에 없지! 사진촬영파"},
    {id: 1, value: "현재가 중요해! 단순관람파"},
    {id: 2, value: "나는 이렇게 생각해! 소통관람파"},
    {id: 3, value: "관람 할 땐 관람만! 관람우선파"}
];

const myStyleData = [
    {id: 0, value: "지적인"},
    {id: 1, value: "차분한"},
    {id: 2, value: "유머있는"},
    {id: 3, value: "낙천적인"},
    {id: 4, value: "내향적인"},
    {id: 5, value: "외향적인"},
    {id: 6, value: "감상적인"},
    {id: 7, value: "상냥한"},
    {id: 8, value: "귀여운"},
    {id: 9, value: "열정적인"},
    {id: 10, value: "듬직한"},
    {id: 11, value: "개성있는"}
];

const myInterestData = [
    {id: 0, value: "드라마/영화 정주행"},
    {id: 1, value: "여행"},
    {id: 2, value: "맛집 탐방"},
    {id: 3, value: "노래방 가기"},
    {id: 4, value: "운동"},
    {id: 5, value: "댄스"},
    {id: 6, value: "자기계발"},
    {id: 7, value: "환경"},
    {id: 8, value: "독서"},
    {id: 9, value: "쇼핑"},
    {id: 10, value: "반려 동물/식물"},
    {id: 11, value: "게임"},
]

let SignupInfo = () => {
    let date = new Date().getFullYear();
    let regExp_pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/; // 비밀번호 정규표현식 : 문자, 숫자, 특수 문자 포함 8~20자

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
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [selectedGender, setSelectedGender] = useState('');

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
    }, [homePrefix, homeSuffix])

    return (
        <div className="Signup-info-container">
            <div className="Signup-info-section">
                <img className="Signup-hibit-logo" src="/hibit_logo_c.png" />

                <div className="Signup-title">기본 프로필</div>
                <div className="Signup-require-profile-container">
                    <div className="Signup-require-profile">
                        <div className="Signup-input-form">
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
                                    <div className="Signup-column">비밀번호 재입력</div>
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
                            </div>

                            <div className="Signup-birth">
                                <div className="Signup-column">생년월일</div>
                                <div className="Signup-birth-grid">
                                    <input
                                        className="Signup-birth-year"
                                        type='number'
                                        placeholder="연도(ex. 2022)"
                                        onChange={(e) => setYear(e.target.value)}
                                    />
                                    <input
                                        className="Signup-birth-month"
                                        type='number'
                                        placeholder="월"
                                        onChange={(e) => setMonth(e.target.value)}
                                    />
                                    <input
                                        className="Signup-birth-day"
                                        type='number'
                                        placeholder="일"
                                        onChange={(e) => setDay(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="Signup-home">
                                <div className="Signup-column">주소</div>
                                <select className="Signup-home-prefix" name='city' onChange={(e)=>{setHomePrefix(e.target.value)}}>
                                    <option value='전체'>전체</option>
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
                                
                                <input
                                    className="Signup-home-suffix"
                                    value={homeSuffix}
                                    placeholder="구 / 군"
                                    onChange={(e) => setHomeSuffix(e.target.value)}
                                />
                                
                            </div>

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
                                                    <img 
                                                        className="Signup-exhibit-style-img"
                                                        src={`/exhibitStyle${i+1}.png`}
                                                    />
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

                            <textarea className="Signup-introduce-input" />
                            </div>
                        </div>
                    </div>

                    <div className="Signup-button-container">
                        <button className="Signup-button"
                            onClick={() => {
                                axios.post('http://54.248.93.203:8080/user/sign-up', {
                                    id: id,
                                    password: pw,
                                    nickname: nickname,
                                    phone_number: phone,
                                    age: +date - year + 1,
                                    gender: "True",
                                    home: home,
                                    introduce: "자기소개"
                                })
                                    .then((res) => {
                                        console.log(res.data);
                                        console.log(res.status);
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