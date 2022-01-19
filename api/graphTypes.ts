export interface IMainInfo {
  siteName: string;
  siteTitle: string;
  siteDomain: string;
  siteDescription: string;
  siteKeywords: string;
  siteLogo: { url: string };
  siteFullLogo: { url: string };
  ogImage: { url: string };
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
