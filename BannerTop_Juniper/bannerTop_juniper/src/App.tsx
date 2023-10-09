import { useEffect, useState } from "react";
import BannerContainer from "./components/BannerContainer/BannerContainer";
import { fetchDataFromAPIStrapi } from "./service";
import scrollHandler from "./utils/scrollHandler";
import {
  getImageUrlForPositionDesktop,
  getImageUrlForPositionMobile,
  getUrlLinkImage,
  getVerticalData,
} from "./utils/getImageUrl";
import { getShowBannerStatus, uniqueDataKeywords } from "./utils/useShowBanner";

function App() {
  const [imageUrlsDesktop, setImageUrlsDesktop] = useState<string[]>([]);
  const [imageUrlMobile, setImageUrlsMobile] = useState<string[]>([]);
  const [linkImagen, setLinkImagen] = useState<string[]>([]);
  const [verticalData, setVerticalData] = useState<string[]>([]);
  const [urlIncludesPaquetes, setUrlIncludesPaquetes] =
    useState<boolean>(false);
  const [paquetesData, setPaquetesData] = useState<any[]>([]);
  const [sinPaquetesData, setSinPaquetesData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
    setUrlIncludesPaquetes(window.location.href.includes("Paquetes"));
  }, []);

  

  const fetchData = async () => {
    try {
      const data = await fetchDataFromAPIStrapi();

      const { paquetesData, sinPaquetesData } = getVerticalData(
        data);
      setPaquetesData(paquetesData);
      setSinPaquetesData(sinPaquetesData);

      const leftImageUrl = getImageUrlForPositionDesktop(data, "Izquierda");
      const centerImageUrl = getImageUrlForPositionDesktop(data, "Centro");
      const rightImageUrl = getImageUrlForPositionDesktop(data, "Derecha");

      const leftImageUrlMobile = getImageUrlForPositionMobile(
        data,
        "Izquierda"
      );
      const centerImageUrlMobile = getImageUrlForPositionMobile(data, "Centro");
      const rightImageUrlMobile = getImageUrlForPositionMobile(data, "Derecha");

      const leftLink_Imagen = getUrlLinkImage(data, "Izquierda");
      const centerLink_Imagen = getUrlLinkImage(data, "Centro");
      const rightLink_Imagen = getUrlLinkImage(data, "Derecha");

      setImageUrlsDesktop([leftImageUrl, centerImageUrl, rightImageUrl]);
      setLinkImagen([leftLink_Imagen, centerLink_Imagen, rightLink_Imagen]);
      setImageUrlsMobile([
        leftImageUrlMobile,
        centerImageUrlMobile,
        rightImageUrlMobile,
      ]);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  const showBanner = getShowBannerStatus(verticalData, uniqueDataKeywords);

  return (
    <div className="container-fluid main__container__bannerTop scroll-mobile">
      {!showBanner ? (
        <>
          {/* ACA MOSTRAR LOS BANNERS DEL GRUPO sinPaquetesData */}
          {console.log("sinPaquetesData[0]?.attributes?.url-img:", sinPaquetesData[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url)}
          <BannerContainer
            bannerId="sinPaquetesBanner1"
            showPackageImages={false}
            scrollAncla={(event) =>
              scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="sin-paquetes-container"
            position="left"
            imageUrlsDesktop={sinPaquetesData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url}
            imageUrlMobile={sinPaquetesData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url}
            imageUrl={sinPaquetesData[0]?.attributes?.Link_Imagen}
          />
          <BannerContainer
            bannerId="sinPaquetesBanner2"
            showPackageImages={false}
            scrollAncla={(event) =>
              scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="sin-paquetes-container"
            position="center"
            imageUrlsDesktop={sinPaquetesData[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url}
            imageUrlMobile={sinPaquetesData[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url}
            imageUrl={sinPaquetesData[1]?.attributes?.Link_Imagen}
          />
          <BannerContainer
            bannerId="sinPaquetesBanner3"
            showPackageImages={false}
            scrollAncla={(event) =>
              scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="sin-paquetes-container"
            position="right"
            imageUrlsDesktop={sinPaquetesData[2]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url}
            imageUrlMobile={sinPaquetesData[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url}
            imageUrl={sinPaquetesData[2]?.attributes?.Link_Imagen}
          />
        </>
      ) : (
        <>
          {/* ACA MOSTRAR LOS BANNERS DEL GRUPO paquetesData */}
          <BannerContainer
            bannerId="paquetesBanner1"
            showPackageImages={false}
            scrollAncla={(event) =>
              scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="paquetes-container"
            position="left"
            imageUrlsDesktop={paquetesData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url}
            imageUrlMobile={paquetesData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url}
            imageUrl={paquetesData[0]?.attributes?.Link_Imagen}
          />
          <BannerContainer
            bannerId="paquetesBanner2"
            showPackageImages={false}
            scrollAncla={(event) =>
              scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="paquetes-container"
            position="center"
            imageUrlsDesktop={paquetesData[1]?.attributes?.Imagen_Desktop?.data[1]?.attributes?.url}
            imageUrlMobile={paquetesData[1]?.attributes?.Imagen_Mobile?.data[1]?.attributes?.url}
            imageUrl={paquetesData[1]?.attributes?.Link_Imagen}
          />
          <BannerContainer
            bannerId="paquetesBanner3"
            showPackageImages={false}
            scrollAncla={(event) =>
              scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="paquetes-container"
            position="right"
            imageUrlsDesktop={paquetesData[2]?.attributes?.Imagen_Desktop?.data[2]?.attributes?.url}
            imageUrlMobile={paquetesData[2]?.attributes?.Imagen_Mobile?.data[2]?.attributes?.url}
            imageUrl={paquetesData[2]?.attributes?.Link_Imagen}
          />
        </>
      )}
    </div>
  );
}
export default App;
