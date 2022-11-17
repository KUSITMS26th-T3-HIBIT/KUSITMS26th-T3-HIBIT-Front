//매칭디테일페이지 1페이지 컨텐츠 

import React from "react";
import MatchDetailWanted from "./MatchDetailWanted";
import Slider from "./MatchSlider";
// import purpleheart from '/Purple heart.png';
export const MatchDetailContents1 = ({ tapIdx }) => {
  let displayOption;
  if(tapIdx == 1){
    displayOption=''
  }
  else{
    displayOption='none'
  }
  return (
    <div style={{ display: displayOption}}>
      <div className="matchDetail-midbox">
        <Slider />
        <div className="right-banner-box">
          <div className="right-banner-box-inner-outer">
            <div className="right-banner-box-inner">
              <div>서울/중구</div>
              <div>대화 하면서 볼래요</div>
            </div>
            <div className="inner-rightside-clicknum ">조회수333</div>
          </div>

          <div className="matchDetail-midbox-rightmid">
            <h1> 장 줄리앙: 그러면, 거기</h1>
            <h2> 함께 관람하실 분 구합니다!</h2>
          </div>
          <div
            style={{
              width: "874px",
              height: "3px",
              backgroundColor: "#EEEEEE",
            }}
          ></div>
          <MatchDetailWanted />
        </div>
      </div>
      <div className="matchDetail-notice-banner">
        <div className="matchDetail-notice-banner-left">
          <h1>이런 메이트와 함께하고 싶어요</h1>
        </div>
        <div className="matchDetail-notice-banner-right">
          <div>
          <img src="/Purpleheart.png" width="30px" height="30px" alt="purple heart"/>
          <span>심리적 외로움이 있으며 소통과 공감의 욕구가 뭐시기</span>
          </div>
          <div>
          <img src="/Purpleheart.png" width="30px" height="30px" alt="purple heart"/>
          <span>심리적 외로움이 있으며 소통과 공감의 욕구가 뭐시기</span>
          </div>
          <div>
          <img src="/Purpleheart.png" width="30px" height="30px" alt="purple heart"/>
          <span>심리적 외로움이 있으며 소통과 공감의 욕구가 뭐시기</span>
          </div>
          
          
          
          
          
        </div>  

      </div>
    </div>
  );
};
