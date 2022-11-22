import { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import SliderImg from '../Global/Slider/Slider';
import MatchList from './Match/MatchList';
import SearchMatching from './Match/SearchMatching'

let MatchingMain = () => {
    let [searchInput, setSearchInput] = useState('');
    let navigate = useNavigate();


    return (
        <div className='match-main-section'>
            <SliderImg></SliderImg>
            <div className='match-main-search-container'>
                <div className='match-main-search'>
                    <input
                        className='match-main-search-input'
                        placeholder='원하는 매칭 키워드를 검색 해 보세요!'
                    />
                    <img
                        onClick={(e) => {
                            setSearchInput(e.target.value);
                            navigate('/match/search');
                            <Route path='/match/search' element={<SearchMatching searchInput={searchInput} />} />
                        }}
                        className='searchInput_icon'
                        src='/searchicon.png'
                    />

                </div>
            </div>

            <MatchList></MatchList>

        </div>
    )
}

export default MatchingMain;