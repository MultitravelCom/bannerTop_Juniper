import React from "react";

interface BannerLinkProps {
  showPackageImages: boolean;
  scrollAncla: (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => void;
  isMobile: boolean;
  UrlImgPaquetes: string;
  imageUrlsDesktop: string;
  imageUrlMobile: string;
}

const BannerLink: React.FC<BannerLinkProps> = ({
  showPackageImages,
  scrollAncla,
  UrlImgPaquetes,
  imageUrlsDesktop,
  imageUrlMobile
}) => {
  
  const linkUrl = showPackageImages
    ? "https://www.multitravel.com/venta-personalizada/argentina"
    : "https://www.multitravel.com/hotels";

  return (
    <a
      href={linkUrl}
      target="_blank"
      onClick={(event) =>
        !showPackageImages ? scrollAncla(event, "home-sliding-offers-2") : null
      }
    >
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={
              showPackageImages
                ? `${UrlImgPaquetes}`
                : `${imageUrlsDesktop}`
            }
          />
          <source
            media="(min-width: 768px) and (max-width: 1023px)"
            srcSet={
              showPackageImages
                ? `${UrlImgPaquetes}`
                : `${imageUrlsDesktop}`
            }
          />
          <img
            className="bannerTop__img"
            alt=""
            srcSet={
              showPackageImages
                ? `${UrlImgPaquetes}`
                : `${imageUrlMobile}`
            }
          />
        </picture>
    </a>
  );
};

export default BannerLink;
