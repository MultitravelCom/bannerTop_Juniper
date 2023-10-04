export const uniqueDataKeywords = {
  Home: ["Vuelos", "Circuitos", "Alojamientos"], // Agrega los valores correspondientes a Home
  Vuelos: ["Flights"],
  Alojamientos: ["Hotels"],
  Paquetes: ["FlightHotel", "Packages"],
  Circuitos: ["Tours"],
  Actividades: ["Activities"],
  Traslados: ["Transfers"],
  Asistencias: ["Assistance"],
};

export const getShowBannerStatus = (verticalData: string[], uniqueDataKeywords: { [key: string]: string[] }) => {
  const currentUrl = window.location.href;
  const keywords = verticalData.flatMap((value) => uniqueDataKeywords[value] || []);
  const showBanner = keywords.some((keyword) => currentUrl.includes(keyword));
  
  console.log("showBanner:", showBanner); // Agregamos un console.log para ver el valor
  
  return showBanner;
};
