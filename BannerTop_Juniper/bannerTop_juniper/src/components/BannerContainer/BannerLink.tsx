import React from "react";

interface BannerLinkProps {
  showPackageImages: boolean;
  scrollAncla: (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => void;
  imageUrlsDesktop: undefined | string,
  imageUrlMobile: undefined | string,
  imageUrl: undefined | string,
}

const BannerLink: React.FC<BannerLinkProps> = ({
  showPackageImages,
  scrollAncla,
  imageUrlsDesktop,
  imageUrlMobile,
  imageUrl,
}) => {

  return (
    <a
      href={imageUrl}
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
                ? `${imageUrlsDesktop}`
                : `${imageUrlsDesktop}`
            }
          />
          <source
            media="(min-width: 768px) and (max-width: 1023px)"
            srcSet={
              showPackageImages
                ? `${imageUrlsDesktop}`
                : `${imageUrlsDesktop}`
            }
          />
          <img
            className="bannerTop__img"
            alt=""
            srcSet={
              showPackageImages
                ? `${imageUrlsDesktop}`
                : `${imageUrlMobile}`
            }
          />
        </picture>
    </a>
  );
};

export default BannerLink;
