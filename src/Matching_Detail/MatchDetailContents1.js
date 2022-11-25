//매칭디테일페이지 1페이지 컨텐츠 
import React from "react";
import MatchDetailWanted from "./MatchDetailWanted";
import Slider from "./MatchSlider";
import exhibitStyleData from "../Global/Data/exhibit_style_data";
import {useState} from 'react';
const MatchDetailContents1 = ({ tapIdx,fetchedData1,matchApplication }) => {
  let displayOption;
  if(tapIdx == 1){
    displayOption=''
  }
  else{
    displayOption='none'
  }
  // let [styleData,setStyleData] =useState('')
  // setStyleData(fetchedData1.style);
  // console.log(fetchedData1)
  // console.log(exhibitStyleData[fetchedData1.style].value)

  return (
    <div style={{ display: displayOption}}>
      <div className="matchDetail-midbox">
        <Slider />
        <div className="right-banner-box">
          <div className="right-banner-box-inner-outer">
            <div className="right-banner-box-inner">
              <div>
                {/* 사용자 프로필정보 : 서울/중구 */}
                {fetchedData1.area||''}
              </div>
              <div>
                {exhibitStyleData[fetchedData1?.style]?.value||'' }
                {/* 사용자 프로필정보: 대화 하면서 볼래요 */}
                </div>
            </div>
            <div className="inner-rightside-clicknum ">조회수3</div>
          </div>

          <div className="matchDetail-midbox-rightmid">
            <h1>
               {/* 장 줄리앙: 그러면, 거기 */}
              {fetchedData1.exhibition || 'no exhibition'} 
            </h1>
            <h2>
               {/* 함께 관람하실 분 구합니다! */}
              {fetchedData1.title || 'no title'}
            </h2>
          </div>
          <div
            style={{
              width: "874px",
              height: "3px",
              backgroundColor: "#EEEEEE",
            }}
          ></div>
          <MatchDetailWanted 
          matchApplication={matchApplication}
          fetchedData1={fetchedData1}/>
        </div>
      </div>
      <div className="matchDetail-notice-banner">
        <div className="matchDetail-notice-banner-left">
        <img src="/Purpleheart.png" width="30px" height="30px" alt="purple heart"/>
          <h1>이런 메이트와 함께하고 싶어요
          </h1>
        </div>
        <div className="matchDetail-notice-banner-right">
          <div>
          {/* <textarea width="650" height="100">{fetchedData1.want||'want'}</textarea> */}
          </div>
          {/* <div>
          <img src="/Purpleheart.png" width="30px" height="30px" alt="purple heart"/>
          <span>심리적 외로움이 있으며 소통과 공감의 욕구가 뭐시기</span>
          </div>
          <div>
          <img src="/Purpleheart.png" width="30px" height="30px" alt="purple heart"/>
          <span>심리적 외로움이 있으며 소통과 공감의 욕구가 뭐시기</span>
          </div> */}
        </div>  
      </div>
    </div>
  );
};
export default MatchDetailContents1;