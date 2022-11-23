import { useNavigate } from "react-router-dom";

const MypageTab2 = ({community}) => {
    let navigate = useNavigate();
    console.log(community);
    let tmpdata = [
        {id: 0, title: "솔직히 이거 돈 주고 볼만 함", content: "역대급으로 재밌었다 진짜..", date: "2022. 11. 15"},
        {id: 1, title: "뭐 입고 가지 추천좀 ㅜㅜ", content: "여친이랑 같이 가는데 이렇게 입으면 혼남?", date: "2022. 11. 15"},
        {id: 2, title: "이번에 구찌 가든 이스케이프 갔다 온 사람?? ", content: "여기가 사진 개핫플인거 알았음?", date: "2022. 11. 15"},
        {id: 3, title: "헐 대박", content: "이거 봄?", date: "2022. 11. 15"}
    ]
    return (
        <div className="mypage-tab-container">
            <div className="mypage-tab">
                {
                    tmpdata.map((d, i) => {
                        return (
                            <div className="mypage-tab-item">
                                <div className="mypage-tab-items">
                                    <div className="mypage-tab-item-left">
                                        <div className="mypage-tab-item-left-title">
                                            {d.title}
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

export default MypageTab2;