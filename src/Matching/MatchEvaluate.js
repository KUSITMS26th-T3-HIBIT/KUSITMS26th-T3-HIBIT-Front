import React from "react";
import { useState } from "react";
const EvalStyleList = [
  { id: 0, value: "대화가 잘 통해요" },
  { id: 1, value: "예술을 잘 알아요" },
  { id: 2, value: "사진을 잘 찍어요" },
  { id: 3, value: "맛집을 잘 알아요" },
  { id: 4, value: "배려심이 좋아요" },
  { id: 5, value: "취향이 비슷해요" },
];

const MatchEvaluate = () => {
  //1번째점수
  let [firstState, setFirstState] = useState(0);
  let [secondState, setSecondState] = useState(0);

  let [myEvalList, setMyEvalList] = useState([]);
  return (
    <div className="App">
      <div className="matchEstimate-info">
        <div className="matchEstimate-info-title">
          <div>메이트정보</div>
        </div>
        <div className="matchEstimate-info-contentsbox">
          <div className="matchEstimate-info-contentsbox-leftImg"></div>
          <div className="matchEstimate-info-contentsbox-right">
            <div className="matchEstimate-info-contentsbox-right-line1">
              <h2>서울 영등포구 거주</h2>
              <h2> 여자 </h2>
              <h2>대화 하면서 볼래요</h2>
            </div>
            <div className="matchEstimate-info-contentsbox-right-line2">
              <h3>커피와 햇살이 있는 공간, 다채로운 색감을 좋아해요.</h3>
              <h1>부기(Boo**ee)</h1>
            </div>

            <div className="matchEstimate-info-contentsbox-right-line3">
              <h3>성격</h3>
              <div>
                {["ESTP", "ESFP", "탐구형", "성장형", "행동파"].map(
                  (item, id) => (
                    <div key={id}>{item + ","}</div>
                  )
                )}
              </div>
            </div>

            <div className="matchEstimate-info-contentsbox-right-line4">
              <h3>관심사</h3>
              <div>
                {["디자인", "드로잉", "사진", "여행", "동물", "기록"].map(
                  (item, id) => (
                    <div key={id}>{item + ","}</div>
                  )
                )}
              </div>
            </div>

            <div className="matchEstimate-info-contentsbox-right-line5">
              <div>메이트온도</div>
              <div>
                <div className="matchEstimate-info-contentsbox-right-line5-progressbar">
                  {/* js로 width조절 */}
                  <div className="matchEstimate-info-contentsbox-right-line5-progressbar-inner"></div>
                </div>
                <div>42˚C</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ margin: "auto" }}
        className="matchEstimate-theOther-outline"
      >
        <div className="matchEstimate-theOther-title">
          <div>매칭 상대 평가하기</div>
        </div>

        <div className="matchEstimate-theOther-contentsBox-outline">
          <div className="matchEstimate-theOther-contents2">
            <div>시간 약속 지수</div>
            <div className="matchEstimate-theOther-contents2-progressBox">
              <div className="matchEstimate-theOther-contents2-progressBox-inner">
                <div
                style={{
                  backgroundColor: firstState === 1 ? "#7E5DEB" : "#FFFFFF",
                }}
                onClick={() => setFirstState(1)}
                >
                  <div>1</div>
                </div>
                <span></span>
                <div
                style={{
                  backgroundColor: firstState === 2 ? "#7E5DEB" : "#FFFFFF",
                }}
                onClick={() => setFirstState(2)}
                >
                  <div>2</div>
                </div>
                <span></span>
                <div
                style={{
                  backgroundColor: firstState === 3 ? "#7E5DEB" : "#FFFFFF",
                }}
                onClick={() => setFirstState(3)}
                >
                  <div>3</div>
                </div>
                <span></span>
                <div
                style={{
                  backgroundColor: firstState === 4 ? "#7E5DEB" : "#FFFFFF",
                }}
                onClick={() => setFirstState(4)}
                >
                  <div>4</div>
                </div>
                <span></span>
                <div
                style={{
                  backgroundColor: firstState === 5 ? "#7E5DEB" : "#FFFFFF",
                }}
                onClick={() => setFirstState(5)}
                >
                  <div>5</div>
                </div>
              </div>
              {/* click이벤트시 className=>onClick추가 */}
              {/* 나머지 setState  */}
            </div>
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="matchEstimate-theOther-contentsBox-outline">
          <div className="matchEstimate-theOther-contents2">
            <div>전반적인 매너 지수</div>
            <div className="matchEstimate-theOther-contents2-progressBox">
              <div className="matchEstimate-theOther-contents2-progressBox-inner">
                <div
                style={{
                  backgroundColor: secondState === 1 ? "#7E5DEB" : "#FFFFFF",
                }}
                onClick={() => setSecondState(1)}
                >
                  <div>1</div>
                </div>
                <span></span>
                <div
                style={{
                  backgroundColor: secondState === 2 ? "#7E5DEB" : "#FFFFFF",
                }}
                onClick={() => setSecondState(2)}
                >
                  <div>2</div>
                </div>
                <span></span>
                <div
                style={{
                  backgroundColor: secondState === 3 ? "#7E5DEB" : "#FFFFFF",
                }}
                onClick={() => setSecondState(3)}
                >
                  <div>3</div>
                </div>
                <span></span>
                <div
                style={{
                  backgroundColor: secondState === 4 ? "#7E5DEB" : "#FFFFFF",
                }}
                onClick={() => setSecondState(4)}
                >
                  <div>4</div>
                </div>
                <span></span>
                <div
                style={{
                  backgroundColor: secondState === 5 ? "#7E5DEB" : "#FFFFFF",
                }}
                onClick={() => setSecondState(5)}
                >
                  <div>5</div>
                </div>
              </div>
              {/* click이벤트시 className=>onClick추가 */}
              {/* 나머지 setState  */}
            </div>
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="matchEstimate-theOther-contents3">
          <div className="matchEstimate-theOther-contents3-left">
            <div>평가 타이틀</div>
            <div>다음 항목 중</div>
            <div>최대 세 개를 골라주세요!</div>
          </div>

          <div className="matchEstimate-theOther-contents3-right-itembox">
            {EvalStyleList.map((a, i) => {
              return (
                <div
                  key={i}
                  className={`matchEstimate-theOther-contents3-right-item${
                    myEvalList.includes(i) ? "Active" : ""
                  }`}
                  onClick={() => {
                    //이벤트핸들러 로직에 검증 추가
                    //순회 후 완성된 환경에서 생각해야함.
                    let copy = [...myEvalList];
                    if (myEvalList.length > 2) {
                      if (copy.includes(i)) {
                        copy = myEvalList.filter((elem) => {
                          return elem !== i;
                        });
                        setMyEvalList(copy);
                      }
                    }
                    //선택항목 클릭시 중복제거코드
                    else {
                      if (copy.includes(i)) {
                        copy = myEvalList.filter((elem) => {
                          console.log(elem);
                          return elem !== i;
                        });
                        setMyEvalList(copy);
                      } else setMyEvalList([...myEvalList, i]);
                    }
                    console.log(myEvalList);
                  }}
                >
                  {EvalStyleList[i].value}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="matchEstimate-theOther-postEvalScore">
        <div>평가하기</div>
      </div>
      {/* + //화살표버튼// */}
      <div
        onClick={() =>{
          console.log('up')
        
          window.scrollTo({top:100, behavior:'smooth',}
        )}
        }
        className="MatchNewPost-pageupbutton-circle"
      >
        <div className="MatchNewPost-pageupbutton-arrow"></div>
      </div>
    </div>
  );
};


export default MatchEvaluate;