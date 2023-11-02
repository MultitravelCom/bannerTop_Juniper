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

// export const getVerticalData = (data: any) => {
//   const paquetesData: any[] = [];
//   const sinPaquetesData: any[] = [];

//   data.data.forEach((item: any) => {
//     if (item.attributes && Array.isArray(item.attributes.Vertical)) {
//       if (item.attributes.Vertical.includes("Paquetes")) {
//         paquetesData.push(item); // Agregar el objeto completo a paquetesData si contiene 'Paquetes'
//       } else {
//         sinPaquetesData.push(item); // Agregar el objeto completo a sinPaquetesData si no contiene 'Paquetes'
//       }
//     }
//   });

//   return { paquetesData, sinPaquetesData };
// };

export const getVerticalData = (data: any) => {
  //nueva version
  const paquetesData: any[] = [];
  const homeData: any[] = [];
  const alojamientosData: any[] = [];
  const circuitosData: any[] = [];
  const actividadesData: any[] = [];
  const otrasVerticalesData: any[] = [];
  const transfersData: any[] = [];
  const insurances: any[] = [];

  data.data.forEach((item: any) => {
    if (item.attributes && Array.isArray(item.attributes.Vertical)) {
      if (item.attributes.Vertical.includes("Paquetes")) {
        paquetesData.push(item); // Agregar el objeto completo a paquetesData si contiene 'Paquetes'
      } else if (item.attributes.Vertical.includes("Home")) {
        homeData.push(item); // Agregar el objeto completo a paquetesData si contiene 'Paquetes'
      } else if (item.attributes.Vertical.includes("Alojamientos")) {
        alojamientosData.push(item); // Agregar el objeto completo a paquetesData si contiene 'Paquetes'
      } else if (item.attributes.Vertical.includes("Circuitos")) {
        circuitosData.push(item); // Agregar el objeto completo a paquetesData si contiene 'Paquetes'
      } else if (item.attributes.Vertical.includes("Actividades")) {
        actividadesData.push(item); // Agregar el objeto completo a paquetesData si contiene 'Paquetes'
      } else if (item.attributes.Vertical.includes("Traslados")) {
        transfersData.push(item); // Agregar el objeto completo a paquetesData si contiene 'Paquetes'
      } else if (item.attributes.Vertical.includes("Asistencias")) {
        insurances.push(item); // Agregar el objeto completo a paquetesData si contiene 'Paquetes'
      }
    }
  });
  return {
    paquetesData,
    homeData,
    alojamientosData,
    circuitosData,
    actividadesData,
    otrasVerticalesData,
    transfersData,
    insurances,
  };
};

export const getUrlLinkImage = (data: any, position: string) => {
  const positionData = data.data.find(
    (item: any) => item.attributes.Ubicacion === position
  );

  return positionData ? positionData.attributes.Link_Imagen : "";
};

// sets data for banners according the url
export const setDataForBanner = (data: any) => {
  const url = window.location.href;

  let imageUrlsDesktop;
  let imageUrlMobile;
  let imageUrl;
  let resultBanner;
  if (url.includes("/flighthotel")) {
    const paquetesData = data.paquetesData;
    imageUrlsDesktop =
      paquetesData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url;
    imageUrlMobile =
      paquetesData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url;
    imageUrl = paquetesData[1]?.attributes?.Link_Imagen;
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/hotels")) {
    const alojamientosData = data.alojamientosData;
    imageUrlsDesktop =
      alojamientosData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url;
    imageUrlMobile =
      alojamientosData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url;
    imageUrl = alojamientosData[1]?.attributes?.Link_Imagen;
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/flights")) {
    const vuelosData = data.vuelosData;
    imageUrlsDesktop =
      vuelosData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url;
    imageUrlMobile =
      vuelosData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url;
    imageUrl = vuelosData[1]?.attributes?.Link_Imagen;
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/tours")) {
    const circuitosData = data.circuitosData;
    imageUrlsDesktop =
      circuitosData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url;
    imageUrlMobile =
      circuitosData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url;
    imageUrl = circuitosData[1]?.attributes?.Link_Imagen;
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/services")) {
    const actividadesData = data.actividadesData;
    imageUrlsDesktop =
      actividadesData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url;
    imageUrlMobile =
      actividadesData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url;
    imageUrl = actividadesData[1]?.attributes?.Link_Imagen;
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/transfers")) {
    const transfersData = data.transfersData;
    imageUrlsDesktop =
      transfersData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url;
    imageUrlMobile =
      transfersData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url;
    imageUrl = transfersData[1]?.attributes?.Link_Imagen;
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/insurances")) {
    const insurances = data.insurances;
    imageUrlsDesktop =
      insurances[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url;
    imageUrlMobile =
      insurances[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url;
    imageUrl = insurances[1]?.attributes?.Link_Imagen;
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  }
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
