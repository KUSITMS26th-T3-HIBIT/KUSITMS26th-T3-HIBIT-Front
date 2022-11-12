import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

let SignupAgreement = () => {
    let navigate = useNavigate();
    const [allCheck, setAllCheck] = useState(false); // 모두 체크
    const [provisionCheck, setprovisionCheck] = useState(false); // 필수
    const [privacyCheck, setprivacyCheck] = useState(false); // 필수
    const [marketingCheck, setMarketingCheck] = useState(false); // 선택
    const [isVal, setIsVal] = useState(false);

    const allCheckEvent = () => {
        if (!allCheck) { setAllCheck(true); setprovisionCheck(true); setprivacyCheck(true); setMarketingCheck(true);} 
        else { setAllCheck(false); setprovisionCheck(false); setprivacyCheck(false); setMarketingCheck(false);}
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

    useEffect(()=>{
        if(provisionCheck && privacyCheck) setIsVal(true);
        else setIsVal(false);
    }, [provisionCheck, privacyCheck])

    useEffect(() => {
        if (provisionCheck === true && privacyCheck === true && marketingCheck === true) setAllCheck(true);
        else setAllCheck(false);
    }, [provisionCheck, privacyCheck, marketingCheck]);

    return (
        <div className="SignupAgreeSection">
            <img className="SignupHibitLogo" src="/hibit_logo_c.png" />
            <div className="SignupAgreeComponents">
                <div className="SignupAgreeAll">
                    <input type="checkbox" id="all" checked={allCheck} onChange={allCheckEvent} />
                    <label for="all-check">전체동의</label>
                </div>
                <div className="SignupProvision">
                    <input type="checkbox" id="provision" checked={provisionCheck} onChange={provisionCheckEvent} />
                    <label htmlFor="provision">히빗 이용약관 동의 <span>(필수)</span></label>
                </div>
                <textarea className="SignupTextarea">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</textarea>
                <div className="SignupPrivacy">
                    <input type="checkbox" id="privacy" checked={privacyCheck} onChange={privacyCheckEvent} />
                    <label htmlFor="privacy">개인정보 수집 및 이용 동의 <span>(필수)</span></label>
                </div>
                <textarea className="SignupTextarea">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</textarea>
                <div className="SignupMarketing">
                    <input type="checkbox" id="marketing" checked={marketingCheck} onChange={marketingCheckEvent} />
                    <label htmlFor="marketing">마케팅 이용 동의 <span>(선택)</span></label>
                </div>
                <textarea className="SignupTextarea">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</textarea>
            </div>
            <div className="SignupNextButtons">
                <button onClick={() => navigate(-1)}>취소</button>
                <button 
                    onClick={() => {
                        if(isVal) navigate('/signup_info');
                        else alert('필수 항목에 동의 해 주세요');
                    }
                    }>확인</button>
            </div>
        </div>
    )
}

export default SignupAgreement;