import { useState } from "react";

let SignupInfo = () => {
    let [id, setId] = useState('');




    let isValidLen_id = () => { // id 길이 6~20자

    }
    let isValidLen_pw = () => { // pw 길이 8~20자
        
    }



    return (
        <div className="SignupInfoSection">
            <img className="SignupHibitLogo" src="/hibit_logo_c.png" />
            <div className="SignupInputForm">
                <div className="SignupId">
                    <div>아이디</div>
                    <div className="SignupIdRow">
                        <input className="SignupIdInput" placeholder="아이디 입력 (6~20자)"/>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
  
}

export default SignupInfo;