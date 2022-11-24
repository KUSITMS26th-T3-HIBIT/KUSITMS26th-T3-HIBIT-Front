import { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import SliderImg from '../Global/Slider/Slider';
import Community from './Community';
import SearchCommunity from './SearchCommunity'

let CommunityMain = () => {
    let [searchInput, setSearchInput] = useState('');
    let navigate = useNavigate();


    return (
        <div className='community-main-section'>
            <SliderImg></SliderImg>
            <div className='community-main-search-container'>
                <div className='community-main-search'>
                    <input
                        className='community-main-search-input'
                        placeholder='원하시는 커뮤니티 키워드를 검색 해보세요!'
                    />
                    <img
                        className='community-main-search-input-icon'
                        onClick={(e) => {
                            setSearchInput(e.target.value);
                            navigate('/community/search');
                            <Route path='/community/search' element={<SearchCommunity searchInput={searchInput} />} />
                        }}
                        src='/searchicon-yellow.png'
                    />

                </div>
            </div>

            <Community></Community>

        </div>
    )
}

export default CommunityMain;