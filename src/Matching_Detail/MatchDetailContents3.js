import React from "react";

export const MatchListComponent = ({listDisplayOption, item}) => {
  return (
    <div style={{display:`${listDisplayOption}`}}>
      <div className="matchListComponent-outline">
        <div className="matchListComponent-box-left">
          <div className="matchListComponent-box-left-userimg">
            {/* 신청자프로필이미지 */}
          </div>

          <div className="matchListComponent-box-left-nickname">
            {/* 유저닉네임 */}
            <div>{item?.user}</div>
          </div>

          <div className="matchListComponent-box-left-matchstate">
            <div className="matchListComponent-box-left-matchstate-innerdiv">
              {(item?.matching_check === "W") ? "매칭 대기" : 
                (item?.matching_check === "T") ? "매칭 완료" :"매칭 거절"}
            </div>
          </div>
        </div>
        <div className="matchListComponent-box-right">
          <div className="matchListComponent-box-right-item1">
            <div>
              거부
              </div>
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

const MatchDetailContents3 = ({ tapIdx,fetchedData2, fetchedData3,listDisplayOption }) => {
  let userId =fetchedData2.id||'userId';
  let splitId =userId.split('');
  splitId[2]='*';
  splitId[3]='*';
  let joinId =splitId.join('');

  let displayOption;
  if (tapIdx == 3) {
    displayOption = "";
  } else {
    displayOption = "none";
  }
  console.log(fetchedData3.List);
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
                {/* 닉네임,아이디 망고피자(pizzalover) */}
                <span>{fetchedData2?.nickname}</span>
                <span>{`(${joinId})`}</span>
              </div>
            </div>
          </div>
        </div>
        {/* 서버데이터 패칭후 map으로 렌더링 */}
        {(fetchedData3?.List||[0,1,2]).map((item,idx) =><MatchListComponent key={idx} item={item}/>)}
        {/* <MatchListComponent listDisplayOption={listDisplayOption}/> */}
        {/* <MatchListComponent listDisplayOption={listDisplayOption}/> */}
        {/* <MatchListComponent listDisplayOption={listDisplayOption}/> */}
      </div>
    </div>
  );
};

export default MatchDetailContents3;
