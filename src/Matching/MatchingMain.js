import { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import Slider from '../Global/Slider/Slider';
import MatchList from './Match/MatchList';
import SearchMatching from './Match/SearchMatching'

let MatchingMain = () => {
    let [searchInput, setSearchInput] = useState('');
    let navigate = useNavigate();


    return (
        <div className='MatchMain'>
            <Slider></Slider>
            <div className='searchInput'>
                <img className='searchInput_ui' src='/searchInput.png'/>
                <input 
                    className='searchInput_input'
                    placeholder='원하는 매칭을 검색 해 보세요' 
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

            <MatchList></MatchList>

        </div>
    )
}

export default MatchingMain;