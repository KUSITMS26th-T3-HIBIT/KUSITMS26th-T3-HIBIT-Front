import axios from "axios";
import { useEffect, useState } from "react";

const exhibitStyleData = [
    {id: 0, value: "남는건 사진밖에 없지! 사진촬영파", selected: false},
    {id: 1, value: "현재가 중요해! 단순관람파", selected: false},
    {id: 2, value: "나는 이렇게 생각해! 소통관람파", selected: false},
    {id: 3, value: "관람 할 땐 관람만, 감상은 끝나고! 관람우선파", selected: false}
];

const myStyleData = [
    {id: 0, value: "지적인", selected: false},
    {id: 1, value: "차분한", selected: false},
    {id: 2, value: "유머있는", selected: false},
    {id: 3, value: "낙천적인", selected: false},
    {id: 4, value: "내향적인", selected: false},
    {id: 5, value: "외향적인", selected: false},
    {id: 6, value: "감상적인", selected: false},
    {id: 7, value: "상냥한", selected: false},
    {id: 8, value: "귀여운", selected: false},
    {id: 9, value: "열정적인", selected: false},
    {id: 10, value: "듬직한", selected: false},
    {id: 11, value: "개성있는", selected: false}
];

let SignupInfo = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [repw, setRepw] = useState('');
    const [isValidPw, setIsValidPw] = useState(false); // 비밀번호 입력 - 재입력 일치 여부
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
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

    const [selectedExhibitStyle, setSelectedExhibitStyle] = useState(new Array(4).fill(false));
    const [exButtonActive, setExButtonActive] = useState('');
    const [selectedMyStyle, setSelectedMyStyle] = useState(new Array(12).fill(false));

    const onSelectExhibitStyle = (e) => {
        setSelectedExhibitStyle(e.target.value);
    }

    const onSelectMyStyle = (e) => {
        setSelectedMyStyle(e.target.value);
    }

    useEffect(()=>{
        if(pw === repw) {setIsValidPw(true); console.log('true!!')};
    }, [pw, repw]);

    useEffect(()=>{
        setEmail(emailPrefix + emailSuffix);
    }, [emailPrefix, emailSuffix]);

    return (
        <div className="SignupInfoSection">
            <img className="SignupHibitLogo" src="/hibit_logo_c.png" />

            <div>기본 프로필</div>
            <div className="SignupRequireProfile">
                <div className="SignupInputForm">
                    <div className="SignupNickname">
                        <div>닉네임</div>
                        <input
                            className="SignupNicknameInput"
                            value={nickname}
                            placeholder="닉네임 입력 (6~20자)"
                            onChange={(e) => setNickname(e.target.value)}
                        />
                        <button
                            className="SignupNickNameCheck"
                            onClick={() => {
                                console.log('nickname', nickname);
                                // 중복 검사 post 요청
                            }}
                        >닉네임 중복 확인</button>
                    </div>

                    <div className="SignupId">
                        <div>아이디</div>
                        <div className="SignupIdRow">
                            <input
                                className="SignupIdInput"
                                value={id}
                                placeholder="아이디 입력 (6~20자)"
                                onChange={(e) => { (setId(e.target.value)) }}
                            />
                            <button
                                className="SignupIdCheck"
                                onClick={() => {
                                    console.log('id', id);
                                    // 중복 검사 post 요청
                                }}
                            >아이디 중복 확인</button>
                        </div>
                    </div>

                    <div className="SignupPwRow">
                        <div>비밀번호</div>
                        <input
                            className="SignupPwInput"
                            type="password"
                            value={pw}
                            placeholder="비밀번호 입력 (문자, 숫자, 특수 문자 포함 8~20자)"
                            onChange={(e) => {
                                console.log('pw', e.target.value);
                                // e.target.value에 대한 정규표현식 : 문자, 숫자, 특수 문자 포함 8~20자
                                setPw(e.target.value);
                            }}
                        />
                        <input
                            className="SignupPwReInput"
                            type="password"
                            value={repw}
                            placeholder="비밀번호 재입력 (문자, 숫자, 특수 문자 포함 8~20자)"
                            onChange={(e) => {
                                console.log('repw', e.target.value);
                                setRepw(e.target.value);
                            }}
                        />
                    </div>

                    <div className="SignupName">
                        <div>이름</div>
                        <input
                            className="SignupNameInput"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div
                        className="SignupGender"
                        onChange={(e) => setSelectedGender(e.target.value)}>
                        <div>성별</div>
                        <select
                            className="SignupSelectedGender"
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

                    <div className="SignupBirth">
                        <div>생년월일</div>
                        <input
                            className="SignupBirthYear"
                            type='number'
                            placeholder="연도(ex. 2022)"
                            onChange={(e) => setYear(e.target.value)}
                        />
                        <input
                            className="SignupBirthMonth"
                            type='number'
                            placeholder="월"
                            onChange={(e) => setMonth(e.target.value)}
                        />
                        <input
                            className="SignupBirthDay"
                            type='number'
                            placeholder="일"
                            onChange={(e) => setDay(e.target.value)}
                        />
                    </div>

                    <div className="SignupHome">
                        <div>주소</div>
                        <input
                            className="SignupHomeInput"
                            value={home}
                            onChange={(e) => setHome(e.target.value)}
                        />
                    </div>

                    <div className="SignupEmail">
                        <div>이메일</div>
                        <div>
                            <input
                                className="SignupEmailInput"
                                placeholder="이메일 주소"
                                value={emailPrefix}
                                onChange={(e) => { setEmailPrefix(e.target.value); console.log(emailPrefix) }}
                            />
                            <b> @ </b>
                            <select
                                className="SignupEmailAddrSelect"
                                defaultValue='@gmail.com'
                                onChange={(e) => {
                                    setEmailSuffix(e.target.value);
                                    console.log(e.target.value);
                                }}
                            >
                                <option key='gmail' value='@gmail.com'>gmail.com</option>
                                <option key='naver' value='@naver.com'>naver.com</option>
                            </select>
                        </div>
                    </div>

                    <div className="SignupPhone">
                        <div>휴대폰 번호</div>
                        <div className="SignupPhoneRow">
                            <input
                                className="SignupPhoneInput"
                                placeholder="휴대폰 번호 입력('-'제외 11자리 입력)"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <button
                                className="SignupPhoneValidate"
                                onClick={() => {
                                    alert('인증 번호 전송 완료')
                                }}
                            >인증번호 받기</button>
                        </div>
                        <input
                            className="SignupPhoneAuthInput"
                            placeholder="인증번호 입력"
                            value={phoneAuth}
                            onChange={(e) => setPhoneAuth(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div>추가 프로필</div>

            <div className="SignupOptionalProfile">
                <div className="SignupExhibitStyle">
                    <div>본인의 전시 관람 스타일을 골라주세요</div>
                    <div className="SignupExhibitStyleList">
                        {
                            exhibitStyleData.map((d, i)=>{
                                return (
                                    <button 
                                        className={"SignupExhibitStlyeItem" + (d.selected ? " active" : "")}
                                        onClick={()=>{
                                            let copy = [...selectedExhibitStyle];
                                            copy[i] = !copy[i];
                                            setSelectedExhibitStyle(copy);
                                            console.log(selectedExhibitStyle);
                                            
                                        }}
                                    >{exhibitStyleData[i].value}</button>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="SignupMyStyle">
                    <div>본인의 성격을 골라주세요</div>
                    <div className="SignupMyStyleList">                        
                        {
                            myStyleData.map((d, i)=>{
                                return (
                                    <button 
                                        className={"SignupMyStyleItem" + (d.selected ? " active" : "")}
                                        onClick={()=>{
                                            let copy = [...selectedMyStyle];
                                            copy[i] = !copy[i];
                                            setSelectedMyStyle(copy);
                                            console.log(selectedMyStyle);
                                            
                                        }}
                                    >{myStyleData[i].value}</button>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="SignupInterest">
                    <div>본인의 관심사를 작성해주세요</div>
                    <textarea className="SignupInterestInput" />
                </div>
                <div className="SignupIntroduce">
                    <div>메이트에게 자신을 소개해주세요</div>
                    <textarea className="SignupIntroduceInput" />
                </div>
            </div>

            <button className="SignupButton"
                onClick={() => {
                    axios.post('http://54.248.93.203:8080/user/sign-up/', {
                        id: id,
                        password: pw,
                        nickname: nickname,
                        phone_number: phone,
                        age: 2022 - year,
                        gender: gender,
                        home: home,
                        introduce: "자기소개"
                    })
                        .then((res) => {
                            console.log(res.data);
                            console.log(res.status);
                            throw new Error('네트워크 문제?')
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }}
            >가입하기</button>

            <div>{selectedExhibitStyle}</div>
        </div>

    )
}

export default SignupInfo;