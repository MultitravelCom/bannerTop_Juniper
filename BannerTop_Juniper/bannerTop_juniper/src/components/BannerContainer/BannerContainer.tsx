import React from "react";
import BannerLink from "./BannerLink";

interface BannerContainerProps {
  bannerId: string;
  showPackageImages: boolean;
  scrollAncla: (event: React.MouseEvent<HTMLAnchorElement>, target: string) => void;
  isMobile: boolean;
  UrlImgPaquetes: string;
  UrlImg: string;
  containerClassName: string;
  position: "left" | "center" | "right";
  imageUrl: string;
  imageUrlsDesktop: string,
  imageUrlMobile: string,
}

const BannerContainer: React.FC<BannerContainerProps> = ({
  bannerId,
  showPackageImages,
  scrollAncla,
  isMobile,
  UrlImgPaquetes,
  containerClassName,
  position,
  imageUrlsDesktop,
  imageUrlMobile,
}) => {
  return (
    <div id={`bannerTop__${position}_${bannerId}`} className={containerClassName}>
      <BannerLink
        showPackageImages={showPackageImages}
        scrollAncla={scrollAncla}
        isMobile={isMobile}
        UrlImgPaquetes={UrlImgPaquetes}
        imageUrlsDesktop={imageUrlsDesktop}
        imageUrlMobile={imageUrlMobile}
      />
    </div>
  );
};

export default BannerContainer;
