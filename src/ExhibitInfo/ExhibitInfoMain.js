import { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import SliderImg from '../Global/Slider/Slider';
import ExhibitInfo from './ExhibitInfo';
import SearchExhibitInfo from './SearchExhibitInfo'

let ExhibitInfoMain = () => {
    let [searchInput, setSearchInput] = useState('');
    let navigate = useNavigate();


    return (
        <div className='exhibit-info-main-section'>
            <SliderImg></SliderImg>
            <div className='exhibit-info-main-search-container'>
                <div className='exhibit-info-main-search'>
                    <input
                        className='exhibit-info-main-search-input'
                        placeholder='찾으시는 전시 키워드를 검색 해보세요!'
                    />
                    <img
                        className='exhibit-info-main-search-input-icon'
                        onClick={(e) => {
                            setSearchInput(e.target.value);
                            navigate('/exhibitinfo/search');
                            <Route path='/exhibitinfo/search' element={<SearchExhibitInfo searchInput={searchInput} />} />
                        }}
                        src='/searchicon-purple.png'
                    />

                </div>
            </div>

            <ExhibitInfo></ExhibitInfo>

        </div>
    )
}

export default ExhibitInfoMain;