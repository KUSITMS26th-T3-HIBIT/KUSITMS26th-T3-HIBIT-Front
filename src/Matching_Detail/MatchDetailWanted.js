//매칭디테일페이지1의 하단부: ~와함께하고싶어요

import React from "react";
const MatchDetailWanted = ({fetchedData1,matchApplication}) => {
  return (
    <div className="matchDetail-content-rightbottom-outer">
      <div className="matchDetail-content-rightbottom-left">

          <h1>관람 일정</h1>
          <h2>{fetchedData1.start_date||'2000.00.01'}~{fetchedData1.finish_date||'2000.00.02'}</h2>
          <h1>모집 마감</h1>
          <h2>{fetchedData1.finish_date||'0000.00.00'}</h2>
          <h1>모집 정원</h1>
          <h2>{fetchedData1.number}</h2>

      </div>

      <div className="matchDetail-content-rightbottom-right">
      <button onClick={matchApplication}>매칭 신청하기</button>
      </div>
        
    </div>
  );
};

export default MatchDetailWanted;
