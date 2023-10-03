import axios from "axios";

export async function fetchDataFromAPIStrapi() {
    try {
        const response = await axios.get('https://xatega9fpn.us-east-1.awsapprunner.com/api/banner-top-junipers?populate=*');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

fetchDataFromAPIStrapi();