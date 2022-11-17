//매칭디테일페이지 2페이지 컨텐츠

import React from "react";
// import matchDetailUserImage from "/Group 396.png";
const MatchDetailContents2 = ({ tapIdx }) => {
  let displayOption;
  if (tapIdx == 2) {
    displayOption = "";
  } else {
    displayOption = "none";
  }
  return (<div style={{ display: displayOption }}>
    <div
      
      className="matchDetail-contents2-box"
    >
      {/* 좌우 나눔/ */}
      <img src="/Group396.png" width="524" height="524" alt="usepics"></img>

      <div className="matchDetail-contents2-box-rightside">
        <div className="matchDetail-c2box-rsline1">
          <h2>서울 영등포구 거주</h2>
          <h2> 여자 </h2>
          <h2>대화 하면서 볼래요</h2>
        </div>

        <div className="matchDetail-c2box-rsline2">
          <h3>커피와 햇살이 있는 공간, 다채로운 색감을 좋아해요.</h3>
          <h1>부기(Boo**ee)</h1>
        </div>

        {/* data fetching후 div>span map */}
        {/* nth-child(3) */}
        <div className="matchDetail-c2box-rsline3">
          <h3>성격</h3>
          <div>
            {['ESTP','ESFP','탐구형','성장형','행동파'].map(
              (item,id)=><div key={id}>{item}</div>
            )}
          </div>
        </div>

        {/* data fetching후 div> map */}
        {/* nth-child(4) */}
        <div className="matchDetail-c2box-rsline4">
          <h3>관심사</h3>
          <div>
            {['디자인','드로잉','사진','여행','동물','기록'].map((item,id)=><div key={id}>{item}</div>)}
          </div>
        </div>

        {/* nth-child(5) */}
        <div className="matchDetail-c2box-rsline5">
          <div className="matchDetail-temporature-button">
            <div>메이트온도</div>
            <div>42도씨</div>
            <div>믿을 수 있는 메이트에요</div>
            <div>온도바</div>
          </div>
          <div className="matchDetail-matching-button">
            <div>매칭신청하기</div>
            <div>매칭을 통해,</div>
            <div>손아이콘</div>
            <div>부기님과 취향을 나눠보세요</div>
          </div>
        </div>
      </div>
    </div>
      <div className="matchDetail-c2box-notice">
        <div>메이트정보</div>
        <div>
          <div>노랑하트</div>
          <div>텍스트1</div>
          <div>텍스트2</div>
          <div>텍스트</div>
        </div>
        </div>
      </div>
  );
};

export default MatchDetailContents2;
