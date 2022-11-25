import axios from "axios"
import { useNavigate } from "react-router-dom"

const AlarmTab1 = ({matchList}) => {
    
    return (
        <div className="alarm-tab-container">
            <div className="alarm-tab">
                {
                    matchList.map((d) => {
                        return (
                            <div className="alarm-tab-item">
                                <div className="alarm-tab-items">
                                    <div className="alarm-tab-item-left">
                                        <div className="alarm-tab-item-left-content">
                                            {d.category === "M" ? <span>{d.user}</span> : ""}
                                            {d.content}
                                        </div>
                                    </div>
                                    {
                                        d.readed === "N" ? <OKButton datum={d}/> : ""
                                    }
                                </div>
                                <hr className="alarm-tab-hr" />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

const OKButton = ({datum}) => {
    let navigate = useNavigate();
    return (
        <div className="alarm-tab-item-right">
            <button
                className="alarm-tab-item-right-btn"
                onClick={() => { 
                    axios.put('/alarm/어쩌구', {
                        // readed 값 Y로 바꿔서 request
                    })
                    .then((res)=>{
                        console.log(res);
                        console.log(res.data);
                        console.log(res.status);
                    })
                    .catch((err)=>{
                        console.log(err);
                    });

                    navigate(`/match/detail/${datum.id}`);
                    
                }}
            >확인하기</button>
        </div>
    )
}

export default AlarmTab1;