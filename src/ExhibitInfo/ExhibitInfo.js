import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExhibitInfoTab1 from './ExhibitInfoTab1';
import ExhibitInfoTab2 from './ExhibitInfoTab2';
import ExhibitInfoTab3 from './ExhibitInfoTab3';
let ExhibitInfo = () => {
    let [postCnt, setPostCnt] = useState(0);
    let [posts, setPosts] = useState([]);
    let [posting, setPosting] = useState([]);
    let [mypost, setMypost] = useState([]);
    let [tabidx, setTabidx] = useState(0);
    
    const useidx = +localStorage.getItem('useIdx');

    let navigate = useNavigate();

    const chooseTab = () => {
        switch(tabidx) {
            case 0:
                return <ExhibitInfoTab1 posts={posts}/>
            case 1:
                return <ExhibitInfoTab2 posts={posting}/>
            case 2:
                return <ExhibitInfoTab3 posts={posts}/>
            default:
                return <ExhibitInfoTab1 posts={posts}/>
        }
    }

    useEffect(()=>{
        setPostCnt(posts.length);
    }, [posts]);

    // useEffect(()=>{
    //     axios.get(`/community/list`)
    //         .then((res)=>{
    //             console.log(res.data);
    //             setPosts(res.data);
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //             alert('데이터 로딩 실패. 잠시 후에 접속 해 주세요.');
    //         })
    // }, []);

    useEffect(()=>{
        setPosting(posts.filter((d)=>d.finish===false));
    }, [posts]);

    useEffect(()=>{
        setMypost(posts.filter((d)=>d.user===useidx));
    }, [posts]);

    return (
        <div className="exhibit-info-container">
            <div className="exhibit-info-section">
                <div className="exhibit-info-header">
                    <div className="exhibit-info-header-title">총 {postCnt}개의 게시글에서 <strong>메이트님의 이야기</strong>를 기다리고 있어요!</div>
                    <div className="exhibit-info-header-filter">
                        <button className="exhibit-info-header-filter-lookup" onClick={() => { }}>조회순</button>
                        <button className="exhibit-info-header-filter-title" onClick={() => { }}>제목순</button>
                    </div>
                </div>
                

                <div className="exhibit-info-main-tab-container">
                    <div className="exhibit-info-main-tablist">
                        <div className="exhibit-info-main-tab">
                            <button
                                className={`exhibit-info-main-tab-btn${tabidx === 0 ? "-Active" : ""}`}
                                onClick={() => setTabidx(0)}
                            >전체 보기</button>
                            <hr className={`exhibit-info-main-tab-hr${tabidx === 0 ? "-Active" : ""}`} />
                        </div>
                        <div className="exhibit-info-main-tab">
                            <button
                                className={`exhibit-info-main-tab-btn${tabidx === 1 ? "-Active" : ""}`}
                                onClick={() => setTabidx(1)}
                            >진행중인 전시회</button>
                            <hr className={`exhibit-info-main-tab-hr${tabidx === 1 ? "-Active" : ""}`} />
                        </div>
                        <div className="exhibit-info-main-tab">
                            <button
                                className={`exhibit-info-main-tab-btn${tabidx === 2 ? "-Active" : ""}`}
                                onClick={() => setTabidx(2)}
                            >진행 예정인 전시회</button>
                            <hr className={`exhibit-info-main-tab-hr${tabidx === 2 ? "-Active" : ""}`} />
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

export default ExhibitInfo;