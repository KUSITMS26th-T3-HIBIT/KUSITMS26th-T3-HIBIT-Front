//매칭디테일페이지1 의 슬라이더

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TOTAL_SLIDES = 2; // 전체 슬라이드 개수(get으로 가져온 사진 수가 n개면 n부여 )
const Box = styled.div`
width: 440px;
height: 440px;
border-radius:10%;
background-image: url(${props=>props.imgUrl});
background-position: center;
background-size: cover;
scale:0.9;
background-repeat:no-repeat;
overflow-x:hidden;
`

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s';
    slideRef.current.style.transform = `translateX(-${currentSlide*440}px)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  //display:none 동적으로 할당
  return (<div style={{display:'flex',alignItems:'center',width:'500px'}}>
      <Button className='slider-button-left' onClick={PrevSlide}>
      <div style={{width:30,height:30,
        borderTop:'4px solid #5E1EC7',borderLeft:'4px solid #5E1EC7' ,transform:'rotate(-45deg)',position:'relative',
        right:50}}></div></Button>
    <Container>
      {/* <Text> */}
        {/* <h1>매칭게시글</h1> */}
        {/* <p>{currentSlide + 1}번 째 사진</p> */}
      {/* </Text> */}
      <SliderContainer ref={slideRef}>
        <Box imgUrl='/exhibit1.png'/>
        <Box imgUrl='/exhibit2.png'/>
        <Box imgUrl='/exhibit3.png'/>
        {/* <Box imgUrl='../exhibit2.png'/> */}
        {/* <Box imgUrl='../exhibit3.png'/> */}
      </SliderContainer>
    </Container>
        <Button className='slider-button-right' onClick={NextSlide}><div style={{width:30,height:30,
        borderTop:'4px solid #5E1EC7',borderLeft:'4px solid #5E1EC7' ,transform:'rotate(133deg)',position:'relative',
        right:20}}></div></Button>
        </div>
  );
}
const Container = styled.div`
  width: 440px;
  margin: auto;
  height: 446px;
  overflow:hidden;
  display:flex;
  // 선을 넘어간 이미지들은 숨겨줍니다.
`;
// overflow: hidden;
const Button = styled.div`
  width:30px;
  height:30px;
  display:inline-block;
  all: unset;
  // padding: 1em 2em;
  // margin: 2em 2em;
  // color: burlywood;
  // border-radius: 10px;
  // border: 1px solid burlywood;
  cursor: pointer;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display:inline-flex;
`;
