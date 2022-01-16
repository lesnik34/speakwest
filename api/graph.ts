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
