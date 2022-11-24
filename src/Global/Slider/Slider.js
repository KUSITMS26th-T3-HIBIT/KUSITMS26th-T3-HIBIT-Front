import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


let SliderImg = () => {
    let navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };

    return (
        <div className='Slider-wrapper'>
            <div className='Slider'>
                <Slider {...settings} className='SliderBanner'>
                    <div
                        className='SliderBtn'
                        onClick={() => {
                            navigate('/');
                            window.scrollTo(0, 2600);
                        }}
                    >
                        <img className='SliderImg' src='/banner1.png' />
                    </div>
                    <div
                        className='SliderBtn'
                        onClick={() => {
                            navigate('/community');
                        }}
                    >
                        <img className='SliderImg' src='/banner2.png' />
                    </div>
                    <div className='SliderBtn'>
                        <img className='SliderImg' src='/banner3.png' />
                    </div>
                    <div
                        className='SliderBtn'
                        onClick={() => {
                            navigate('/match');
                        }}
                    >
                        <img className='SliderImg' src='/banner4.png' />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SliderImg;