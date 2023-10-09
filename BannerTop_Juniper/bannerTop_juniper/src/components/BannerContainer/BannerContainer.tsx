import React from "react";
import BannerLink from "./BannerLink";

interface BannerContainerProps {
  bannerId: string;
  showPackageImages: boolean;
  scrollAncla: (event: React.MouseEvent<HTMLAnchorElement>, target: string) => void;
  containerClassName: string;
  position: string
  imageUrlsDesktop: string,
  imageUrlMobile: string,
  imageUrl: string,
}

const BannerContainer: React.FC<BannerContainerProps> = ({
  bannerId,
  showPackageImages,
  scrollAncla,
  containerClassName,
  position,
  imageUrlsDesktop,
  imageUrlMobile,
  imageUrl,
}) => {
  return (
    <div id={`bannerTop__${position}_${bannerId}`} className={containerClassName}>
      <BannerLink
        showPackageImages={showPackageImages}
        scrollAncla={scrollAncla}
        imageUrlsDesktop={imageUrlsDesktop}
        imageUrlMobile={imageUrlMobile}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default BannerContainer;
