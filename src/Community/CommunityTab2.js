import { useNavigate } from "react-router-dom";

const CommunityTab2 = ({posts}) => {
    let navigate = useNavigate();
    console.log(posts);

    return (
        <div className="CommunityTab-container">
            <div className="CommunityTab-createBtn">
                <img
                    className="CommunityTab-createBtnImg"
                    src="/createCommunityBtn.png"
                    onClick={()=>{
                        navigate('/community/newpost');
                    }}
                />
            </div>

            {
                posts.map((d, i)=>{
                    return (
                        <div 
                            className="CommunityTab-item"
                            onClick={()=>{
                                navigate(`/community/detail/${posts[i].idx}`);
                            }}
                        >
                            <img
                                className="CommunityTab-item-img" 
                                src={`/exhibit${i%4 + 1}.png`}
                            />
                            <div className="CommunityTab-item-content">
                                <div className="CommunityTab-item-tags">
                                    <div className="CommunityTab-item-tag-place">{d.area}</div>
                                    <div className="CommunityTab-item-tag-style">{"조용한 스타일"}</div>
                                </div>
                                <div className="CommunityTab-item-exhibit-title">{d.exhibition}</div>
                                <div className="CommunityTab-item-exhibit-content">{d.content}</div>
                            </div>
                        </div>
                    )
                })
            }


            
            
        </div>
    )
}

export default CommunityTab2;