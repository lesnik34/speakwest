import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/cky3cq1v401lt01z6e6jxhh68/master"
);

export const getMainInfo = async () => {
  const { mains } = await graphcms.request(
    `{
        mains(stage: PUBLISHED) {
          siteName,
          siteTitle,
          siteDomain,
          siteDescription,
          siteKeywords,
          siteLogo { url },
          siteFullLogo { url },
          ogImage { url },
          phones { id, phone },
          medias { id, title, link },
        }
    }`
  );

  return mains[mains.length - 1];
};

export const getHeroInfo = async () => {
  const { heroes } = await graphcms.request(
    `{
        heroes(stage: PUBLISHED) {
          title,
          description,
          image { url }
        }
    }`
  );

  return heroes[heroes.length - 1];
};

export const getAboutInfo = async () => {
  const { abouts } = await graphcms.request(
    `{
      abouts(stage: PUBLISHED) {
        title,
        description
      }
    }`
  );

  return abouts[abouts.length - 1];
};

export const getOfferInfo = async () => {
  const { offers } = await graphcms.request(
    `{
      offers(stage: PUBLISHED) {
        title
        programs {
          id,
          title,
          info,
          description,
          image {
            url
          },
          url
        }
      }
    }`
  );

  return offers[offers.length - 1];
};

export const getSchoolInfo = async () => {
  const { schools } = await graphcms.request(
    `{
      schools(stage: PUBLISHED) {
        id,
        title,
        url,
        logoImage { url },
        logoTitle { url },
        logoFull { url }
      }
    }`
  );

  return schools;
};

export const getSliderInfo = async () => {
  const { sliders } = await graphcms.request(
    `{
      sliders(stage: PUBLISHED) {
        title,
        description,
        slides {
          id,
          title,
          subTitle,
          level,
          description,
          icon { url },
          background { url },
          image { url },
        }
      }
    }`
  );

  return sliders[sliders.length - 1];
};

export const getStockInfo = async () => {
  const { stockSections } = await graphcms.request(
    `{
      stockSections(stage: PUBLISHED) {
        title,
        stocks {
          id,
          title,
          description,
          icon { url },
          colors {
            hex
          }
        }
      }
    }`
  );

  return stockSections[stockSections.length - 1];
};
