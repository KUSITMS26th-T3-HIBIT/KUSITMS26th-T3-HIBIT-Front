import React from "react";

const MatchDetailContents3 = () => {
  return (
    <div>
      {/* 상단 프로필박스 */}
      <div className="MatchDetailContents3-background">
        <div className="MatchDetailContents3-profile-outline">
            <div className="MatchDetailContents3-profile">
              <div>사용자이미지</div>
              <div className="MatchDetailContents3-profile-inner">
                <div><span>ME</span></div>
                <div><span>망고피자</span><span>(사용자이름:상태관리값)</span></div>
              </div>
            </div>
        </div>

        <div>컴포넌트1</div>
        <div>컴포넌트2</div>
        <div>컴포넌트3</div>

      </div>
    </div>
  );
};

export default MatchDetailContents3;
