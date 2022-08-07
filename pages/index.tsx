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
  getVideo,
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
  IVideo,
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
import Video from "@components/Home/Video";

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
  fetchedVideo: IVideo;
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
  fetchedVideo,
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

      <Video title={fetchedVideo.title} url={fetchedVideo.url} />

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
  const fetchedVideo = await getVideo();

  return {
    revalidate: 1,
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
      fetchedVideo,
    },
  };
}

export default Home;
