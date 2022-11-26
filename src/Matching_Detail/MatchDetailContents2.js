//매칭디테일페이지 2페이지 컨텐츠

import React from "react";
import myStyleData from "../Global/Data/my_style_data";
import exhibitStyleData from "../Global/Data/exhibit_style_data";
import myInterestData from "../Global/Data/my_interest_data";
import axios from "axios";

// import matchDetailUserImage from "/Group 396.png";
const MatchDetailContents2 = ({
  tapIdx,
  fetchedData1,
  fetchedData2,
  idParam,
  matchApplication,
}) => {
  let displayOption;
  if (tapIdx == 2) {
    displayOption = "";
  } else {
    displayOption = "none";
  }
  // userId: replacement with '**'
  let userId = fetchedData2.id || "userId";
  let splitId = userId.split("");
  splitId[2] = "*";
  splitId[3] = "*";
  let joinId = splitId.join("");
  //성격
  // console.log(fetchedData2.personality);
  //관심사
  // console.log(fetchedData2.hobby);

  //전시관람스타일
  //   const exhibitStyleData = [
  //     {id: 0, value: "남는건 사진밖에 없지! 사진촬영파"},
  //     {id: 1, value: "현재가 중요해! 단순관람파"},
  //     {id: 2, value: "나는 이렇게 생각해! 소통관람파"},
  //     {id: 3, value: "관람 할 땐 관람만! 관람우선파"}
  // ]
  //관심사
  //   const myInterestData = [
  //   {id: 0, value: "드라마/영화 정주행"},
  //   {id: 1, value: "여행"},
  //   {id: 2, value: "맛집 탐방"},
  //   {id: 3, value: "노래방 가기"},
  //   {id: 4, value: "운동"},
  //   {id: 5, value: "댄스"},
  //   {id: 6, value: "자기계발"},
  //   {id: 7, value: "환경"},
  //   {id: 8, value: "독서"},
  //   {id: 9, value: "쇼핑"},
  //   {id: 10, value: "반려 동물/식물"},
  //   {id: 11, value: "게임"},
  // ];
  //성격
  // const myStyleData = [
  //   {id: 0, value: "지적인"},
  //   {id: 1, value: "차분한"},
  //   {id: 2, value: "유머있는"},
  //   {id: 3, value: "낙천적인"},
  //   {id: 4, value: "내향적인"},
  //   {id: 5, value: "외향적인"},
  //   {id: 6, value: "감상적인"},
  //   {id: 7, value: "상냥한"},
  //   {id: 8, value: "귀여운"},
  //   {id: 9, value: "열정적인"},
  //   {id: 10, value: "듬직한"},
  //   {id: 11, value: "개성있는"}
  // ];

  return (
    <div style={{ display: displayOption }}>
      <div className="matchDetail-contents2-box">
        {/* 좌우 나눔/ */}
        <img src="/Group396.png" width="360" height="360" alt="usepics"></img>

        <div className="matchDetail-contents2-box-rightside">
          <div className="matchDetail-c2box-rsline1">
            <h2>{"거주지" && fetchedData2?.home + " 거주"}</h2>
            <h2>
              {/* 여자(T)/남자(F) */}
              {"성별" && (fetchedData2?.gender ? "남자" : "여자")}
            </h2>
            <h2>
              {/* 대화 하면서 볼래요(전시관람스타일) */}
              {exhibitStyleData[fetchedData1?.style]?.value ||
                "(전시관람스타일)"}
            </h2>
          </div>
          <div className="matchDetail-c2box-rsline2">
            {/* 회원가입폼-자기소개 */}
            <h3>{fetchedData2?.introduce || "자기소개글"}</h3>
            <h1>
              {fetchedData2?.nickname}
              {"유저*ID" && `(${joinId})`}
            </h1>
          </div>
          <div className="matchDetail-c2box-rsline3">
            <h3>성격</h3>
            <div>
              {(fetchedData2?.personality || [0, 1, 2]).map((i, idx) => (
                <div key={idx}>{myStyleData[i]?.value + ","}</div>
              ))}
            </div>
          </div>
          {/* nth-child(4) */}
          <div className="matchDetail-c2box-rsline4">
            <h3>관심사</h3>
            <div>
              {(fetchedData2?.hobby || [0, 1, 2]).map((i, idx) => (
                <div key={idx}>{myInterestData[i].value + ","}</div>
              ))}
            </div>
          </div>

          {/* nth-child(5) */}
          <div className="matchDetail-c2box-rsline5">
            <div className="matchDetail-temporature-button">
              <div className='temp-button-line1'>
                <div>메이트온도 </div>
                <div>{fetchedData2?.temperature}℃</div>
              </div>
              <div className='temp-button-line2'><span>믿을 수 있는 메이트</span>에요.
              </div>
              <div>
                <div className='temp-button-line3-bar'>
                  <div className='temp-button-line3-bar-inner'></div>
                </div>
                </div>
            </div>
            <button
              onClick={matchApplication}
              className="matchDetail-matching-button"
            >
              <div className='matching-button-line1'>매칭신청하기</div>
              <div className='matching-button-line2'>
                <div className='matching-button-line2-innerLeft'>
                  <div>매칭을 통해,</div>
                  <div>취향을 나눠보세요</div>
                </div>
                <div className='matching-button-line2-RightIcon'>손아이콘</div>
              </div>
              
            </button>
          </div>
        </div>
      </div>
      < div className="matchDetail-notice-banner">
        <div className="matchDetail-notice-banner-left">
        <img src="/Purpleheart.png" width="30px" height="30px" alt="purple heart"/>
          <h1>이런 메이트와 함께하고 싶어요
          </h1>
        </div>
        <div className="matchDetail-notice-banner-right">
          <div>
          {/* <textarea width="650" height="100">{fetchedData1.want||'want'}</textarea> */}
          </div>
          <div>
          <img src="/Purpleheart.png" width="30px" height="30px" alt="purple heart"/>
          <span>지친 일상에서 벗어나, 잠시나마 쉬어가는 시간이 되었으면 좋겠어요.</span>
          <div>
          </div><img src="/Purpleheart.png" width="30px" height="30px" alt="purple heart"/>
          <span>편안하고 즐거운 분위기에서 전시 관람하고, 맛있는 것도 먹어요.</span>
          </div>
          <div>
          <img src="/Purpleheart.png" width="30px" height="30px" alt="purple heart"/>
          <span>카페는 제가 책임질테니, 메뉴는 메이트님이 골라주시는 걸로! (^ㅡ^)V</span>
          </div>
        </div>  
      </div>
      {/* <div className="matchDetail-c2box-notice">
        <div>노랑하트이미지</div>
        <div>메이트정보</div>
        <div>메이트정보</div>
        <div>메이트정보</div>
        <div></div>
      </div> */}
    </div>
  );
};

export default MatchDetailContents2;
