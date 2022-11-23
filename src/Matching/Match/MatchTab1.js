import { useNavigate } from "react-router-dom";

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
                        <div 
                            className="MatchTab-item"
                            onClick={()=>{
                                navigate(`/match/detail/${posts[i].idx}`);
                            }}
                        >
                            <img
                                className="MatchTab-item-img" 
                                src={`/exhibit${i%4 + 1}.png`}
                            />
                            <div className="MatchTab-item-content">
                                <div className="MatchTab-item-tags">
                                    <div className="MatchTab-item-tag-place">{d.area}</div>
                                    <div className="MatchTab-item-tag-style">{"조용한 스타일"}</div>
                                </div>
                                <div className="MatchTab-item-exhibit-title">{d.exhibition}</div>
                                <div className="MatchTab-item-exhibit-content">{d.content}</div>
                            </div>
                        </div>
                    )
                })
            }


            
            
        </div>
    )
}

export default MatchTab1;