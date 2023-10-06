import axios from "axios";

// Define la estructura de tus datos
type DataItem = {
  id: number;
  attributes: {
    Vertical: string[];
    // Otros atributos aquí
  };
};

export const getImageUrlForPositionDesktop = (data: any, position: string) => {
  const positionData = data.data.find(
    (item: any) => item.attributes.Ubicacion === position
  );

  return positionData
    ? positionData.attributes.Imagen_Desktop.data[0].attributes.url
    : "";
};

export const getImageUrlForPositionMobile = (data: any, position: string) => {
  const positionData = data.data.find(
    (item: any) => item.attributes.Ubicacion === position
  );
  return positionData
    ? positionData.attributes.Imagen_Mobile.data[0].attributes.url
    : "";
};

export const getVerticalData = (data: any, position: string) => {
  const positionData = data.data.find(
    (item: any) => item.attributes.Ubicacion === position
  );

  console.log(" getVerticalData ---->>>", positionData.attributes.Vertical);
  return positionData && positionData.attributes.Vertical
    ? positionData.attributes.Vertical
    : [];
};

export const combineVerticalDataForPositions = (
  data: any,
  positions: string[]
) => {
  const combinedData: any[] = [];

  positions.forEach((position: string) => {
    const verticalData = getVerticalData(data, position);

    if (verticalData && verticalData.length > 0) {
      combinedData.push(...verticalData);
    }
  });

  const uniqueData = combinedData.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  console.log("---->>>", uniqueData);

  return uniqueData;
};

export const getUrlLinkImage = (data: any, position: string) => {
  const positionData = data.data.find(
    (item: any) => item.attributes.Ubicacion === position
  );

  console.log("---->>>", positionData.attributes.Link_Imagen);

  return positionData ? positionData.attributes.Link_Imagen : "";
};

// Obtén los datos de la API
export async function fetchDataFromAPIStrapi(): Promise<DataItem[]> {
  try {
    const response = await axios.get<DataItem[]>('https://xatega9fpn.us-east-1.awsapprunner.com/api/banner-top-junipers?populate=*');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Filtra los elementos que contienen "Paquetes" en la propiedad Vertical
export async function obtenerElementosPaquetes(): Promise<DataItem[]> {
  const data = await fetchDataFromAPIStrapi();

  const elementosPaquetes = data.filter((item) => {
    return item.attributes.Vertical.includes("Paquetes");
  });
console.log("elementosPaquetes ---->>",elementosPaquetes)
  return elementosPaquetes;
}

obtenerElementosPaquetes()