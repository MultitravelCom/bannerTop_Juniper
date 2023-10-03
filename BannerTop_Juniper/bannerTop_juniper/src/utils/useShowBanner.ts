import { useEffect, useState } from "react";

type CategoryKeywords = {
  [key: string]: string[];
};

export function useShowBannerForCategories(selectedCategories: string[]) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const categoryKeywords: CategoryKeywords = {
      Home: ["home"],
      Vuelos: ["flights"],
      Alojamientos: ["hotels"],
      Paquetes: ["flighthotel", "packages"],
      Circuitos: ["tours"],
      Actividades: ["activities"],
      Traslados: ["transfers"],
      Asistencias: ["assistance"],
    };

    const currentUrl = window.location.href;

    const matches = selectedCategories.some((category) =>
      categoryKeywords[category]?.some((keyword) => currentUrl.includes(keyword))
    );

    setShowBanner(matches);
  }, [selectedCategories]);

  return showBanner;
}