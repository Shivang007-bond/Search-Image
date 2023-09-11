import './App.css'
import { useState } from 'react'
import Search from "./Components/Search"
import ImageList from "./Components/ImageList"
import searchImage from './Api'


function App(){
    const [image, setImage] = useState([]);

    const handleSubmit = async (term) => {
       const result = await searchImage(term)

       setImage(result)

    }

    return (
        <div className='main'>
            <Search onSubmit={handleSubmit}/>
            <ImageList image = {image}/>

        </div>
    )
}

export default App