import { useEffect, useState } from "react";
import BannerContainer from "./components/BannerContainer/BannerContainer";
import { fetchDataFromAPIStrapi } from "./service";
import scrollHandler from "./utils/scrollHandler";
import {getImageUrlForPositionDesktop, getImageUrlForPositionMobile,} from "./utils/getImageUrl";
import { useShowBannerForCategories } from "./utils/useShowBanner";

function App() {
  const [imageUrlsDesktop, setImageUrlsDesktop] = useState<string[]>([]);
  const [imageUrlMobile, setImageUrlsMobile] = useState<string[]>([]);
  const [dataFromAPI, setDataFromAPI] = useState<any>(null); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchDataFromAPIStrapi();
      setDataFromAPI(data);

      const leftImageUrl = getImageUrlForPositionDesktop(data, "Izquierda");
      const centerImageUrl = getImageUrlForPositionDesktop(data, "Centro");
      const rightImageUrl = getImageUrlForPositionDesktop(data, "Derecha");

      const leftImageUrlMobile = getImageUrlForPositionMobile(data,"Izquierda");
      const centerImageUrlMobile = getImageUrlForPositionMobile(data, "Centro");
      const rightImageUrlMobile = getImageUrlForPositionMobile(data, "Derecha");

      setImageUrlsDesktop([leftImageUrl, centerImageUrl, rightImageUrl]);
      setImageUrlsMobile([
        leftImageUrlMobile,
        centerImageUrlMobile,
        rightImageUrlMobile,
      ]);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  // Obtener las categorías de Vertical de los datos de la API
  const verticalCategories = dataFromAPI ? dataFromAPI.data[0].attributes.Vertical : [];
  
  console.log("Valor de verticalCategories:", verticalCategories);


  // Utilizar la función useShowBannerForCategories para determinar si se debe mostrar el banner
  const showBanner = useShowBannerForCategories(verticalCategories);

  return (
    <div className="container-fluid main__container__bannerTop scroll-mobile">
      {showBanner && (
      <>
      <BannerContainer
        bannerId="leftBanner"
        showPackageImages={false}
        scrollAncla={(event) => scrollHandler(event, "home-sliding-offers-2")}
        isMobile={true}
        UrlImgPaquetes="url_paquetes"
        containerClassName="main__container_left"
        position="left"
        imageUrlsDesktop={imageUrlsDesktop[0]}
        imageUrlMobile={imageUrlMobile[0]} UrlImg={""} imageUrl={""}      />
      <BannerContainer
        bannerId="centerBanner"
        showPackageImages={false}
        scrollAncla={(event) => scrollHandler(event, "home-sliding-offers-2")}
        isMobile={false}
        UrlImgPaquetes="url_paquetes"
        containerClassName="main__container_center"
        position="center"
        imageUrlsDesktop={imageUrlsDesktop[1]}
        imageUrlMobile={imageUrlMobile[1]} UrlImg={""} imageUrl={""}      />
      <BannerContainer
        bannerId="rightBanner"
        showPackageImages={false}
        scrollAncla={(event) => scrollHandler(event, "home-sliding-offers-2")}
        isMobile={true}
        UrlImgPaquetes="url_paquetes"
        containerClassName="main__container_right"
        position="right"
        imageUrlsDesktop={imageUrlsDesktop[2]}
        imageUrlMobile={imageUrlMobile[2]} UrlImg={""} imageUrl={""}      />
      </>
      )}
    </div>
  );
}
export default App;
