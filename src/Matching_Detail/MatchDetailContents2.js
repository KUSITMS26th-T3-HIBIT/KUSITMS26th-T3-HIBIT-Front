//매칭디테일페이지 2페이지 컨텐츠


import React from "react";
import myStyleData from "../Global/Data/my_style_data";
import exhibitStyleData from "../Global/Data/exhibit_style_data";
import myInterestData from "../Global/Data/my_interest_data";
import axios from 'axios';


// import matchDetailUserImage from "/Group 396.png";
const MatchDetailContents2 = ({tapIdx,fetchedData1,fetchedData2,idParam}) => {
const matchApplication = async ()=>{     
  let res = await axios.post(`/matching/${idParam}/application`,
  {"matching_check": "W",
  "evaluation_check": "W"})
  console.log(res.data);
}

  let displayOption;
  if (tapIdx == 2) {
    displayOption = "";
  } else {
    displayOption = "none";
  }
  // userId: replacement with '**'
  let userId =fetchedData2.id||'userId';
  let splitId =userId.split('');
  splitId[2]='*';
  splitId[3]='*';
  let joinId =splitId.join('');
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

  return (<div style={{ display: displayOption }}>
    <div

      className="matchDetail-contents2-box"
    >
      {/* 좌우 나눔/ */}
      <img src="/Group396.png" width="524" height="524" alt="usepics"></img>

      <div className="matchDetail-contents2-box-rightside">
        <div className="matchDetail-c2box-rsline1">
          <h2>{'거주지'&&fetchedData2?.home+' 거주'}</h2>
          <h2>
            {/* 여자(T)/남자(F) */}
            {'성별'&&(fetchedData2?.gender? '여자' : '남자')} 
          </h2>
          <h2>
            {/* 대화 하면서 볼래요(전시관람스타일) */}
            {exhibitStyleData[fetchedData1?.style]?.value||'(전시관람스타일)'}
            </h2>
        </div>
        <div className="matchDetail-c2box-rsline2">
          {/* 회원가입폼-자기소개 */}
          <h3>{fetchedData2?.introduce||'자기소개글'}</h3>
          <h1>
            {fetchedData2?.nickname}
            {'유저*ID'&&`(${joinId})`}
          </h1>
        </div>
        <div className="matchDetail-c2box-rsline3">
          <h3>성격</h3>
          <div>
          {(fetchedData2?.personality || [0,1,2]).map((i,idx)=> <div key={idx}>{myStyleData[i]?.value+','}</div>)}
          </div>
        </div>
        {/* nth-child(4) */}
        <div className="matchDetail-c2box-rsline4">
          <h3>관심사</h3>
          <div>
          {(fetchedData2?.hobby||[0,1,2]).map((i,idx)=><div key={idx}>{myInterestData[i].value+','}</div>)}
          </div>
        </div>

        {/* nth-child(5) */}
        <div className="matchDetail-c2box-rsline5">
          <div className="matchDetail-temporature-button">
            <div>1메이트온도:</div>
            <div>2온도{fetchedData2?.temperature}</div>
            <div>3믿을 수 있는 메이트에요</div>
            <div>4온도프로그레스바</div>
          </div>
          <button onClick={matchApplication} className="matchDetail-matching-button">
            <div>매칭신청하기</div>
            <div>매칭을 통해,</div>
            <div>손아이콘</div>
            <div>부기님과 취향을 나눠보세요</div>
          </button>
        </div>
      </div>
    </div>
      <div className="matchDetail-c2box-notice">
        <div>노랑하트이미지</div>
        <div>메이트정보</div>
        <div>메이트정보</div>
        <div>메이트정보</div>
        <div>
          {/* <textarea>{fetchedData1}</textarea> */}
        </div>
        </div>
      </div>
  );
};

export default MatchDetailContents2;
