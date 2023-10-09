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
      if (item.attributes.Vertical.includes('Paquetes')) {
        paquetesData.push(item); // Agregar el objeto completo a paquetesData si contiene 'Paquetes'
      } else {
        sinPaquetesData.push(item); // Agregar el objeto completo a sinPaquetesData si no contiene 'Paquetes'
      }
    }
  });
  
  console.log('paquetesData:', paquetesData);
  console.log('sinPaquetesData:', sinPaquetesData);

  return { paquetesData, sinPaquetesData };
};
// export const combineVerticalDataForPositions = (
//   data: any,
//   positions: string[]
// ) => {
//   const combinedData: any[] = [];

//   positions.forEach((position: string) => {
//     const verticalData = getVerticalData(data, position);

//     if (verticalData && verticalData.length > 0) {
//       combinedData.push(...verticalData);
//     }
//   });

//   const uniqueData = combinedData.filter((value, index, self) => {
//     return self.indexOf(value) === index;
//   });

//   console.log("combineVerticalDataForPositions---->>>", uniqueData);

//   return uniqueData;
// };

export const getUrlLinkImage = (data: any, position: string) => {
  const positionData = data.data.find(
    (item: any) => item.attributes.Ubicacion === position
  );

  console.log("---->>>", positionData.attributes.Link_Imagen);

  return positionData ? positionData.attributes.Link_Imagen : "";
};
