import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import exhibit_category_data from "../../Global/Data/exhibit_category_data";

const MatchTab1 = ({posts}) => {
    let navigate = useNavigate();
    console.log(posts);

    return (
        <div className="MatchTab-container">
            <div className="MatchTab-createBtn">
                <img
                    className="MatchTab-createBtnImg"
                    src="/createMatchBtn.png"
                    onClick={()=>{
                        navigate('/match/newpost');
                    }}
                />
            </div>

            {
                posts.map((d, i)=>{
                    return (
                        <div className="MatchTab-item">
                            <div className="MatchTab-item-tags">
                                {/* <div className="MatchTab-item-tag-category">{exhibit_category_data.id === +d.category}</div> */}
                                <div className="MatchTab-item-tag-style">{"조용한 스타일"}</div>
                            </div>
                            <div className="MatchTab-item-exhibit-title">{d.exhibition}</div>
                            <div className="MatchTab-item-title">{d.content}</div>
                        </div>
                    )
                })
            }


            <div className="MatchTab-item">
                <div className="MatchTab-item-tags">
                    <div className="MatchTab-item-tag-category">{"전시 카테고리"}</div>
                    <div className="MatchTab-item-tag-style">{"회원가입 시 관람 스타일"}</div>
                </div>
                <div className="MatchTab-item-exhibit-title">{"장 줄리앙 : 그러면 거기"}</div>
                <div className="MatchTab-item-title">{"함께 가실 분 구합니다!"}</div>
            </div>
            <div className="MatchTab-item">
                <div className="MatchTab-item-tags">
                    <div className="MatchTab-item-tag-category">{"전시 카테고리"}</div>
                    <div className="MatchTab-item-tag-style">{"회원가입 시 관람 스타일"}</div>
                </div>
                <div className="MatchTab-item-exhibit-title">{"로그아웃"}</div>
                <div className="MatchTab-item-title">{"오늘 하루 쉬어가고 싶으신 분?"}</div>
            </div>
            <div className="MatchTab-item">
                <div className="MatchTab-item-tags">
                    <div className="MatchTab-item-tag-category">{"전시 카테고리"}</div>
                    <div className="MatchTab-item-tag-style">{"회원가입 시 관람 스타일"}</div>
                </div>
                <div className="MatchTab-item-exhibit-title">{"하리보 골드베렌 100주년 생일 기념전"}</div>
                <div className="MatchTab-item-title">{"달콤한 시간 보내실 분!"}</div>
            </div>
            <div className="MatchTab-item">
                <div className="MatchTab-item-tags">
                    <div className="MatchTab-item-tag-category">{"전시 카테고리"}</div>
                    <div className="MatchTab-item-tag-style">{"회원가입 시 관람 스타일"}</div>
                </div>
                <div className="MatchTab-item-exhibit-title">{"팀 버튼 특별전"}</div>
                <div className="MatchTab-item-title">{"안 보면 손해!"}</div>
            </div>
            <div className="MatchTab-item">
                <div className="MatchTab-item-tags">
                    <div className="MatchTab-item-tag-category">{"전시 카테고리"}</div>
                    <div className="MatchTab-item-tag-style">{"회원가입 시 관람 스타일"}</div>
                </div>
                <div className="MatchTab-item-exhibit-title">{"프랑코 폰타나 : 컬러 인 라이프"}</div>
                <div className="MatchTab-item-title">{"다채로운 시간을 만들어봐요."}</div>
            </div>
            <div className="MatchTab-item">
                <div className="MatchTab-item-tags">
                    <div className="MatchTab-item-tag-category">{"전시 카테고리"}</div>
                    <div className="MatchTab-item-tag-style">{"회원가입 시 관람 스타일"}</div>
                </div>
                <div className="MatchTab-item-exhibit-title">{"맥스 달튼, 영화의 순간들"}</div>
                <div className="MatchTab-item-title">{"영화 속 순간으로."}</div>
            </div>
            
        </div>
    )
}

export default MatchTab1;