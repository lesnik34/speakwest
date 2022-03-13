import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/cky3cq1v401lt01z6e6jxhh68/master"
);

const graphcmsMutation = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/cky3cq1v401lt01z6e6jxhh68/master",
  {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDU5OTkxNDUsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NreTNjcTF2NDAxbHQwMXo2ZTZqeGhoNjgvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOTVmZWU0NGQtMGMzNC00ZGE0LTkzZmUtYzVmOWIzY2MyOTMyIiwianRpIjoiY2wwNXRlNHl4MjRsaDAxejI3NXZqZ3NqeCJ9.bIkzCPhV3KD16EtcizsMsQTer42x7hFqdZRHY_XuRr1v1wFBvC92h-SxwUytwnrYF3wObjNT9mSBv1j6c2Ku6-HPXukABgTfUjpR-zFEqzOC4KDOQDgKhgH6AbvoDn7Lrrq_xOzYpXFIbQkVy1S0CLC2VQIEItFkxkH71YeMbW3RylXMav3bUyxQoIjBp2MtVSgFvYBM8mNoeAFgNMs85VlXxTsPbCwUqFYSpExP8WN5gh7y0a4X8CSrnjV8pIRQqJcYoUDlbAO1dBJQvmm3y5nCmD8mnz1JCs_GVIIjUQBcqqZOLwczkX8P_Go5CQCso3-7mI3kxq2IZUiJmku_GDAxIF4GeNI1q80Z4g1M-64oxBQcu79QYPTwzCiSClyuKwg754bjze5ElYQeQIh6O3jQnHzGC_FPTjjWhQ3HdJTEaYM1F7al-3RYIO68s3C7AT8kL1z4M5rR7q13vaBfIDDyhLhwxvKNjAOkfkeFmhLYun7qxF-8rHxRlvlD-h0bU18RhTH8zwRgNBc8_wbcIEJRC0FA7cwvY8KUKZXD30EekOdD2Xh5uqT3UGFzmTgWtUcIOaJpXdK806HkWYN40TpIJUTUSIE0TW6EYuPZyTtJM9JxMkWMuiF-p9-6O7tv_ODqgjc4GjJBevimdKjfQkeUBnJEsckfdlZdK9eeBeU",
    },
  }
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

export const getAdvantageInfo = async () => {
  const { advantageSections } = await graphcms.request(
    `{
      advantageSections(stage: PUBLISHED) {
        title,
        advantages {
          id,
          title,
          description,
          icon { url }
        }
      }
    }`
  );

  return advantageSections[advantageSections.length - 1];
};

export const getReviewsInfo = async () => {
  const { reviews } = await graphcms.request(
    `{
      reviews(stage: PUBLISHED) {
        id,
        name,
        review,
        rating
      }
    }`
  );

  return reviews;
};

export const sendReviewsInfo = async (params: {
  name: string;
  text: string;
  rating: string;
}) => {
  const { createReview } = await graphcmsMutation.request(
    `mutation {
      createReview(data: {name: "${params.name}", review: "${params.text}", rating: ${params.rating}}) {
        id
      }
    }`
  );

  return createReview;
};
