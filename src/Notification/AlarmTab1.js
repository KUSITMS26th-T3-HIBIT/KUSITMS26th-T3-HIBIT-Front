
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
                                        d.readed === "N" ? <OKButton/> : ""
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

const OKButton = () => {
    return (
        <div className="alarm-tab-item-right">
            <button
                className="alarm-tab-item-right-btn"
                onClick={() => { }}
            >확인하기</button>
        </div>
    )
}

export default AlarmTab1;