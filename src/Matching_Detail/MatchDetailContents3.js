import React, { useEffect,useState } from "react";
import axios from 'axios';

import { useNavigate } from "react-router-dom";
export const MatchListComponent = ({listDisplayOption, item,idParam}) => {

  //렌더링시 리스트가 수락/거절 상태면 visibility:hidden부여 초기값은 "W"상태
  let [buttonIsHidden,setButtonIsHidden] =useState('');
  //버튼 클릭시 수락/거절을 hidden으로 바꿔줄 state
  let [clickHidden,setClickHidden] =useState('');

  let navigate= useNavigate();
  // 거부 수락 api작성중   쿼리스트링 : idx:idParam , nickname form whre?
  //같은 요청에 대해 body다른 값만 담아서 보내면 수락 :'T' ,거절 'F'리턴
  const matchAccept = async () => {
    let isconFirm = window.confirm('매칭을 수락하시겠습니까?');
    if (isconFirm===true){
    let res = await axios.put(`matching/${idParam}/participants?nickname=${item?.user}`,{
      "matching_check": "T",
      "evaluation_check": "W"
    })
    setClickHidden('hidden');
    console.log(res.data);
    } return;
  }
  const matchReject = async () => {
    let isconFirm = window.confirm('정말 매칭을 거절하시겠습니까?');
    if (isconFirm===true){
    let res = await axios.put(`matching/${idParam}/participants?nickname=${item?.user}`,{
      "matching_check": "F",
      "evaluation_check": "W"
    })
    setClickHidden('hidden');
    //return "F"
    console.log(res.data);}
    // setTimeout(()=>console.log(isRejected));
  }
  
  //무한렌더링방지: useEffect로 감싸주지않으면 buttonIsHidden state가 변경될 때마다 계속 콜백 실행=>리렌더링
    useEffect(()=>{ if(item?.matching_check!=="W") 
    {setButtonIsHidden('-hidden')}
  } ,[buttonIsHidden])
  

console.log(item.user);
  // item?.matching_check=="T" => 수락버튼(colorize)+ 평가하기 활성화(idDisabled: false
  // item?.matching_check=="F" => right-box visibilty:hidden+ 평가하기 활성화(idDisabled: false
  //데이터 패칭시 상태값 확인 후 UI조정하는 step + 수락/거절 클릭시 동적으로 UI조정하는 step => Persist한 상태 관리 ok
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

          <div className={`matchListComponent-box-left-matchstate${item?.matching_check}`}>
              {(item?.matching_check === "W") ? '매칭 대기' : 
                (item?.matching_check === "T") ? '매칭 완료' : '매칭 거부'}
          </div>
        </div>
        <div className={`matchListComponent-box-right`} >
          <div className={`matchListComponent-box-right-item1${buttonIsHidden}`} style={{
            visibility:`${clickHidden}`}}>
            <div onClick={matchAccept}>
              수락
              </div>
          </div>
          <div className={`matchListComponent-box-right-item2${buttonIsHidden}`} style={{
            visibility:`${clickHidden}`}}>
            <div onClick={matchReject}>거부</div>
          </div>
          <button onClick={()=>{
            if (item?.matching_check==="T") {
              if(window.confirm(`${item?.user||'임의의유저'}님의 매너온도를 평가하시겠습니까?`)){navigate(`/match/eval/${idParam}`)}
              else return;
            }
            else {alert("매칭을 수락한 상대만 평가할 수 있습니다.")}      
          }}
            className="matchListComponent-box-right-item3">
            <div >평가하기</div>
          </button>
        </div>
      </div>
    </div>
  );
        }
const MatchDetailContents3 = ({ tapIdx,fetchedData2, fetchedData3,idParam}) => {
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
                <div>모집자</div>
              </div>
              <div>
                {/* 닉네임,아이디 망고피자(pizzalover)  */}
                <span>{fetchedData2?.nickname}</span>
                <span>{`(${joinId})`}</span>
              </div>
            </div>
          </div>
        </div>
        {/* 서버데이터 패칭후 map으로 렌더링 */}
        {(fetchedData3?.List||[]).map((item,idx) =><MatchListComponent idParam={idParam} key={item.idx} item={item}/>)}
      </div>
    </div>
  );
};

export default MatchDetailContents3;
