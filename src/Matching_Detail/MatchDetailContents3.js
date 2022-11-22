import React from "react";

export const MatchListComponent = () => {
  return (
    <div>
      <div className="matchListComponent-outline">
        <div className="matchListComponent-box-left">
          <div className="matchListComponent-box-left-userimg">
            신청자프로필이미지
          </div>

          <div className="matchListComponent-box-left-nickname">
            <div>히빗유저 1</div>
          </div>

          <div className="matchListComponent-box-left-matchstate">
            <div className="matchListComponent-box-left-matchstate-innerdiv">
              매칭 대기
            </div>
          </div>
        </div>

        <div className="matchListComponent-box-right">
          <div className="matchListComponent-box-right-item1">
            <div>거부</div>
          </div>
          <div className="matchListComponent-box-right-item2">
            <div>수락</div>
          </div>
          <button className="matchListComponent-box-right-item3">
            <div>평가하기</div>
          </button>
        </div>
      </div>
    </div>
  );
};

const MatchDetailContents3 = ({ tapIdx }) => {
  let displayOption;
  if (tapIdx == 3) {
    displayOption = "";
  } else {
    displayOption = "none";
  }
  return (
    <div style={{ display: displayOption }}>
      {/* 상단 프로필박스 */}
      <div className="MatchDetailContents3-background">
        <div className="MatchDetailContents3-profile-outline">
          <div className="MatchDetailContents3-profile">
            <div>사용자이미지</div>
            <div className="MatchDetailContents3-profile-inner-right">
              <div>
                <div>ME</div>
              </div>
              <div>
                <span>망고피자</span>
                <span>(mangolover)</span>
              </div>
            </div>
          </div>
        </div>
        {/* 서버데이터 패칭후 map으로 렌더링 */}
        <MatchListComponent />
        <MatchListComponent />
        <MatchListComponent />
        <MatchListComponent /><MatchListComponent />
        <MatchListComponent /><MatchListComponent />
        <MatchListComponent /> <MatchListComponent/>
      </div>
    </div>
  );
};

export default MatchDetailContents3;
