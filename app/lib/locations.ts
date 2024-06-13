import brazilNorthImage from '@/lib/images/brazil-north.webp?url';
import brazilNortheastImage from '@/lib/images/brazil-northeast.jpeg?url';
import brazilCentralWestImage from '@/lib/images/brazil-central-west.jpg?url';

import denmarkZealandImage from '@/lib/images/denmark-zealand.webp?url';
import denmarkJutlandImage from '@/lib/images/denmark-jutland.jpeg?url';


export function getRegionNameAndEmoji(region: string) {
  switch (region) {
    // denmark regions
    case "zealand":
      return "Zealand 💤";
    case "jutland":
      return "Jutland 🏞";
    // brazil regions
    case "north":
      return "North 🌴";
    case "northeast":
      return "Northeast 🌊";
    case "central-west":
      return "Central-West 🌵";
    default:
      return region;
  }
}

export function getRegionsByCountry(country: string) {
  switch (country) {
    case "brazil":
      return ["north", "northeast", "central-west"];
    case "denmark":
      return ["zealand", "jutland"];
    default:
      return [];
  }
}

export function getCountryNameAndFlag(country: string) {
  const flag = getCountryFlag(country);
  return `${flag} ${country}`;
}

export function getCountryFlag(country: string) {
  switch (country) {
    case "brazil":
      return "🇧🇷";
    case "denmark":
      return "🇩🇰";
    default:
      return "";
  }
}

export function getImageUrl(region: string) {
  switch (region) {
    case "north":
      return brazilNorthImage;
    case "northeast":
      return brazilNortheastImage;
    case "central-west":
      return brazilCentralWestImage;
    case "zealand":
      return denmarkZealandImage;
    case "jutland":
      return denmarkJutlandImage;
    default:
      return "";
  }
}

