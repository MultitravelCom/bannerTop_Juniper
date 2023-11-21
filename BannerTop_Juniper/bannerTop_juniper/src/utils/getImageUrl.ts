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
//         paquetesData.push(item);
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
  const vuelosData: any[] = [];

  data.data.forEach((item: any) => {
    if (item.attributes && Array.isArray(item.attributes.Vertical)) {
      if (item.attributes.Vertical.includes("Paquetes")) {
        paquetesData.push(item);
      }
      if (item.attributes.Vertical.includes("Home")) {
        homeData.push(item);
      }
      if (item.attributes.Vertical.includes("Alojamientos")) {
        alojamientosData.push(item);
      }
      if (item.attributes.Vertical.includes("Circuitos")) {
        circuitosData.push(item);
      }
      if (item.attributes.Vertical.includes("Actividades")) {
        actividadesData.push(item);
      }
      if (item.attributes.Vertical.includes("Traslados")) {
        transfersData.push(item);
      }
      if (item.attributes.Vertical.includes("Asistencias")) {
        insurances.push(item);
      }
      if (item.attributes.Vertical.includes("Vuelos")) {
        vuelosData.push(item); // Agregar el objeto completo a paquetesData si contiene 'Vuelos'
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
    vuelosData,
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

  let imageUrlsDesktop = [];
  let imageUrlMobile = [];
  let imageUrl = [];
  let resultBanner;
  if (url.includes("/flighthotel")) {
    const paquetesData = data.paquetesData;
    imageUrlsDesktop.push(
      paquetesData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      paquetesData[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      paquetesData[2]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      paquetesData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      paquetesData[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      paquetesData[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrl.push(paquetesData[0]?.attributes?.Link_Imagen);
    imageUrl.push(paquetesData[1]?.attributes?.Link_Imagen);
    imageUrl.push(paquetesData[2]?.attributes?.Link_Imagen);
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/hotels")) {
    const alojamientosData = data.alojamientosData;
    imageUrlsDesktop.push(
      alojamientosData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      alojamientosData[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      alojamientosData[2]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      alojamientosData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      alojamientosData[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      alojamientosData[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrl.push(alojamientosData[0]?.attributes?.Link_Imagen);
    imageUrl.push(alojamientosData[1]?.attributes?.Link_Imagen);
    imageUrl.push(alojamientosData[2]?.attributes?.Link_Imagen);
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/flights")) {
    const vuelosData = data.vuelosData;
    imageUrlsDesktop.push(
      vuelosData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      vuelosData[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      vuelosData[2]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      vuelosData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      vuelosData[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      vuelosData[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrl.push(vuelosData[0]?.attributes?.Link_Imagen);
    imageUrl.push(vuelosData[1]?.attributes?.Link_Imagen);
    imageUrl.push(vuelosData[2]?.attributes?.Link_Imagen);
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/tours")) {
    const circuitosData = data.circuitosData;

    imageUrlsDesktop.push(
      circuitosData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      circuitosData[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      circuitosData[2]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      circuitosData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      circuitosData[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      circuitosData[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrl.push(circuitosData[0]?.attributes?.Link_Imagen);
    imageUrl.push(circuitosData[1]?.attributes?.Link_Imagen);
    imageUrl.push(circuitosData[2]?.attributes?.Link_Imagen);
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/services")) {
    const actividadesData = data.actividadesData;
   
    imageUrlsDesktop.push(actividadesData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes
    ?.url)
    imageUrlsDesktop.push(actividadesData[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes
    ?.url)
    imageUrlsDesktop.push(actividadesData[2]?.attributes?.Imagen_Desktop?.data[0]?.attributes
      ?.url)
    imageUrlMobile.push(actividadesData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes
    ?.url)
    imageUrlMobile.push(actividadesData[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes
      ?.url)
    imageUrlMobile.push(actividadesData[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes
      ?.url)
    imageUrl.push(actividadesData[0]?.attributes?.Link_Imagen)
    imageUrl.push(actividadesData[1]?.attributes?.Link_Imagen)
    imageUrl.push(actividadesData[2]?.attributes?.Link_Imagen)
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/transfers")) {
    const transfersData = data.transfersData;
    imageUrlsDesktop.push(
      transfersData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      transfersData[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      transfersData[2]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      transfersData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      transfersData[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      transfersData[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrl.push(transfersData[0]?.attributes?.Link_Imagen);
    imageUrl.push(transfersData[1]?.attributes?.Link_Imagen);
    imageUrl.push(transfersData[2]?.attributes?.Link_Imagen);
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/insurances")) {
    const insurances = data.insurances;

    imageUrlsDesktop.push(
      insurances[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      insurances[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      insurances[2]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      insurances[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      insurances[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      insurances[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrl.push(insurances[0]?.attributes?.Link_Imagen);
    imageUrl.push(insurances[1]?.attributes?.Link_Imagen);
    imageUrl.push(insurances[2]?.attributes?.Link_Imagen);
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else {
    const home = data.homeData;
    imageUrlsDesktop.push(home[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes
      ?.url)
      imageUrlsDesktop.push(home[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes
      ?.url)
      imageUrlsDesktop.push(home[2]?.attributes?.Imagen_Desktop?.data[0]?.attributes
        ?.url)
      imageUrlMobile.push(home[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes
      ?.url)
      imageUrlMobile.push(home[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes
        ?.url)
      imageUrlMobile.push(home[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes
        ?.url)
      imageUrl.push(home[0]?.attributes?.Link_Imagen)
      imageUrl.push(home[1]?.attributes?.Link_Imagen)
      imageUrl.push(home[2]?.attributes?.Link_Imagen)
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
