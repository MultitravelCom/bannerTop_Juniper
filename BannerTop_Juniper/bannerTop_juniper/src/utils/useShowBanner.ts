export const uniqueDataKeywords = {
  Home: ["https://br.multitravel.com/"],
  Alojamientos: ["/hotels"],
  Paquetes: ["/flighthotel"],
  Circuitos: ["/tours"],
  Actividades: ["/services"],
  Traslados: ["/transfers"],
  Asistencias: ["/insurances"],
};

export const getShowBannerStatus = (verticalData: string[], uniqueDataKeywords: { [key: string]: string[] }): boolean => {
  const currentUrl = window.location.href;
  const keywords = verticalData.flatMap((value) => uniqueDataKeywords[value] || []);
  const showBanner = keywords.some((keyword) => currentUrl.includes(keyword));
  
  console.log("showBanner:", showBanner);
  return showBanner;
};
