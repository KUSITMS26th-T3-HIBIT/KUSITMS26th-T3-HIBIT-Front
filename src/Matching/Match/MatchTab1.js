import { useNavigate } from "react-router-dom";

const MatchTab1 = () => {
    let navigate = useNavigate();
    return (
        <div className="MatchTab1-container">
            <div className="MatchTab1-createBtn">
                <img
                    className="MatchTab1-createBtnImg"
                    src="/createMatchBtn.png"
                    onClick={()=>{
                        navigate('/match/newpost');
                    }}
                />
            </div>
            {
                // <div>
                //      posts.map((d, i)=>{
                //          (<div className="..">{d.category}</div>) .. 등..
                //      }) Slice에서 받아 온 데이터 각각 테이블에 뿌리기
                // </div>
                // 
                // 
            }
            <div className="MatchTab1-item">
                <div className="MatchTab1-item-tags">
                    <div className="MatchTab1-item-tag-category">{"전시 카테고리"}</div>
                    <div className="MatchTab1-item-tag-style">{"회원가입 시 관람 스타일"}</div>
                </div>
                <div className="MatchTab1-item-exhibit-title">{"장 줄리앙 : 그러면 거기"}</div>
                <div className="MatchTab1-item-title">{"함께 가실 분 구합니다!"}</div>
            </div>
            <div className="MatchTab1-item">
                <div className="MatchTab1-item-tags">
                    <div className="MatchTab1-item-tag-category">{"전시 카테고리"}</div>
                    <div className="MatchTab1-item-tag-style">{"회원가입 시 관람 스타일"}</div>
                </div>
                <div className="MatchTab1-item-exhibit-title">{"로그아웃"}</div>
                <div className="MatchTab1-item-title">{"오늘 하루 쉬어가고 싶으신 분?"}</div>
            </div>
            <div className="MatchTab1-item">
                <div className="MatchTab1-item-tags">
                    <div className="MatchTab1-item-tag-category">{"전시 카테고리"}</div>
                    <div className="MatchTab1-item-tag-style">{"회원가입 시 관람 스타일"}</div>
                </div>
                <div className="MatchTab1-item-exhibit-title">{"하리보 골드베렌 100주년 생일 기념전"}</div>
                <div className="MatchTab1-item-title">{"달콤한 시간 보내실 분!"}</div>
            </div>
            <div className="MatchTab1-item">
                <div className="MatchTab1-item-tags">
                    <div className="MatchTab1-item-tag-category">{"전시 카테고리"}</div>
                    <div className="MatchTab1-item-tag-style">{"회원가입 시 관람 스타일"}</div>
                </div>
                <div className="MatchTab1-item-exhibit-title">{"팀 버튼 특별전"}</div>
                <div className="MatchTab1-item-title">{"안 보면 손해!"}</div>
            </div>
            <div className="MatchTab1-item">
                <div className="MatchTab1-item-tags">
                    <div className="MatchTab1-item-tag-category">{"전시 카테고리"}</div>
                    <div className="MatchTab1-item-tag-style">{"회원가입 시 관람 스타일"}</div>
                </div>
                <div className="MatchTab1-item-exhibit-title">{"프랑코 폰타나 : 컬러 인 라이프"}</div>
                <div className="MatchTab1-item-title">{"다채로운 시간을 만들어봐요."}</div>
            </div>
            <div className="MatchTab1-item">
                <div className="MatchTab1-item-tags">
                    <div className="MatchTab1-item-tag-category">{"전시 카테고리"}</div>
                    <div className="MatchTab1-item-tag-style">{"회원가입 시 관람 스타일"}</div>
                </div>
                <div className="MatchTab1-item-exhibit-title">{"맥스 달튼, 영화의 순간들"}</div>
                <div className="MatchTab1-item-title">{"영화 속 순간으로."}</div>
            </div>
            
        </div>
    )
}

export default MatchTab1;