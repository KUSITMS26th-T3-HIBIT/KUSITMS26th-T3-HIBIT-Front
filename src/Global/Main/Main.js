import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {ReactComponent as GrinningFace} from '../../svg/GrinningFace.svg';
function Main(){
  let navigate = useNavigate();
  return(<>
  <main>
        {/* flexset */}
        <section className="home-main-section">
          <div className="box1">
            <div className="home-main-section-title">
            <h1>
              나와 취향이 맞는 메이트를 찾고 계신가요?
            </h1>
            <h2>그런 우리가 모일 수 있도록 히빗이 도와드릴게요</h2>
          </div>
          <div className="home-main-section-contents">
            <div className="section-contents-left">
              <h1 onClick={()=>{navigate('/match')}}>매칭바로가기</h1>
              <pre>관람 스타일부터 성격까지.<br></br>
                나와 취향이 맞는 전시 메이트를 지금 바로만나보세요.<br></br>00명의 메이트가 매칭에 성공했어요!
              </pre>
            </div>
            <div className="home-main-contents-img">
              <div>
                <motion.div
                  initial={{ y: 40, opacity: 0,scale:0 }}
                  animate={{ x: 0, y: 100, opacity: 0.5,scale:1 }}
                  transition={{duration: 1.5}}
                  whileHover={{scale:1.1}}
                >
                  <GrinningFace width="200" height="200"></GrinningFace>
                </motion.div>
              </div>
            </div>
          </div>
          </div>
          <div className="box1">
          <div className="home-main-section-title">
          <h1>오늘뭐하지?</h1>
              <h2>취향과 감각을 나눌 수 있는 메이트들을 찾고 있어요.</h2>
          </div>
          <div className="home-main-section-contents">
            <div className="section-contents-left">
            <h1 onClick={()=>{navigate('/community')}}>커뮤니티 바로가기</h1>
            <pre>관람 스타일부터 성격까지.<br></br>
                나와 취향이 맞는 전시 메이트를 지금 바로만나보세요.<br></br>00명의 메이트가 매칭에 성공했어요!
              </pre>
            </div>
            <div className="home-main-contents-img">
            <motion.div
                  initial={{ y: 40, opacity: 0,scale:0 }}
                  animate={{ x: 0, y: 100, opacity: 0.5,scale:1 }}
                  transition={{duration: 1.5}}
                  whileHover={{scale:1.1}}
                >
                <GrinningFace width="200" height="200"></GrinningFace>
              </motion.div>
            </div>
          </div>
          </div>
        </section>
      </main></>)
}
export default Main;