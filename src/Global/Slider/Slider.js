import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

let Slider = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1}
    };

    return (
        <div className='Slider'>
            <div width='1920' height='600'>
                <Carousel responsive={responsive}>
                    <img width='1920' height='600' src='/slideimg1.jpg' />
                    <img width='1920' height='600' src='/slideimg2.jpg' />
                    <img width='1920' height='600' src='/slideimg3.jpg' />
                    <img width='1920' height='600' src='/slideimg4.jpg' />
                    <img width='1920' height='600' src='/slideimg5.jpg' />
                </Carousel>
            </div>


        </div>
    )
}

export default Slider;