import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MypageTab1 from "./MypageTab1";
import MypageTab2 from "./MypageTab2";

let Mypage = () => {
    let [tabidx, setTabidx] = useState(0);
    let [userInfo, setUserInfo] = useState({});
    let [posts, setPosts] = useState([]);
    let [community, setCommunity] = useState([]);

    const chooseTab = () => {
        switch(tabidx) {
            case 0:
                return <MypageTab1 posts={posts}/>
            case 1:
                return <MypageTab2 community={community}/>
            default:
                return <MypageTab1 posts={posts}/>
        }
    }

    useEffect(()=>{

    }, [posts]);

    useEffect(()=>{

    }, [community])

    return (
        <div className="mypage-container">
            <div className="mypage-section">
                <div className="mypage-header">
                    <div className="mypage-header-title">
                        마이페이지
                    </div>
                </div>
                
                <div className="mypage-info-container">
                    <div className="mypage-info-row">
                        <div className="mypage-info-left">
                            <img
                                className="mypage-info-img"
                                src="/myprofile.png"
                            />
                            <img
                                className="mypage-info-edit"
                                src="/myprofile-edit.png"
                            />
                        </div>
                        <div className="mypage-info-right">
                            <div className="mypage-info-hi">
                                <strong>{"망고피자(mangolover)"}</strong> 님 안녕하세요!
                            </div>
                            <div className="mypage-info-match">
                                <div className="mypage-info-match-cnt">
                                    <div className="mypage-info-match-cnt-num">
                                        {"3"}번
                                    </div>
                                    <div className="mypage-info-match-cnt-text">
                                        매칭 성사 횟수
                                    </div>
                                </div>
                                <div className="mypage-info-temperature">
                                    <div className="mypage-info-tempeature-num">
                                        {"36.5"}°C
                                    </div>
                                    <div className="mypage-info-temperature-text">
                                        나의 메이트 온도
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mypage-post-container">
                    <div className="mypage-post-section">
                        <div className="mypage-post-title">
                            내가 작성한 게시물
                        </div>
                        <div className="mypage-post-tablist">
                            <div className="mypage-post-tab">
                                <button
                                    className={`mypage-post-tab-btn${tabidx === 0 ? "-Active" : ""}`}
                                    onClick={() => setTabidx(0)}
                                >매칭</button>
                                <hr className={`mypage-post-tab-hr${tabidx === 0 ? "-Active" : ""}`} />
                            </div>
                            <div className="mypage-post-tab">
                                <button
                                    className={`mypage-post-tab-btn${tabidx === 1 ? "-Active" : ""}`}
                                    onClick={() => setTabidx(1)}
                                >커뮤니티</button>
                                <hr className={`mypage-post-tab-hr${tabidx === 1 ? "-Active" : ""}`} />
                            </div>
                        </div>
                    </div>
                </div>

                {
                    chooseTab()
                }
            </div>
        </div>
    )
}

export default Mypage;