import { useNavigate } from "react-router-dom";

const ExhibitInfoTab1 = ({posts}) => {
    let navigate = useNavigate();
    console.log(posts);

    return (
        <div className="ExhibitInfoTab-container">
            {
                posts.map((d, i)=>{
                    return (
                        <div 
                            className="ExhibitInfoTab-item"
                            onClick={()=>{
                                navigate(`/exhibitinfo/detail/${posts[i].idx}`);
                            }}
                        >
                            <img
                                className="ExhibitInfoTab-item-img" 
                                src={`/exhibit${i%4 + 1}.png`}
                            />
                            <div className="ExhibitInfoTab-item-content">
                                <div className="ExhibitInfoTab-item-tags">
                                    <div className="ExhibitInfoTab-item-tag-place">{d.area}</div>
                                    <div className="ExhibitInfoTab-item-tag-style">{"조용한 스타일"}</div>
                                </div>
                                <div className="ExhibitInfoTab-item-exhibit-title">{d.exhibition}</div>
                                <div className="ExhibitInfoTab-item-exhibit-content">{d.content}</div>
                            </div>
                        </div>
                    )
                })
            }


            
            
        </div>
    )
}

export default ExhibitInfoTab1;