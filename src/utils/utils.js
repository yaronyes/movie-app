import axios from 'axios';

export const loadActors = async () => {
    try {
        return await axios.get("actors.json");    
    } catch (error) {
        console.log(error);
    }    
}