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

function App() {
  const [urlIncludesPaquetes, setUrlIncludesPaquetes] =
    useState<boolean>(false);

  const [propsBanner, setPropsBanner] = useState<propsDataBanner>();
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
      const propsForBanner = setDataForBanner(verticalsDataSegmented);
      setPropsBanner(propsForBanner);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  const bannerId = getBannerId();
  const showBanner = getShowBannerStatus();
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="container-fluid main__container__bannerTop scroll-mobile">
      <>
        {isMobile ? (
          <>
            <BannerContainer
              bannerId={`bannerTop__left_${bannerId}`}
              showPackageImages={false}
              scrollAncla={(event) =>
                shouldScroll && scrollHandler(event, "home-sliding-offers-2")
              }
              containerClassName="main__container_left"
              position="left"
              imageUrlsDesktop={propsBanner?.imageUrlsDesktop[1]}
              imageUrlMobile={propsBanner?.imageUrlMobile[1]}
              imageUrl={propsBanner?.imageUrl[1]}
            />
            <BannerContainer
              bannerId={`bannerTop__center_${bannerId}`}
              showPackageImages={false}
              scrollAncla={(event) =>
                shouldScroll && scrollHandler(event, "home-sliding-offers-2")
              }
              containerClassName="main__container_center"
              position="center"
              imageUrlsDesktop={propsBanner?.imageUrlsDesktop[0]}
              imageUrlMobile={propsBanner?.imageUrlMobile[0]}
              imageUrl={propsBanner?.imageUrl[0]}
            />
            <BannerContainer
              bannerId={`bannerTop__right_${bannerId}`}
              showPackageImages={false}
              scrollAncla={(event) =>
                shouldScroll && scrollHandler(event, "home-sliding-offers-2")
              }
              containerClassName="main__container_right"
              position="right"
              imageUrlsDesktop={propsBanner?.imageUrlsDesktop[2]}
              imageUrlMobile={propsBanner?.imageUrlMobile[2]}
              imageUrl={propsBanner?.imageUrl[2]}
            />
          </>
        ) : (
          <>
            <BannerContainer
              bannerId={`bannerTop__left_${bannerId}`}
              showPackageImages={false}
              scrollAncla={(event) =>
                shouldScroll && scrollHandler(event, "home-sliding-offers-2")
              }
              containerClassName="main__container_left"
              position="left"
              imageUrlsDesktop={propsBanner?.imageUrlsDesktop[0]}
              imageUrlMobile={propsBanner?.imageUrlMobile[0]}
              imageUrl={propsBanner?.imageUrl[0]}
            />
            <BannerContainer
              bannerId={`bannerTop__center_${bannerId}`}
              showPackageImages={false}
              scrollAncla={(event) =>
                shouldScroll && scrollHandler(event, "home-sliding-offers-2")
              }
              containerClassName="main__container_center"
              position="center"
              imageUrlsDesktop={propsBanner?.imageUrlsDesktop[1]}
              imageUrlMobile={propsBanner?.imageUrlMobile[1]}
              imageUrl={propsBanner?.imageUrl[1]}
            />
            <BannerContainer
              bannerId={`bannerTop__right_${bannerId}`}
              showPackageImages={false}
              scrollAncla={(event) =>
                shouldScroll && scrollHandler(event, "home-sliding-offers-2")
              }
              containerClassName="main__container_right"
              position="right"
              imageUrlsDesktop={propsBanner?.imageUrlsDesktop[2]}
              imageUrlMobile={propsBanner?.imageUrlMobile[2]}
              imageUrl={propsBanner?.imageUrl[2]}
            />
          </>
        )}
      </>
    </div>
  );
}
export default App;
