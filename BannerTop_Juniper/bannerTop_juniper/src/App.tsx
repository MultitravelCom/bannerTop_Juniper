import { useEffect, useState } from "react";
import BannerContainer from "./components/BannerContainer/BannerContainer";
import { fetchDataFromAPIStrapi } from "./service";
import scrollHandler from "./utils/scrollHandler";
import {
  combineVerticalDataForPositions,
  getImageUrlForPositionDesktop,
  getImageUrlForPositionMobile,
  getUrlLinkImage,
} from "./utils/getImageUrl";
import { getShowBannerStatus, uniqueDataKeywords } from "./utils/useShowBanner";

function App() {
  const [imageUrlsDesktop, setImageUrlsDesktop] = useState<string[]>([]);
  const [imageUrlMobile, setImageUrlsMobile] = useState<string[]>([]);
  const [linkImagen, setLinkImagen] = useState<string[]>([]);

  const [verticalData, setVerticalData] = useState<string[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchDataFromAPIStrapi();
      const positions = ["Izquierda", "Centro", "Derecha"];

      const leftImageUrl = getImageUrlForPositionDesktop(data, "Izquierda");
      const centerImageUrl = getImageUrlForPositionDesktop(data, "Centro");
      const rightImageUrl = getImageUrlForPositionDesktop(data, "Derecha");

      const leftImageUrlMobile = getImageUrlForPositionMobile(data,"Izquierda");
      const centerImageUrlMobile = getImageUrlForPositionMobile(data, "Centro");
      const rightImageUrlMobile = getImageUrlForPositionMobile(data, "Derecha");

      const leftLink_Imagen = getUrlLinkImage(data,"Izquierda");
      const centerLink_Imagen = getUrlLinkImage(data, "Centro");
      const rightLink_Imagen = getUrlLinkImage(data, "Derecha");

      const verticalData = combineVerticalDataForPositions(data, positions);

      setImageUrlsDesktop([leftImageUrl, centerImageUrl, rightImageUrl]);
      setLinkImagen([leftLink_Imagen, centerLink_Imagen, rightLink_Imagen]);
      setImageUrlsMobile([
        leftImageUrlMobile,
        centerImageUrlMobile,
        rightImageUrlMobile,
      ]);
      setVerticalData(verticalData);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };
  
  const showBanner = getShowBannerStatus(verticalData, uniqueDataKeywords);

  return (
    <div className="container-fluid main__container__bannerTop scroll-mobile">
      {showBanner && (
        <>
          <BannerContainer
            bannerId="leftBanner"
            showPackageImages={false}
            scrollAncla={(event) =>
              scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="main__container_left"
            position="left"
            imageUrlsDesktop={imageUrlsDesktop[0]}
            imageUrlMobile={imageUrlMobile[0]}
            imageUrl={linkImagen[0]}
          />
          <BannerContainer
            bannerId="centerBanner"
            showPackageImages={false}
            scrollAncla={(event) =>
              scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="main__container_center"
            position="center"
            imageUrlsDesktop={imageUrlsDesktop[1]}
            imageUrlMobile={imageUrlMobile[1]}
            imageUrl={linkImagen[1]}
          />
          <BannerContainer
            bannerId="rightBanner"
            showPackageImages={false}
            scrollAncla={(event) =>
              scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="main__container_right"
            position="right"
            imageUrlsDesktop={imageUrlsDesktop[2]}
            imageUrlMobile={imageUrlMobile[2]}
            imageUrl={linkImagen[2]}
          />
        </>
      )} <div>No coincide la URL!</div>
    </div>
  );
}
export default App;
