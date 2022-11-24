import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommunityTab1 from './CommunityTab1';
import CommunityTab2 from './CommunityTab2';
import CommunityTab3 from './CommunityTab3';
let Community = () => {
    let [postCnt, setPostCnt] = useState(0);
    let [posts, setPosts] = useState([]);
    let [posting, setPosting] = useState([]);
    let [mypost, setMypost] = useState([]);
    let [exhibitStyle, setExhibitStyle] = useState(0);
    let [tabidx, setTabidx] = useState(0); // [전체 보기], [모집중인 게시글], [내가 신청한 게시글]
    
    const useidx = +localStorage.getItem('useIdx');

    let navigate = useNavigate();

    const chooseTab = () => {
        switch(tabidx) {
            case 0:
                return <CommunityTab1 posts={posts}/>
            case 1:
                return <CommunityTab2 posts={posting}/>
            case 2:
                return <CommunityTab3 posts={posts}/>
            default:
                return <CommunityTab1 posts={posts}/>
        }
    }

    useEffect(()=>{
        setPostCnt(posts.length);
    }, [posts]);

    useEffect(()=>{
        axios.get(`/community/list`)
            .then((res)=>{
                console.log(res.data);
                setPosts(res.data);
            })
            .catch((err)=>{
                console.log(err);
                alert('데이터 로딩 실패. 잠시 후에 접속 해 주세요.');
            })
    }, []);

    useEffect(()=>{
        setPosting(posts.filter((d)=>d.finish===false));
    }, [posts]);

    useEffect(()=>{
        setMypost(posts.filter((d)=>d.user===useidx));
    }, [posts]);

    return (
        <div className="community-container">
            <div className="community-section">
                <div className="community-header">
                    <div className="community-header-title">총 {postCnt}개의 게시글에서 <strong>메이트님의 이야기</strong>를 기다리고 있어요!</div>
                    <div className="community-header-filter">
                        <button className="community-header-filter-lookup" onClick={() => { }}>조회순</button>
                        <button className="community-header-filter-title" onClick={() => { }}>제목순</button>
                    </div>
                </div>
                

                <div className="community-main-tab-container">
                    <div className="community-main-tablist">
                        <div className="community-main-tab">
                            <button
                                className={`community-main-tab-btn${tabidx === 0 ? "-Active" : ""}`}
                                onClick={() => setTabidx(0)}
                            >전시회 후기 커뮤니티</button>
                            <hr className={`community-main-tab-hr${tabidx === 0 ? "-Active" : ""}`} />
                        </div>
                        <div className="community-main-tab">
                            <button
                                className={`community-main-tab-btn${tabidx === 1 ? "-Active" : ""}`}
                                onClick={() => setTabidx(1)}
                            >매칭 후기 커뮤니티</button>
                            <hr className={`community-main-tab-hr${tabidx === 1 ? "-Active" : ""}`} />
                        </div>
                        <div className="community-main-tab">
                            <button
                                className={`community-main-tab-btn${tabidx === 2 ? "-Active" : ""}`}
                                onClick={() => setTabidx(2)}
                            >예술 토론 커뮤니티</button>
                            <hr className={`community-main-tab-hr${tabidx === 2 ? "-Active" : ""}`} />
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

export default Community;