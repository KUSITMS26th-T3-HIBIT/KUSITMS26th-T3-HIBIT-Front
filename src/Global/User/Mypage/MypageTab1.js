import { useNavigate } from "react-router-dom";

const MypageTab1 = ({posts}) => {
    let navigate = useNavigate();
    console.log(posts);
    let tmpdata = [
        {id: 0, exhibition: "장 줄리앙 : 그러면, 거기", content: "함께 관람 하실 분 구합니다!", date: "2022. 11. 15"},
        {id: 1, exhibition: "로그아웃", content: "오늘 하루 쉬어가고 싶으신 분?", date: "2022. 11. 15"},
        {id: 2, exhibition: "프랑코 폰타나 : 컬러 인 라이프", content: "다채로운 시간을 만들어봐요.", date: "2022. 11. 15"},
        {id: 3, exhibition: "모네 인사이드", content: "천천히 음미하며 즐겨봐요.", date: "2022. 11. 15"}
    ]
    return (
        <div className="mypage-tab-container">
            <div className="mypage-tab">
                {
                    tmpdata.map((d, i) => {
                        return (
                            <div className="mypage-tab-item">
                                {/* <hr className="mypage-tab-hr" /> */}
                                <div className="mypage-tab-items">
                                    <div className="mypage-tab-item-left">
                                        <div className="mypage-tab-item-left-title">
                                            {d.exhibition}
                                        </div>
                                        <div className="mypage-tab-item-left-content">
                                            {d.content}
                                        </div>
                                    </div>

                                    <div className="mypage-tab-item-right">
                                        <button
                                            className="mypage-tab-item-right-btn"
                                            onClick={() => { }}
                                        >자세히 보기 {'>'} </button>
                                        <div className="mypage-tab-item-right-date">
                                            마지막 수정일 : {d.date}
                                        </div>
                                    </div>
                                </div>
                                <hr className="mypage-tab-hr" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MypageTab1;