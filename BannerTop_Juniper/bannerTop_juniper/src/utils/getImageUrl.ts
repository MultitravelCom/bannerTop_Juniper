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

export const getVerticalData = (data: any) => {
  const paquetesData: any[] = [];
  const sinPaquetesData: any[] = [];

  data.data.forEach((item: any) => {
    if (item.attributes && Array.isArray(item.attributes.Vertical)) {
      if (item.attributes.Vertical.includes("Paquetes")) {
        paquetesData.push(item); // Agregar el objeto completo a paquetesData si contiene 'Paquetes'
      } else {
        sinPaquetesData.push(item); // Agregar el objeto completo a sinPaquetesData si no contiene 'Paquetes'
      }
    }
  });

  return { paquetesData, sinPaquetesData };
};

export const getUrlLinkImage = (data: any, position: string) => {
  const positionData = data.data.find(
    (item: any) => item.attributes.Ubicacion === position
  );

  return positionData ? positionData.attributes.Link_Imagen : "";
};

// *************** DETECTAR URL PARA EL ID***************
export function getBannerId() {
  const url = window.location.href;

  if (url.includes("/flighthotel")) {
    return "flighthotel";
  } else {
    return "no_flighthotel";
  }
}
// ***********************************************************

export const getShowBannerStatus = (): boolean => {
  const currentUrl = window.location.href;
  const targetUrl = "https://www.multitravel.com/packages/flighthotel/";

  const isMatch = currentUrl === targetUrl;
  return isMatch;
};
