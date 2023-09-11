import axios from "axios";

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 5_o1j2fGPwMLkeoz6NyI0kNZ-fj-wkhTyS_FAV9agO4'
        } , 
        params : {
            query: term
        }
    });

    return response.data.results;
}

export default searchImage ;