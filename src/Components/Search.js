import './search.css'
import { useState } from 'react';

function Search({ onSubmit }){
    const [term , setTerm] = useState('') ;
    
    const handleClick = (e) => {
        e.preventDefault();

        onSubmit(term)
    }

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    return(
        <div>
            <form onSubmit={ handleClick } className='container'>
                <label className='text'>Google Images</label>
            <input value={term} onChange={handleChange} className='input-box'></input>
            <button onClick={ handleClick } className='btn'>Search</button>
            </form>
        </div>
    )
}

export default Search;