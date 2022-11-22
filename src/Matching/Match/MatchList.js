import axios from "axios";
import { useEffect, useState } from "react";
import MatchTab1 from "./MatchTab1";
// 조회순, 제목순, 관람스타일 순 정렬
// -> 어차피 GET 해야 함
// 그럼 다시 상위 9개 item 만 보임

let MatchList = () => {
    let [postCnt, setPostCnt] = useState(0);
    let [posts, setPosts] = useState([]);
    let [numPeople, setNumPeople] = useState(0);
    let [exhibitStyle, setExhibitStyle] = useState(0);
    let [tabidx, setTabidx] = useState(0); // [전체 보기], [모집중인 게시글], [내가 신청한 게시글]

    useEffect(()=>{
        setPostCnt(posts.length);
    }, [posts]);

    // axios.get(`url 넣자`)
    //     .then((res)=>{
    //         console.log(res.data);
    //         let copy = [...res.data];
    //         setPosts(copy);
    //     })
    //     .catch((err)=>{
    //         console.log(`Data 가져오기 실패 ${err}`);
    //         // 에러처리 화면구성 로직 필요
    //     })
    return (
        <div className="matchList-section">
            <div>총 {postCnt}개의 게시글에서 취향이 맞는 메이트를 찾고 있어요!</div>
            <button className="matchList-lookup" onClick={() => {
                axios.get('url 넣자')
                    .then((res)=>{
                        console.log(res.data);
                        let copy = [...res.data];
                        setPosts(copy);
                    })
            }}>조회순</button>

            <select className="matchList-person" value={numPeople} onChange={(e) => setNumPeople(e.target.value)}>
                <option key='0' value='0'>모집 정원</option>
                <option key='2' value='2'>2인</option>
                <option key='3' value='3'>3인</option>
                <option key='4' value='4'>4인</option>
            </select> 

            <select className="matchList-style" value={exhibitStyle} onChange={(e) => setExhibitStyle(e.target.value)}>
                <option key='0' value='0'>관람 스타일</option>
                <option key='1' value='1'>사진촬영파</option>
                <option key='2' value='2'>단순관람파</option>
                <option key='3' value='3'>소통관람파</option>
                <option key='4' value='4'>관람우선파</option>
            </select>

            {/* 탭 기능 : tabidx 값에 따라 하위 내용 갈아치우기 */}
            <div className="match-main-btnlist">
                <button
                    className="button-0"
                    onClick={() => setTabidx(0)}
                >전체 보기</button>
                <button
                    className="button-1"
                    onClick={() => setTabidx(1)}
                >모집중인 게시글</button>
                <button
                    className="button-2"
                    onClick={() => setTabidx(2)}
                >내가 신청한 게시글</button>
            </div>
            <TabContent tabidx={tabidx}/>

        </div>
    )
}

// store에 저장된 값들 기준, 재 렌더링 없이 여기서만 정렬해서 보여주기
// tabidx가 바뀐다고 GET 요청 x.
const TabContent = ({tabidx}) => {
    return (
        <div className={`match-main-tab-${tabidx}`}>
            <MatchTab1/>

        </div>
    )
}

export default MatchList;