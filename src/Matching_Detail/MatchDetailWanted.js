//매칭디테일페이지1의 하단부: ~와함께하고싶어요

import React from "react";
import { useNavigate } from "react-router-dom";
const MatchDetailWanted = () => {
  let navigate =useNavigate();
  return (
    <div className="matchDetail-content-rightbottom-outer">
      <div className="matchDetail-content-rightbottom-left">

          <h1>관람 일정</h1>
          <h2>0000.00.00~0000.00.00</h2>
          <h1>모집 마감</h1>
          <h2>0000.00.00</h2>
          <h1>모집 정원</h1>
          <h2>4명</h2>

      </div>

      <div className="matchDetail-content-rightbottom-right">
      <button onClick={()=>navigate('/')}>매칭 신청하기</button>
      </div>
        
    </div>
  );
};

export default MatchDetailWanted;
