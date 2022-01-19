import React from "react";

import {
  getAboutInfo,
  getHeroInfo,
  getMainInfo,
  getOfferInfo,
  getSchoolInfo,
  getSliderInfo,
} from "@api/graph";
import {
  IMainInfo,
  IHeroInfo,
  IAboutInfo,
  IOfferInfo,
  ISchoolInfo,
  ISliderInfo,
} from "@api/graphTypes";
import Layout from "@components/Global/Layout";
import About from "@components/Home/About";
import Hero from "@components/Home/Hero";
import Offer from "@components/Home/Offer";
import Popup from "@components/Home/Popup";
import Slider from "@components/Home/Slider";

interface IHome {
  fetchedMainInfo: IMainInfo;
  fetchedHeroInfo: IHeroInfo;
  fetchedAboutInfo: IAboutInfo;
  fetchedOfferInfo: IOfferInfo;
  fetchedSchoolInfo: ISchoolInfo[];
  fetchedSliderInfo: ISliderInfo;
}

const Home: React.FC<IHome> = ({
  fetchedMainInfo,
  fetchedHeroInfo,
  fetchedAboutInfo,
  fetchedOfferInfo,
  fetchedSchoolInfo,
  fetchedSliderInfo,
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

  return {
    props: {
      fetchedMainInfo,
      fetchedHeroInfo,
      fetchedAboutInfo,
      fetchedOfferInfo,
      fetchedSchoolInfo,
      fetchedSliderInfo,
    },
  };
}

export default Home;
