import { fetchDataFromAPIStrapi } from "../service";

export async function procesarDatosDeAPI() {
  try {
    // Obtener los datos de la API utilizando fetchDataFromAPIStrapi
    const jsonData: any = await fetchDataFromAPIStrapi();

    // Tu código de procesamiento de datos aquí
    const result: { [key: string]: any[] } = {};

    jsonData.data.forEach((item: any) => {
      const verticals: string[] = item.attributes.Vertical;
      const ubicacion: string = item.attributes.Ubicacion;

      verticals.forEach((vertical: string) => {
        if (!result[vertical]) {
          result[vertical] = [];
        }

        const bannerData = {
          Ubicacion: ubicacion,
          content: {
            Link_Imagen: item.attributes.Link_Imagen,
            Imagen_Desktop: item.attributes.Imagen_Desktop.data[0].attributes.url,
            Imagen_Mobile: item.attributes.Imagen_Mobile.data[0].attributes.url,
          },
        };

        result[vertical].push(bannerData);
      });
    });

    // Crear la estructura de salida final
    const finalResult = Object.keys(result).map((vertical: string) => ({
      vertical,
      data: result[vertical],
    }));

    finalResult.forEach((obj) => {
      console.log(JSON.stringify(obj, null, 2));
      console.log(); // Agregar una línea en blanco para separación
    });
  } catch (error) {
    console.error("Error al procesar datos de la API:", error);
  }
}

procesarDatosDeAPI();
  