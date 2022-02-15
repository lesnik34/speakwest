import React from "react";

import {
  getAboutInfo,
  getHeroInfo,
  getMainInfo,
  getOfferInfo,
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
} from "@api/graphTypes";
import Layout from "@components/Global/Layout";
import About from "@components/Home/About";
import Hero from "@components/Home/Hero";
import Offer from "@components/Home/Offer";
import Popup from "@components/Home/Popup";
import Slider from "@components/Home/Slider";
import Mailer from "@components/Home/Mailer";
import Stock from "@components/Home/Stock";

interface IHome {
  fetchedMainInfo: IMainInfo;
  fetchedHeroInfo: IHeroInfo;
  fetchedAboutInfo: IAboutInfo;
  fetchedOfferInfo: IOfferInfo;
  fetchedSchoolInfo: ISchoolInfo[];
  fetchedSliderInfo: ISliderInfo;
  fetchedStockInfo: IStockInfo;
}

const Home: React.FC<IHome> = ({
  fetchedMainInfo,
  fetchedHeroInfo,
  fetchedAboutInfo,
  fetchedOfferInfo,
  fetchedSchoolInfo,
  fetchedSliderInfo,
  fetchedStockInfo,
}) => {
  return (
    <Layout mainInfo={fetchedMainInfo} schools={fetchedSchoolInfo}>
      <Hero
        title={fetchedHeroInfo.title}
        description={fetchedHeroInfo.description}
        image={fetchedHeroInfo?.image?.url}
      />

      <About
        title={fetchedAboutInfo.title}
        description={fetchedAboutInfo.description}
      />

      <Offer
        title={fetchedOfferInfo.title}
        programs={fetchedOfferInfo.programs}
      />

      <Slider slider={fetchedSliderInfo} />

      <Mailer mainInfo={fetchedMainInfo} />

      <Stock stock={fetchedStockInfo} />

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

  return {
    props: {
      fetchedMainInfo,
      fetchedHeroInfo,
      fetchedAboutInfo,
      fetchedOfferInfo,
      fetchedSchoolInfo,
      fetchedSliderInfo,
      fetchedStockInfo,
    },
  };
}

export default Home;
