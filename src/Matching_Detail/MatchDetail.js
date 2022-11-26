//매칭디테일페이지 전체 컴포넌트

import axios from "axios";
import { useEffect, useState } from "react";
import MatchDetailContents1 from "./MatchDetailContents1";
import MatchDetailContents2 from "./MatchDetailContents2";
import MatchDetailContents3 from "./MatchDetailContents3";
import { MatchListComponent } from "./MatchDetailContents3";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const TopNavBarItem = ({ title }) => {
  return (
    <div className="topNavBarItem">
      <h1>{title}</h1>
      <div className="under-line"></div>
    </div>
  );
};

//같은 js파일에 컴포넌트로 빼서 관리하기
function MatchDetail() {
  let useparam = useParams();
  let idParam = useparam.id;
  let [active1, setActive1] = useState("");
  let [active2, setActive2] = useState("");
  let [active3, setActive3] = useState("");
  let [tapIdx, setTapIdx] = useState(1);
  let [fetchedData1, setFetchedData1] = useState("");
  let [fetchedData2, setFetchedData2] = useState("");
  let [fetchedData3, setFetchedData3] = useState("");
 
  let navigate = useNavigate();
  let [listDisplayOption, setListDisplayOption] = useState("none");

  //매칭신청api =>컴포넌트 1,2에 하달 
  const matchApplication = async () => {try{
    let res = await axios.post(`/matching/${idParam}/application`,
      {
        "matching_check": "W",
        "evaluation_check": "W"
      })
    console.log(res.data);
    if (res.data.result == "이미 신청한 글입니다.") {
      alert('이미 신청한 글입니다.')
    } else if (res.data.result == "자신이 쓴 글은 신청할 수 없습니다.") {
      alert('본인이 작성한 게시글입니다.');
    } else alert('매칭을 신청했습니다')
  }catch(err){console.log(err.message)}
  }

  const onClick1 = () => {
    setActive1("_activate");
    setTimeout(() => {
      setActive2("");
    });
    setTimeout(() => {
      setActive3("");
    });
    setTimeout(() => {
      setTapIdx(1);
    });
    //1st data fetching ~ 상세페이지 렌더링과동시에
    matchInfoApi();
  };
  const onClick2 = () => {
    setActive1("");
    setTimeout(() => {
      setActive2("_activate");
    });
    setTimeout(() => {
      setActive3("");
    });
    setTimeout(() => {
      setTapIdx(2);
    });
    mateInfoApi();
  };
  const onClick3 = () => {
    setActive1("");
    setTimeout(() => {
      setActive2("");
    });
    setTimeout(() => {
      setActive3("_activate");
    });
    setTimeout(() => {
      setTapIdx(3);
    });
    participantsInfoApi();
    mateInfoApi();
  };

  //모집게시글(1) data 패칭 api
  const matchInfoApi = async () => {
    try {
      // const res = await axios.get(`/matching/${idx:게시글넘버}`)
      // const res = await axios.get(`/matching/${idParam}`)
      const res = await axios.get(`/matching/${idParam}`);
      // console.log(res.data);
      setFetchedData1(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  // console.log(idParam);
  // console.log(fetchedData1.id);
  // console.log(fetchedData2);

  //메이트정보(2) data 패칭 api
  const mateInfoApi = async () => {
    try {
      // const res = await axios.get(`/matching/${idx:게시글넘버}/mate`)
      const res = await axios.get(`/matching/${idParam}/mate`);
      // console.log(res.data);
      setFetchedData2(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  //참여자정보(3)) data 패칭 api
  const participantsInfoApi = async () => {
    try {
      // const res = await axios.get(`/matching/${idx:게시글넘버}/mate`)
      const res = await axios.get(`/matching/${idParam}/participants`);
      if (res.data.result !== "작성한 유저가 아닙니다.") {
        setListDisplayOption("");
      } else {
        setListDisplayOption("none");
      }
      setFetchedData3(res.data);
      if (res.data.result === "작성한 유저가 아닙니다."){
        alert("해당 게시글 작성자가 아닙니다.");
        navigate(`/match`);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(onClick1, []);
  return (
    <>
      <div>
        <div className="matchDetail-topNavBar-outer">
          <div className="matchDetail-topNavBar">
            <div className="matchDetail-topNavBar-inner">
              <div onClick={onClick1} className={`topNavBarItem1${active1}`}>
                <TopNavBarItem title={"모집 게시글 정보"} />
              </div>
              <div onClick={onClick2} className={`topNavBarItem2${active2}`}>
                <TopNavBarItem title={"메이트 정보"} />
              </div>
              <div onClick={onClick3} className={`topNavBarItem3${active3}`}>
                <TopNavBarItem title={"참여자 정보"} />
              </div>
            </div>
          </div>
        </div>
        <MatchDetailContents1 
          fetchedData1={fetchedData1}
          tapIdx={tapIdx}
          matchApplication={matchApplication} />

        <MatchDetailContents2 
          matchApplication={matchApplication}
          idParam={idParam}
          fetchedData1={fetchedData1}
          fetchedData2={fetchedData2}
          tapIdx={tapIdx}
        />
        <MatchDetailContents3
           idParam={idParam}
          listDisplayOption={listDisplayOption}
          fetchedData2={fetchedData2}
          fetchedData3={fetchedData3}
          tapIdx={tapIdx}
        />
      </div>
    </>
  );
}

export default MatchDetail;
