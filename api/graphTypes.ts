export interface IMainInfo {
  siteName: string;
  siteTitle: string;
  siteDomain: string;
  siteDescription: string;
  siteKeywords: string;
  siteLogo: { url: string };
  siteFullLogo: { url: string };
  ogImage: { url: string };
  phones: { id: string; phone: string }[];
  medias: { id: string; title: string; link: string }[];
}

export interface IHeroInfo {
  title: string;
  description: string;
  image: { url: string };
}

export interface IAboutInfo {
  title: string;
  description: string;
}

export interface IPrograms {
  id: string;
  title: string;
  info: string;
  description: string;
  image: {
    url: string;
  };
  url: string;
}

export interface IOfferInfo {
  title: string;
  programs: IPrograms[];
}

export interface ISchoolInfo {
  id: string;
  title: string;
  url: string;
  logoImage: { url: string };
  logoTitle: { url: string };
  logoFull: { url: string };
}

export interface ISlideInfo {
  id: string;
  title: string;
  subTitle: string;
  level: string;
  description: string;
  icon: { url: string };
  background: { url: string };
  image: { url: string };
}

export interface ISliderInfo {
  title: string;
  description: string;
  slides: ISlideInfo[];
}

export interface IStockInfo {
  title: string;
  stocks: IStock[];
}

export interface IStock {
  id: string;
  title: string;
  description: string;
  icon: { url: string };
  colors: { hex: string }[];
}

export interface IAdvantageInfo {
  title: string;
  advantages: IAdvantage[];
}

export interface IAdvantage {
  id: string;
  title: string;
  description: string;
  icon: { url: string };
}

export interface IReviews {
  id: string;
  name: string;
  review: string;
  rating: ERating;
}

export enum ERating {
  one,
  two,
  three,
  four,
  five,
}
