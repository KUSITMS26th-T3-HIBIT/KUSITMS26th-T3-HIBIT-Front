import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemsCarousel from "react-items-carousel";
import exhibit_category_data from "../Global/Data/exhibit_category_data";
import person_num_type_data from "../Global/Data/person_num_type_data";
import axios from "axios";

//라인 1,6,7class의 input태그 글자수 제한 , 상태관리값
function numberMaxLength(e) {
  if (e.value.length > e.maxLength) {
    e.value = e.value.slice(0, e.maxLength);
  }
}


const MatchNewPost = () => {

  let [title, setTitle] = useState('');
  let [exhibitName, setExhibitName] = useState('');
  let [area, setArea] = useState('');
  let [personNum, setPersonNum] = useState(0);
  let [startDate, setStartDate] = useState('');
  let [endDate, setEndDate] = useState('');
  let [openUrl, setOpenUrl] = useState('');
  let [preferMate, setPreferMate] = useState('');
  let [recruitText, setRecruitText] = useState('');
  let [selectedImg, setSelectedImg] = useState(1);


  let navigate = useNavigate();

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 10;
  const imgState = [1, 2, 3, 4];
  const ItemsCarouselChoose = () => {};

  useEffect(()=>{
    console.log(area);
  }, [area]);

  return (
    <>
      <div className="MatchNewPost-background-gray">
        <div className="MatchNewPost-background-white">
          <div className="MatchNewPost-gridbox">
            <div className="MatchNewPost-gridbox-line0">
              <span>제목</span>
              <div>
                <span>{title.length}/20</span>
                <input className="MatchNewPost-title-input"
                  value={title}
                  onChange={(e)=>{
                    setTitle(e.target.value);
                    console.log(title);
                  }}  
                />
              </div>
            </div>
            <div className="MatchNewPost-gridbox-line1">
              <span>전시회 명</span>
              <div>
                <span>{exhibitName.length}/20</span>
                <input className="MatchNewPost-exhibitName-input"
                  value={exhibitName}
                  onChange={(e)=>{
                    setExhibitName(e.target.value);
                    console.log(exhibitName);
                  }}  
                />
              </div>
            </div>

            <div className="MatchNewPost-gridbox-line2">
              <span>관람 지역</span>
              <select 
                className="MatchNewPost-gridbox-line2-select" 
                name='city' 
                onChange={(e) => { setArea(e.target.value) }}
              >
                <option value=''>----</option>
                <option value='강남구'>강남구</option>
                <option value='강동구'>강동구</option>
                <option value='강서구'>강서구</option>
                <option value='강북구'>강북구</option>
                <option value='관악구'>관악구</option>
                <option value='광진구'>광진구</option>
                <option value='구로구'>구로구</option>
                <option value='금천구'>금천구</option>
                <option value='노원구'>노원구</option>
                <option value='동대문구'>동대문구</option>
                <option value='도봉구'>도봉구</option>
                <option value='동작구'>동작구</option>
                <option value='마포구'>마포구</option>
                <option value='서대문구'>서대문구</option>
                <option value='성동구'>성동구</option>
                <option value='성북구'>성북구</option>
                <option value='서초구'>서초구</option>
                <option value='송파구'>송파구</option>
                <option value='영등포구'>영등포구</option>
                <option value='용산구'>용산구</option>
                <option value='양천구'>양천구</option>
                <option value='은평구'>은평구</option>
                <option value='종로구'>종로구</option>
                <option value='중구'>중구</option>
                <option value='중랑구'>중랑구</option>
              </select>
            </div>

            <div className="MatchNewPost-gridbox-line3">
              <span>모집 인원</span>
              <div className="MatchNewPost-gridbox-line3-inner">
                {
                  person_num_type_data.map((d, i) => {
                    return (
                      <div
                        className={`MatchNewPost-gridbox-line3-item${(d.value === personNum ? "Active" : "")}`}
                        onClick={()=>{
                          setPersonNum(d.value);
                          console.log(d.value);
                        }}   
                      >{d.str}</div>
                    )
                  })
                }
              </div>
            </div>

            <div className="MatchNewPost-gridbox-line4">
              <span>희망관람기간</span>
              <div className="MatchNewPost-gridbox-line4-inner">
                <input 
                  type="date"
                  value={startDate || ''}
                  onChange={(e)=>setStartDate(e.target.value)}
                />
                <span>~</span>
                <input 
                  type="date"
                  value={endDate || ''}
                  onChange={(e)=>setEndDate(e.target.value)}
                />
              </div>
            </div>

            <div className="MatchNewPost-gridbox-line5">
              <span>오픈채팅URL</span>
              <input 
                type="text" 
                onChange={(e) => setOpenUrl(e.target.value)}
              />
            </div>

            <div className="MatchNewPost-gridbox-line6">
              <span>선호하는 메이트</span>
              <span>{preferMate.length}/200</span>
              <textarea
                type="text"
                placeholder="메이트에게 바라는 점, 함께 하고 싶은 메이트의 유형 등을 작성하면 매칭 성공률이 높아져요."
                value={preferMate}
                onChange={(e)=> setPreferMate(e.target.value)}
              />
            </div>

            <div className="MatchNewPost-gridbox-line7">
              <span>모집 내용</span>
              <span>{recruitText.length}/200</span>
              <textarea
                type="text"
                placeholder="본인의 전시 관람 스타일, 메이트를 구하는 목적을 자세히 작성하면 매칭 성공률이 높아져요."
                value={recruitText}
                onChange={(e)=> setRecruitText(e.target.value)}
              />
            </div>

            <div className="MatchNewPost-gridbox-line8">
              <span>이미지 선택</span>
              {/* 리액트아이템케러셀 */}
              <div
                style={{
                  width: "500px",
                  height: "100px",
                  padding: `0 ${chevronWidth}px`,
                }}
              >
                <ItemsCarousel
                  requestToChangeActive={setActiveItemIndex}
                  infiniteLoop={true}
                  activeItemIndex={activeItemIndex}
                  numberOfCards={3}
                  gutter={10}
                  leftChevron={<img src="/leftArrow.png" width='30px'/>}
                  rightChevron={<img src="/rightArrow.png" width='30px'/>}
                  outsideChevron={true}
                  chevronWidth={chevronWidth}
                >
                  {imgState.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={()=>setSelectedImg(item)}
                      style={{
                        borderRadius: "20px",
                        height: 150,
                        width: 150,
                        backgroundImage: `URL(/exhibit${item}.png)`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  ))}
                </ItemsCarousel>
              </div>
            </div>

            <div className="MatchNewPost-gridbox-line9">
              <span>선택된 이미지</span>
              <div
                style={{
                  height: 150,
                  width: 150,
                  margin: "10px",
                  borderRadius: "20px",
                  backgroundImage: `URL(/exhibit${selectedImg}.png)`,
                  background: "#EEE",
                }}
              />
            </div>

            <div className="MatchNewPost-gridbox-line10">
              <button
                className="MatchNewPost-gridbox-line10-inner"
                onClick={() => {
                  axios.post('/matching/post', {
                    title: title,
                    exhibition: exhibitName,
                    content: recruitText,
                    area: area,
                    number: personNum,
                    start_date: startDate,
                    finish_date: endDate,
                    finish: false,
                    openchat: openUrl,
                    want: preferMate
                  })
                    .then((res) => {
                      console.log(res);
                      console.log(res.data);
                      console.log(res.status);
                      alert('매칭 게시글이 작성되었습니다.');
                      navigate("/match");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >발행하기</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default MatchNewPost;
