import { useEffect, useState } from "react";
import BannerContainer from "./components/BannerContainer/BannerContainer";
import { fetchDataFromAPIStrapi } from "./service";
import scrollHandler from "./utils/scrollHandler";
import {
  getBannerId,
  getImageUrlForPositionDesktop,
  getImageUrlForPositionMobile,
  getShowBannerStatus,
  getUrlLinkImage,
  getVerticalData,
} from "./utils/getImageUrl";
// import { getShowBannerStatus, uniqueDataKeywords } from "./utils/useShowBanner";

function App() {
  const [imageUrlsDesktop, setImageUrlsDesktop] = useState<string[]>([]);
  const [imageUrlMobile, setImageUrlsMobile] = useState<string[]>([]);
  const [linkImagen, setLinkImagen] = useState<string[]>([]);
  const [verticalData, setVerticalData] = useState<string[]>([]);
  const [urlIncludesPaquetes, setUrlIncludesPaquetes] =
    useState<boolean>(false);
  const [paquetesData, setPaquetesData] = useState<any[]>([]);
  const [sinPaquetesData, setSinPaquetesData] = useState<any[]>([]);
  const [shouldScroll, setShouldScroll] = useState(true);

  useEffect(() => {
    fetchData();
    setUrlIncludesPaquetes(window.location.href.includes("Paquetes"));
    setShouldScroll(false);

  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchDataFromAPIStrapi();

      const { paquetesData, sinPaquetesData } = getVerticalData(data);
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

  const bannerId = getBannerId();
  const showBanner = getShowBannerStatus();

  return (
    <div className="container-fluid main__container__bannerTop scroll-mobile">
      {!showBanner ? (
        <>
          {/* ACA MOSTRAR LOS BANNERS DEL GRUPO sinPaquetesData */}
          <BannerContainer
            bannerId={`bannerTop__left_${bannerId}`}
            showPackageImages={false}
            scrollAncla={(event) =>
              shouldScroll && scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="main__container_left"
            position="left"
            imageUrlsDesktop={
              sinPaquetesData[0]?.attributes?.Imagen_Desktop?.data[0]
                ?.attributes?.url
            }
            imageUrlMobile={
              sinPaquetesData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes
                ?.url
            }
            imageUrl={sinPaquetesData[0]?.attributes?.Link_Imagen}
          />
          <BannerContainer
            bannerId={`bannerTop__center_${bannerId}`}
            showPackageImages={false}
            scrollAncla={(event) =>
              shouldScroll && scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="main__container_center"
            position="center"
            imageUrlsDesktop={
              sinPaquetesData[1]?.attributes?.Imagen_Desktop?.data[0]
                ?.attributes?.url
            }
            imageUrlMobile={
              sinPaquetesData[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes
                ?.url
            }
            imageUrl={sinPaquetesData[1]?.attributes?.Link_Imagen}
          />
          <BannerContainer
            bannerId={`bannerTop__right_${bannerId}`}
            showPackageImages={false}
            scrollAncla={(event) =>
              shouldScroll && scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="main__container_right"
            position="right"
            imageUrlsDesktop={
              sinPaquetesData[2]?.attributes?.Imagen_Desktop?.data[0]
                ?.attributes?.url
            }
            imageUrlMobile={
              sinPaquetesData[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes
                ?.url
            }
            imageUrl={sinPaquetesData[2]?.attributes?.Link_Imagen}
          />
        </>
      ) : (
        <>
          {/* ACA MOSTRAR LOS BANNERS DEL GRUPO paquetesData */}
          <BannerContainer
            bannerId={`bannerTop__left_${bannerId}`}
            showPackageImages={false}
            scrollAncla={(event) =>
              shouldScroll && scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="main__container_left"
            position="left"
            imageUrlsDesktop={
              paquetesData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes
                ?.url
            }
            imageUrlMobile={
              paquetesData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes
                ?.url
            }
            imageUrl={paquetesData[0]?.attributes?.Link_Imagen}
          />
          <BannerContainer
            bannerId={`bannerTop__center_${bannerId}`}
            showPackageImages={false}
            scrollAncla={(event) =>
              shouldScroll && scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="main__container_center"
            position="center"
            imageUrlsDesktop={
              paquetesData[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes
                ?.url
            }
            imageUrlMobile={
              paquetesData[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes
                ?.url
            }
            imageUrl={paquetesData[1]?.attributes?.Link_Imagen}
          />
          <BannerContainer
            bannerId={`bannerTop__right_${bannerId}`}
            showPackageImages={false}
            scrollAncla={(event) =>
              shouldScroll && scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="main__container_right"
            position="right"
            imageUrlsDesktop={
              paquetesData[2]?.attributes?.Imagen_Desktop?.data[0]?.attributes
                ?.url
            }
            imageUrlMobile={
              paquetesData[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes
                ?.url
            }
            imageUrl={paquetesData[2]?.attributes?.Link_Imagen}
          />
        </>
      )}
    </div>
  );
}
export default App;
