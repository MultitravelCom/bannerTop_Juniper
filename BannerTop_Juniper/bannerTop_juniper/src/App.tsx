import { useEffect, useState } from "react";
import BannerContainer from "./components/BannerContainer/BannerContainer";
import { fetchDataFromAPIStrapi } from "./service";
import scrollHandler from "./utils/scrollHandler";
import {
  combineVerticalDataForPositions,
  getImageUrlForPositionDesktop,
  getImageUrlForPositionMobile,
} from "./utils/getImageUrl";
import { getShowBannerStatus, uniqueDataKeywords } from "./utils/useShowBanner";

function App() {
  const [imageUrlsDesktop, setImageUrlsDesktop] = useState<string[]>([]);
  const [imageUrlMobile, setImageUrlsMobile] = useState<string[]>([]);
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

      const leftImageUrlMobile = getImageUrlForPositionMobile(
        data,
        "Izquierda"
      );
      const centerImageUrlMobile = getImageUrlForPositionMobile(data, "Centro");
      const rightImageUrlMobile = getImageUrlForPositionMobile(data, "Derecha");

      const verticalData = combineVerticalDataForPositions(data, positions);

      setImageUrlsDesktop([leftImageUrl, centerImageUrl, rightImageUrl]);
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
            isMobile={true}
            UrlImgPaquetes="url_paquetes"
            containerClassName="main__container_left"
            position="left"
            imageUrlsDesktop={imageUrlsDesktop[0]}
            imageUrlMobile={imageUrlMobile[0]}
            UrlImg={""}
            imageUrl={""}
          />
          <BannerContainer
            bannerId="centerBanner"
            showPackageImages={false}
            scrollAncla={(event) =>
              scrollHandler(event, "home-sliding-offers-2")
            }
            isMobile={false}
            UrlImgPaquetes="url_paquetes"
            containerClassName="main__container_center"
            position="center"
            imageUrlsDesktop={imageUrlsDesktop[1]}
            imageUrlMobile={imageUrlMobile[1]}
            UrlImg={""}
            imageUrl={""}
          />
          <BannerContainer
            bannerId="rightBanner"
            showPackageImages={false}
            scrollAncla={(event) =>
              scrollHandler(event, "home-sliding-offers-2")
            }
            isMobile={true}
            UrlImgPaquetes="url_paquetes"
            containerClassName="main__container_right"
            position="right"
            imageUrlsDesktop={imageUrlsDesktop[2]}
            imageUrlMobile={imageUrlMobile[2]}
            UrlImg={""}
            imageUrl={""}
          />
        </>
      )} <div>No coincide la URL!</div>
    </div>
  );
}
export default App;
