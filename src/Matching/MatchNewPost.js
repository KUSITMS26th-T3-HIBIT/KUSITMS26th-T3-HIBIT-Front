import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemsCarousel from "react-items-carousel";

//라인 1,6,7class의 input태그 글자수 제한 , 상태관리값
function numberMaxLength(e) {
  if (e.value.length > e.maxLength) {
    e.value = e.value.slice(0, e.maxLength);
  }
}

const MatchNewPost = () => {
  // states
  let [exhibitName, setExhibitName] = useState("");
  let [exhibitCategory, setExhibitCategory] = useState("");
  let [recruitNum, setRecruitNum] = useState();
  let [wishDate1, setWishDate1] = useState();
  let [wishDate2, setWishDate2] = useState();
  let [urlString, setUrlString] = useState();
  let [preferMateText, setPreferMateText] = useState();
  let [recruitText, setRecruitText] = useState("");
  let [imageChooseState, setImageChooseState] = useState("");
  let [chosenImage, setChosenImage] = useState("");

  let navigate = useNavigate();
  // react-items-carousel
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 10;
  const ItemsCarouselChoose = () => {};

  return (
    <>
      <div className="MatchNewPost-background-gray">
        <div className="MatchNewPost-background-white">
          <div className="MatchNewPost-gridbox">
            <div className="MatchNewPost-gridbox-line1">
              <span>전시회 명</span>
              <div>
                <span>0/20</span>
                <input></input>
                {/* <div className="input-floatover">0/20</div> */}
              </div>
            </div>

            <div className="MatchNewPost-gridbox-line2">
              <span>전시회 카테고리</span>
              <select>
                <option></option>
                <option>첫 번쨰항목</option>
                <option>두 번째항목</option>
                <option>세 번째항목</option>
                <option>네 번째항목</option>
                <option>다섯 번째항목</option>
              </select>
            </div>

            <div className="MatchNewPost-gridbox-line3">
              <span>모집 인원</span>
              <div className="MatchNewPost-gridbox-line3-inner">
                <div className="onclick">둘이서</div>
                <div className="onclick">셋이서</div>
                <div className="onclick">넷이서</div>
              </div>
            </div>

            <div className="MatchNewPost-gridbox-line4">
              <span>희망관람기간</span>
              <div className="MatchNewPost-gridbox-line4-inner">
                <input type="date"></input>
                <span>~</span>
                <input type="date"></input>
              </div>
            </div>

            <div className="MatchNewPost-gridbox-line5">
              <span>오픈채팅URL</span>
              <input type="text" onChange={() => {}}></input>
            </div>

            <div className="MatchNewPost-gridbox-line6">
              <span>선호하는 메이트</span>
              <span>0/200</span>
              <textarea
                type="text"
                placeholder="메이트에게 바라는 점, 함께 하고 싶은 메이트의 유형 등을 작성하면
매칭 성공률이 높아져요."
              ></textarea>
            </div>

            <div className="MatchNewPost-gridbox-line7">
              <span>모집 내용</span>
              <span>0/200</span>
              <textarea
                type="text"
                placeholder="본인의 전시 관람 스타일, 메이트를 구하는 목적을 자세히 작성하면
매칭 성공률이 높아져요."
              ></textarea>
            </div>

            <div className="MatchNewPost-gridbox-line8">
              <span>이미지 선택</span>
              {/* 리액트아이템케러셀 */}
              <div
                style={{
                  width: "510px",
                  height: "100px",
                  padding: `0 ${chevronWidth}px`,
                }}
              >
                <ItemsCarousel
                  requestToChangeActive={setActiveItemIndex}
                  infiniteLoop="true"
                  activeItemIndex={activeItemIndex}
                  numberOfCards={3}
                  gutter={10}
                  leftChevron={<button>{"<"}</button>}
                  rightChevron={<button>{">"}</button>}
                  outsideChevron
                  chevronWidth={chevronWidth}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        borderRadius: "20px",
                        height: 170,
                        width: 170,
                        backgroundImage: `URL(https://codingapple1.github.io/shop/shoes${item}.jpg)`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      {" "}
                      {item} card
                    </div>
                  ))}
                </ItemsCarousel>
              </div>
            </div>

            <div className="MatchNewPost-gridbox-line9">
              <span>선택된 이미지</span>
              <div
                style={{
                  width: 164,
                  borderRadius: "20px",
                  height: 164,
                  background: "#EEE",
                }}
              >
                {" "}
                7 card{" "}
              </div>
            </div>

            <div className="MatchNewPost-gridbox-line10">
              <div className="MatchNewPost-gridbox-line10-inner">
                <span>발행하기</span>
              </div>
            </div>

            {/* //화살표버튼  */}
            <div
              onClick={() => navigate("/match")}
              className="MatchNewPost-pageupbutton-circle"
            >
              <div className="MatchNewPost-pageupbutton-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchNewPost;
