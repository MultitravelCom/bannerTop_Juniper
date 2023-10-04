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

  console.log('Position:', position);
  console.log('VerticalData:', positionData);

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
  
  console.log(uniqueData);

  return uniqueData;
};
