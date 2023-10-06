import axios from "axios";

type DataItem = {
    id: number;
    attributes: {
      Vertical: string[];
      // Otros atributos aquí
    };
  };

export async function fetchDataFromAPIStrapi(): Promise<DataItem[]> {
    try {
        const response = await axios.get('https://xatega9fpn.us-east-1.awsapprunner.com/api/banner-top-junipers?populate=*');
        console.log("response---->",response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

fetchDataFromAPIStrapi();