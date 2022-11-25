import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlarmTab1 from "./AlarmTab1";
import AlarmTab2 from "./AlarmTab2";

const Alarm = () => {
    let [alarmList, setAlarmList] = useState([]);
    let [matchList, setMatchList] = useState([]);
    let [communityList, setCommunityList] = useState([]);
    let [tabidx, setTabidx] = useState(0); // [매칭], [커뮤니티]
    let [nickname, setNickname] = useState('임시닉네임');
    
    let navigate = useNavigate();

    const chooseTab = () => {
        switch(tabidx) {
            case 0:
                return <AlarmTab1 matchList={matchList}/>
            case 1:
                return <AlarmTab2 communityList={communityList}/>
            default:
                return <AlarmTab1 matchList={matchList}/>
        }
    }

    useEffect(()=>{
        axios.get(`/alarm/list`)
            .then((res)=>{
                console.log(res.data);
                setAlarmList(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, []);

    useEffect(()=>{
        axios.get(`/user/profile/${localStorage.getItem('id')}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            console.log(res.status);
            setNickname(res.data.nickname);
        })
        .catch((err)=>{
            console.log(err);
        })
    })

    useEffect(()=>{
        setMatchList(alarmList.filter((d)=> d.category !== "C"));
    }, [alarmList]);

    useEffect(()=>{
        setCommunityList(alarmList.filter((d)=> d.category === "C"));
    }, [alarmList])
    
    return (
        <div className="alarm-container">
            <div className="alarm-section">
                <div className="alarm-header">
                    <div className="alarm-header-left">
                        <div className="alarm-header-left-icon">
                            <img 
                                className="alarm-header-icon"
                                src="/modal-profile.png"
                            />
                        </div>
                        <div className="alarm-header-left-text">
                            <div className="alarm-header-left-id">
                                {localStorage.getItem('id')}
                            </div>
                            <div className="alarm-header-left-nickname">
                                {nickname}
                            </div>
                        </div>
                    </div>
                    <div className="alarm-header-right">
                        <div
                            className="alarm-header-right-mypage-btn"
                            onClick={()=>{
                                navigate('/mypage');
                            }}
                        >
                            마이페이지 {'>'}
                        </div>
                    </div>
                </div>
                <div className="alarm-main-tablist">
                    <div className="alarm-main-tab">
                        <button
                            className={`alarm-main-tab-btn${tabidx === 0 ? "-Active" : ""}`}
                            onClick={() => setTabidx(0)}
                        >매칭</button>
                        <hr className={`alarm-main-tab-hr${tabidx === 0 ? "-Active" : ""}`} />
                    </div>
                    <div className="alarm-main-tab">
                        <button
                            className={`alarm-main-tab-btn${tabidx === 1 ? "-Active" : ""}`}
                            onClick={() => setTabidx(1)}
                        >커뮤니티</button>
                        <hr className={`alarm-main-tab-hr${tabidx === 1 ? "-Active" : ""}`} />
                    </div>

                </div>

                {
                    chooseTab()
                }
            </div>
        </div>
    )
}

export default Alarm;


/*
  {
    "idx": 0,
    "user": 0,
    "nickname": "false",
    "category": "M/C/T/F",
    "content": "__님이 매칭을 신청했습니다.",
    "readed": "N",
    "openchat": "http://openchat"
*/
