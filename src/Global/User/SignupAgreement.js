import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { privacy, provision, marketing } from '../Data/signup_agreement_data'
let tmpdata = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

let SignupAgreement = () => {
    let navigate = useNavigate();
    const [allCheck, setAllCheck] = useState(false); // 모두 체크
    const [provisionCheck, setprovisionCheck] = useState(false); // 필수
    const [privacyCheck, setprivacyCheck] = useState(false); // 필수
    const [marketingCheck, setMarketingCheck] = useState(false); // 선택
    const [snsCheck, setSnsCheck] = useState(false); // 선택
    const [emailCheck, setEmailCheck] = useState(false); // 선택
    const [isVal, setIsVal] = useState(false);

    const allCheckEvent = () => {
        if (!allCheck) { setAllCheck(true); setprovisionCheck(true); setprivacyCheck(true); setMarketingCheck(true); setSnsCheck(true); setEmailCheck(true);} 
        else { setAllCheck(false); setprovisionCheck(false); setprivacyCheck(false); setMarketingCheck(false); setSnsCheck(false); setEmailCheck(false);}
    };

    const provisionCheckEvent = () => {
        if (!provisionCheck) setprovisionCheck(true);
        else setprovisionCheck(false);
    };

    const privacyCheckEvent = () => {
        if (!privacyCheck) setprivacyCheck(true);
        else setprivacyCheck(false);
    };

    const marketingCheckEvent = () => {
        if (!marketingCheck) setMarketingCheck(true);
        else setMarketingCheck(false);
    };

    const snsCheckEvent = () => {
        if(!snsCheck) setSnsCheck(true);
        else setSnsCheck(false);
    }

    const emailCheckEvent = () => {
        if(!emailCheck) setEmailCheck(true);
        else setEmailCheck(false);
    }

    useEffect(()=>{
        if(provisionCheck && privacyCheck) setIsVal(true);
        else setIsVal(false);
    }, [provisionCheck, privacyCheck])

    useEffect(() => {
        if (provisionCheck === true && privacyCheck === true && marketingCheck === true && snsCheck === true && emailCheck === true) setAllCheck(true);
        else setAllCheck(false); 
    }, [provisionCheck, privacyCheck, marketingCheck, snsCheck, emailCheck]);

    return (
        <div className="SignupAgreeSection">
            <img className="SignupHibitLogo" src="/hibit_logo_c.png" />
            <div className="SignupAgreeComponents">
                <div className="SignupAgreeAll">
                    <input type="checkbox" id="all" checked={allCheck} onChange={allCheckEvent} />
                    <label htmlFor="all-check">히빗 이용약관, 개인정보 수집 및 이용, 마케팅 활용 및 광고 수신(선택), SMS 수신(선택), 이메일 수신(선택)에 <strong>모두 동의</strong>합니다.</label>
                </div>
                <div className="SignupProvision">
                    <input type="checkbox" id="provision" checked={provisionCheck} onChange={provisionCheckEvent}/>
                    <label htmlFor="provision">히빗 이용약관 동의 <span>(필수)</span></label>
                    <textarea className="Signup-contents" defaultValue={provision} disabled></textarea>
                </div>
                
                <div className="SignupPrivacy">
                    <input type="checkbox" id="privacy" checked={privacyCheck} onChange={privacyCheckEvent}/>
                    <label htmlFor="privacy">개인정보 수집 및 이용 동의 <span>(필수)</span></label>
                    <textarea className="Signup-contents" defaultValue={privacy} disabled></textarea>
                </div>
                
                <div className="SignupMarketing">
                    <input type="checkbox" id="marketing" checked={marketingCheck} onChange={marketingCheckEvent}/>
                    <label htmlFor="marketing">마케팅 이용 동의 <span>(선택)</span></label>
                    <textarea className="Signup-contents" defaultValue={marketing} disabled></textarea>
                </div>
                
                <div className="SignupSNS">
                    <input type="checkbox" id="sns" checked={snsCheck} onChange={snsCheckEvent}/>
                    <label htmlFor="sns">SNS 수신 동의 <span>(선택)</span></label>
                </div>
                <div className="SignupEmail">
                    <input type="checkbox" id="email" checked={emailCheck} onChange={emailCheckEvent}/>
                    <label htmlFor="email">이메일 수신 동의 <span>(선택)</span></label>
                </div>
            </div>
            <div className="Signup-Buttons">
                <img
                    className="Signup-prevBtn"
                    src="/SignupNO.png"
                    onClick={() => navigate(-1)}
                />
                <img
                    className="Signup-nextBtn"
                    src="/SignupOK.png"
                    onClick={() => {
                        if (isVal) navigate('/signup_info');
                        else alert('필수 항목에 동의 해 주세요');
                    }}
                />
            </div>

        </div>
    )
}

export default SignupAgreement;