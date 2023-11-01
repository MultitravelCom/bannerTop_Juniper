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
        const response = await axios.get('https://strapicontent.apimultitravel.com/api/banner-top-junipers?populate=*');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

fetchDataFromAPIStrapi();