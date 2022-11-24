import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SliderImg from '../Slider/Slider';
function Main(){
  let navigate = useNavigate();
  return (
    <div className='home-main-container'>
      <div className='main-img-wrapper'>
        <img className='mainImg' src='/main.png' />
      </div>
      <div className='Slider-wrapper'>
        <SliderImg />
      </div>
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
            <div
              className="home-main-section-contents"
              onClick={() => { navigate('/match') }}
            >
              <img className='home-main-section-routeimg' src='/routeMatching.png' />
              <div className="section-contents-left">
                <h1>매칭바로가기</h1>
                <pre>관람 스타일부터 성격까지.<br></br>
                  나와 취향이 맞는 전시 메이트를 지금 바로만나보세요.<br></br>00명의 메이트가 매칭에 성공했어요!
                </pre>
              </div>
              <div className="home-main-contents-img">
                <motion.div
                  initial={{ y: 40, opacity: 0, scale: 0 }}
                  animate={{ x: 0, y: 100, opacity: 0.5, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/beaming-face-with-smiling-eyes_1f601.png' />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="box1">
            <div className="home-main-section-title">
              <h1>오늘뭐하지?</h1>
              <h2>취향과 감각을 나눌 수 있는 메이트들을 찾고 있어요.</h2>
            </div>
            <div
              className="home-main-section-contents"
              onClick={() => { navigate('/community') }}
            >
              <img className='home-main-section-routeimg' src='/routeCommunity.png' />
              <div className="section-contents-left">
                <h1>커뮤니티 바로가기</h1>
                <pre>관람 스타일부터 성격까지.<br></br>
                  나와 취향이 맞는 전시 메이트를 지금 바로만나보세요.<br></br>00명의 메이트가 매칭에 성공했어요!
                </pre>
              </div>
              <div className="home-main-contents-img">
                <motion.div
                  initial={{ y: 40, opacity: 0, scale: 0 }}
                  animate={{ x: 0, y: 100, opacity: 0.5, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/face-with-monocle_1f9d0.png' />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        <div className='main-bottom-img-wrapper'>
          <img className='main-bottom-img' src='/mainBottom.png' />
        </div>

        <section className='home-bottom-section'>
          <div className='home-bottom-section-review'>
            <div className='home-bottom-section-review-up'>
              <div className='home-bottom-section-review-text'>
                <div className='home-bottom-section-review-title'>메이트들의 리뷰를 만나보세요.</div>
                <div className='home-bottom-section-review-description'>
                  어떤 주제든 괜찮아요. 좋아하는 주제로 모임을 만들고, 취향이 맞는 사람들을 초대해보세요.
                </div>
              </div>
              <img onClick={() => navigate('/match')} className='home-button-matching-btn' src='/main_matching_btn.png' />
            </div>
            <div className='home-bottom-section-review-down'>
              <div className='home-bottom-section-review-down-item'>
                <img className='home-bottom-section-review-down-img' src='/review1.png' />
                <img className='home-bottom-section-review-down-svg' src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/kissing-face_1f617.png' />
              </div>
              <div className='home-bottom-section-review-down-item'>
                <img className='home-bottom-section-review-down-img' src='/review2.png' />
                <img className='home-bottom-section-review-down-svg' src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/smiling-face-with-hearts_1f970.png' />
              </div>
              <div className='home-bottom-section-review-down-item'>
                <img className='home-bottom-section-review-down-img' src='/review3.png' />
                <img className='home-bottom-section-review-down-svg' src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/hugging-face_1f917.png' />
              </div>
              <div className='home-bottom-section-review-down-item'>
                <img className='home-bottom-section-review-down-img' src='/review4.png' />
                <img className='home-bottom-section-review-down-svg' src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/nerd-face_1f913.png' />
              </div>
            </div>
          </div>
          <hr></hr>
          <div className='home-bottom-section-community'>
            <div className='home-bottom-section-community-up'>
              <div className='home-bottom-section-community-text'>
                <div className='home-bottom-section-community-title'>커뮤니티를 통해 나누어 보세요.</div>
                <div className='home-bottom-section-community-description'>
                  초대를 받고 놀러 온 이들과는 즐겁게 대화하며 취향을 나눠 보세요.
                </div>
              </div>
              <img onClick={() => { navigate('/community') }} className='home-button-community-btn' src='/main_community_btn.png' />
            </div>
            <div className='home-bottom-section-community-down'>
              <div className='home-bottom-section-community-down-item'>
                <img className='home-bottom-section-community-down-img' src='/community1.png' />
                <img className='home-bottom-section-community-down-svg' src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/kissing-face_1f617.png' />
              </div>
              <div className='home-bottom-section-community-down-item'>
                <img className='home-bottom-section-community-down-img' src='/community2.png' />
                <img className='home-bottom-section-community-down-svg' src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/smiling-face-with-hearts_1f970.png' />
              </div>
              <div className='home-bottom-section-community-down-item'>
                <img className='home-bottom-section-community-down-img' src='/community3.png' />
                <img className='home-bottom-section-community-down-svg' src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/hugging-face_1f917.png' />
              </div>
              <div className='home-bottom-section-community-down-item'>
                <img className='home-bottom-section-community-down-img' src='/community4.png' />
                <img className='home-bottom-section-community-down-svg' src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/nerd-face_1f913.png' />
              </div>
            </div>

          </div>

        </section>

      </main>
    </div>)
}
export default Main;