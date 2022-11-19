//매칭디테일페이지 전체 컴포넌트

import {useEffect, useState} from 'react';
import { MatchDetailContents1 } from "./MatchDetailContents1";
import MatchDetailContents2 from './MatchDetailContents2'
import MatchDetailContents3 from './MatchDetailContents3';


const TopNavBarItem =({title})=>{  

  return(<div className='topNavBarItem'>
    <h1>{title}</h1>
    <div className="under-line"></div>
  </div>)
}
//같은 js파일에 컴포넌트로 빼서 관리하기
function MatchDetail() {
  let [active1,setActive1]=useState('');
  let [active2,setActive2]=useState('');
  let [active3,setActive3]=useState('');
  let [tapIdx,setTapIdx]=useState(1);

  const onClick1 =()=>{
    console.log(active1)
    setActive1('_activate');
    setTimeout(()=>{setActive2('')})
    setTimeout(()=>{setActive3('')})
    setTimeout(()=>{setTapIdx(1)})
  }
  const onClick2 =()=>{
    setActive1('');
    setTimeout(()=>{setActive2('_activate')})
    setTimeout(()=>{setActive3('')})
    setTimeout(()=>{setTapIdx(2)})
  }
  const onClick3 =()=>{
    setActive1('');
    setTimeout(()=>{setActive2('')})
    setTimeout(()=>{setActive3('_activate')})
    setTimeout(()=>{setTapIdx(3)})
  }

  useEffect(onClick1,[]);
  return (
    <>
    <div>
      <div className="matchDetail-topNavBar-outer">
        <div className="matchDetail-topNavBar">
          <div className="matchDetail-topNavBar-inner">
            <div onClick={onClick1} className={`topNavBarItem1${active1}`}>
              <TopNavBarItem title={'모집 게시글 정보'}/>
            </div>
            <div  onClick={onClick2} className={`topNavBarItem2${active2}`}>
              <TopNavBarItem title={'메이트 정보'}/>
            </div>
            <div  onClick={onClick3} className={`topNavBarItem3${active3}`}>
              <TopNavBarItem  title={'참여자 정보'}/>
            </div>
          </div>
        </div>
      </div>
      <MatchDetailContents1 tapIdx={tapIdx}/>
      <MatchDetailContents2 tapIdx={tapIdx}/>
      <MatchDetailContents3 tapIdx={tapIdx}/>

          </div>
    </>
  );
}

export default MatchDetail;
