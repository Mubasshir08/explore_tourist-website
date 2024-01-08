import React from 'react';
import TrandingPlace from '../TrandingPlace/TrandingPlace';
import MorePlace from '../MorePlace/MorePlace';
import ExploredPlace from '../ExploredPlace/ExploredPlace';
import HomePageLayout from '../../layout/HomePageLayout';
import Video from '../../components/Video/Video';

const Home = () => {
  return (
    <div>
        <HomePageLayout>
          <Video/>
          <TrandingPlace></TrandingPlace>
          <MorePlace></MorePlace>
          <ExploredPlace></ExploredPlace> 
        </HomePageLayout>
    </div>
  );
};

export default Home;
