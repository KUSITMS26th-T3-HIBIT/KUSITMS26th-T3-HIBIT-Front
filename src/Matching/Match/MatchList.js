import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MatchTab1 from "./MatchTab1";
import MatchTab2 from "./MatchTab2";
import MatchTab3 from "./MatchTab3";


let MatchList = () => {
    let [postCnt, setPostCnt] = useState(0);
    let [posts, setPosts] = useState([]);
    let [numPeople, setNumPeople] = useState(0);
    let [exhibitStyle, setExhibitStyle] = useState(0);
    let [tabidx, setTabidx] = useState(0); // [전체 보기], [모집중인 게시글], [내가 신청한 게시글]

    let navigate = useNavigate();

    const chooseTab = () => {
        switch(tabidx) {
            case 0:
                return <MatchTab1 posts={posts}/>
            case 1:
                return <MatchTab2 posts={posts}/>
            case 2:
                return <MatchTab3 posts={posts}/>
            default:
                return <MatchTab1 posts={posts}/>
        }
    }

    useEffect(()=>{
        setPostCnt(posts.length);
    }, [posts]);

    useEffect(()=>{
        axios.get(`/matching/list`)
            .then((res)=>{
                console.log(res.data);
                setPosts(res.data);
            })
            .catch((err)=>{
                console.log(err);
                alert('데이터 로딩 실패. 잠시 후에 접속 해 주세요.');
                navigate('/');
            })
    }, []);

    return (
        <div className="matchList-container">
            <div className="matchList-section">
                <div className="matchList-header">
                    <div className="matchList-header-title">총 {postCnt}개의 게시글에서 취향이 맞는 메이트를 찾고 있어요!</div>
                    <div className="matchList-header-filter">
                        <button className="matchList-header-filter-lookup" onClick={() => { }}>조회순</button>

                        <select className="matchList-header-filter-person" value={numPeople} onChange={(e) => setNumPeople(e.target.value)}>
                            <option key='0' value='0'>모집 정원</option>
                            <option key='2' value='2'>2인</option>
                            <option key='3' value='3'>3인</option>
                            <option key='4' value='4'>4인</option>
                        </select>

                        <select className="matchList-header-filter-style" value={exhibitStyle} onChange={(e) => setExhibitStyle(e.target.value)}>
                            <option key='0' value='0'>관람 스타일</option>
                            <option key='1' value='1'>사진촬영파</option>
                            <option key='2' value='2'>단순관람파</option>
                            <option key='3' value='3'>소통관람파</option>
                            <option key='4' value='4'>관람우선파</option>
                        </select>
                    </div>
                </div>
                

                <div className="matchList-main-tab-container">
                    <div className="matchList-main-tablist">
                        <div className="matchList-main-tab">
                            <button
                                className={`matchList-main-tab-btn${tabidx === 0 ? "-Active" : ""}`}
                                onClick={() => setTabidx(0)}
                            >전체 보기</button>
                            <hr className={`matchList-main-tab-hr${tabidx === 0 ? "-Active" : ""}`} />
                        </div>
                        <div className="matchList-main-tab">
                            <button
                                className={`matchList-main-tab-btn${tabidx === 1 ? "-Active" : ""}`}
                                onClick={() => setTabidx(1)}
                            >모집중인 게시글</button>
                            <hr className={`matchList-main-tab-hr${tabidx === 1 ? "-Active" : ""}`} />
                        </div>
                        <div className="matchList-main-tab">
                            <button
                                className={`matchList-main-tab-btn${tabidx === 2 ? "-Active" : ""}`}
                                onClick={() => setTabidx(2)}
                            >내가 신청한 게시글</button>
                            <hr className={`matchList-main-tab-hr${tabidx === 2 ? "-Active" : ""}`} />
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

export default MatchList;