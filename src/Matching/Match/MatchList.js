import axios from "axios";
import { useEffect, useState } from "react";
// 조회순, 제목순, 관람스타일 순 정렬
// -> 어차피 GET 해야 함
// 그럼 다시 상위 9개 item 만 보임

let MatchList = () => {
    let [postCnt, setPostCnt] = useState(0);
    let [posts, setPosts] = useState([]);
    let [tabidx, setTabidx] = useState([0, 1, 2]); // [전체보기], [모집중인게시글], [모집완료게시글]

    useEffect(()=>{
        setPostCnt(posts.length);
    }, [posts]);

    axios.get(`url 넣자`)
        .then((res)=>{
            console.log(res.data);
            let copy = [...res.data];
            setPosts(copy);
        })
        .catch((err)=>{
            console.log(`Data 가져오기 실패 ${err}`);
            // 에러처리 화면구성 로직 필요
        })
    return (
        <div className="matchList_section">
            <div>총 {postCnt}개의 게시글에서 취향이 맞는 메이트를 찾고 있어요!</div>
            <button onClick={() => {
                axios.get('url 넣자')
                    .then((res)=>{
                        console.log(res.data);
                        let copy = [...res.data];
                        setPosts(copy);
                    })
            }}>조회순</button>

            <select>
                <option key='정적데이터1' value='정적데이터값1'>인원수종류1</option>
                <option key='정적데이터2' value='정적데이터값2'>인원수종류2</option>
                <option key='정적데이터3' value='정적데이터값3'>인원수종류3</option>
            </select> 

            <select>
                <option key='정적데이터1' value='정적데이터값1'>관람스타일종류1</option>
                <option key='정적데이터2' value='정적데이터값2'>관람스타일종류2</option>
                <option key='정적데이터3' value='정적데이터값3'>관람스타일종류3</option>
            </select>

            {/* 탭 기능 : tabidx 값에 따라 하위 내용 갈아치우기 */}
            <TabContent tabidx={tabidx}/>

        </div>
    )
}

// store에 저장된 값들 기준, 재 렌더링 없이 여기서만 정렬해서 보여주기
// tabidx가 바뀐다고 GET 요청 x.
// GET 요청 날리는 순간은 스크롤이 일정 기준점 아래로 내려 갔을 때.
const TabContent = (props) => {
    return (
        <div>

        </div>
    )
}

export default MatchList;