import React from 'react';
import './Cards.sass'

function Cards({ children, type }) {
  const styles = {
    ul: type
      ? `cards cards_type_${type}`
      : 'cards'
  }

  return (
    <ul className={styles.ul}>{ children }</ul>
  );
}

export default Cards;