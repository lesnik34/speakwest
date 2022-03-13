import React from "react";

import {
  getAboutInfo,
  getAdvantageInfo,
  getHeroInfo,
  getMainInfo,
  getOfferInfo,
  getReviewsInfo,
  getSchoolInfo,
  getSliderInfo,
  getStockInfo,
} from "@api/graph";
import {
  IMainInfo,
  IHeroInfo,
  IAboutInfo,
  IOfferInfo,
  ISchoolInfo,
  ISliderInfo,
  IStockInfo,
  IAdvantageInfo,
  IReviews,
} from "@api/graphTypes";
import Layout from "@components/Global/Layout";
import About from "@components/Home/About";
import Hero from "@components/Home/Hero";
import Offer from "@components/Home/Offer";
import Popup from "@components/Home/Popup";
import Slider from "@components/Home/Slider";
import Mailer from "@components/Home/Mailer";
import Stock from "@components/Home/Stock";
import Advantages from "@components/Home/Advantages";
import Reviews from "@components/Home/Reviews";

interface IHome {
  fetchedMainInfo: IMainInfo;
  fetchedHeroInfo: IHeroInfo;
  fetchedAboutInfo: IAboutInfo;
  fetchedOfferInfo: IOfferInfo;
  fetchedSchoolInfo: ISchoolInfo[];
  fetchedSliderInfo: ISliderInfo;
  fetchedStockInfo: IStockInfo;
  fetchedAdvantagesInfo: IAdvantageInfo;
  fetchedReviewsInfo: IReviews[];
}

const Home: React.FC<IHome> = ({
  fetchedMainInfo,
  fetchedHeroInfo,
  fetchedAboutInfo,
  fetchedOfferInfo,
  fetchedSchoolInfo,
  fetchedSliderInfo,
  fetchedStockInfo,
  fetchedAdvantagesInfo,
  fetchedReviewsInfo,
}) => {
  return (
    <Layout mainInfo={fetchedMainInfo} schools={fetchedSchoolInfo}>
      <Hero
        title={fetchedHeroInfo.title}
        description={fetchedHeroInfo.description}
        image={fetchedHeroInfo?.image?.url}
      />

      <Stock stock={fetchedStockInfo} />

      <About
        title={fetchedAboutInfo.title}
        description={fetchedAboutInfo.description}
      />

      <Advantages
        title={fetchedAdvantagesInfo.title}
        advantages={fetchedAdvantagesInfo.advantages}
      />

      <Offer
        title={fetchedOfferInfo.title}
        programs={fetchedOfferInfo.programs}
      />

      <Slider slider={fetchedSliderInfo} />

      <Mailer mainInfo={fetchedMainInfo} />

      <Reviews reviews={fetchedReviewsInfo} />

      <Popup />
    </Layout>
  );
};

export async function getStaticProps() {
  const fetchedMainInfo = await getMainInfo();
  const fetchedHeroInfo = await getHeroInfo();
  const fetchedAboutInfo = await getAboutInfo();
  const fetchedOfferInfo = await getOfferInfo();
  const fetchedSchoolInfo = await getSchoolInfo();
  const fetchedSliderInfo = await getSliderInfo();
  const fetchedStockInfo = await getStockInfo();
  const fetchedAdvantagesInfo = await getAdvantageInfo();
  const fetchedReviewsInfo = await getReviewsInfo();

  return {
    props: {
      fetchedMainInfo,
      fetchedHeroInfo,
      fetchedAboutInfo,
      fetchedOfferInfo,
      fetchedSchoolInfo,
      fetchedSliderInfo,
      fetchedStockInfo,
      fetchedAdvantagesInfo,
      fetchedReviewsInfo,
    },
  };
}

export default Home;
