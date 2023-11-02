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
  setDataForBanner,
} from "./utils/getImageUrl";
import propsDataBanner from "./interfaces/propsBanner";
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
  const [propsBanner, setPropsBanner] = useState< propsDataBanner>();
  const [shouldScroll, setShouldScroll] = useState(true);
 
  useEffect(() => {
    fetchData();
    setUrlIncludesPaquetes(window.location.href.includes("Paquetes"));
    setShouldScroll(false);
 
  }, []);
 
  const fetchData = async () => {
    try {
      const data = await fetchDataFromAPIStrapi();
 
     
      const verticalsDataSegmented = getVerticalData(data);
      const propsForBanner = setDataForBanner(verticalsDataSegmented)
      setPropsBanner(propsForBanner)
 
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };
 
  const bannerId = getBannerId();
  const showBanner = getShowBannerStatus();
 
  return (
    <div className="container-fluid main__container__bannerTop scroll-mobile">
        <>
          <BannerContainer
            bannerId={`bannerTop__left_${bannerId}`}
            showPackageImages={false}
            scrollAncla={(event) =>
              shouldScroll && scrollHandler(event, "home-sliding-offers-2")
            }
            containerClassName="main__container_left"
            position="left"
            imageUrlsDesktop={
              propsBanner?.imageUrlsDesktop
            }
            imageUrlMobile={
              propsBanner?.imageUrlMobile
            }
            imageUrl={propsBanner?.imageUrl}
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
              propsBanner?.imageUrlsDesktop
            }
            imageUrlMobile={
              propsBanner?.imageUrlMobile
            }
            imageUrl={ propsBanner?.imageUrl}
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
              propsBanner?.imageUrlsDesktop
            }
            imageUrlMobile={
              propsBanner?.imageUrlMobile
            }
            imageUrl={ propsBanner?.imageUrl}
          />
        </>
     
    </div>
  );
}
export default App;