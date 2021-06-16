import React from 'react';
import style from './searchbar.module.css';
import {FaSearch} from 'react-icons/fa'

export default function SearchBar ({input, setinput}){

    return(
        <div>
            <form className={style.fromContainer}>
                <div className={style.searchBarContainer}>
                    <input
                    type="text"
                    value={input}
                    placeholder="Type to search!!"
                    onChange
                    className={style.input}>
                    </input>
                    <div className={style.search}>
                        <button><FaSearch /></button>
                    </div>
                </div>
            </form>
        </div>
    )

}