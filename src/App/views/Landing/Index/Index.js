import React from "react";

import Banner from "./components/Banner";
import Categories from "./container/categories";
import NewArrivals from "./container/movieTypes";
import DealOfTheWeek from "./components/DealOfTheWeek";
import BestSellers from "./NewComing/BestSellers";
import Benefit from "./components/Benefit";
import Groups from "./container/Groups";

import Genres from "./container/genres";
//Css

class Index extends React.Component {
  render() {
    return (
      <>
        {}

        <Banner/>

        <Categories/>

        {/*<NewArrivals/>*/}
        <Genres/>

        <DealOfTheWeek/>
        {}
        <BestSellers/>
        {}
        {/*<Benefit/>*/}
        {}
        {/*<Groups/>*/}

      </>
    );
  }
}

export default Index;
