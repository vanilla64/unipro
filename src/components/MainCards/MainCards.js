import React from 'react';
import Cards from "../Cards/Cards";
import MainCard from "../MainCard/MainCard";
import Card from "../Card/Card";

function MainCards(props) {
  return (
    <Cards type={'main'}>
      <MainCard />
      <Card title={'Котировки'} type={'quotes'} />
    </Cards>
  );
}

export default MainCards;